/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.model;

import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

/**
 * Implementation of {@link IDataModel}.
 * This class represents a table collection.
 * Uses java Map to store Rows and their indexes.
 * 
 * Current version support two variants: 
 * Default - when {@link HashMap} is used for rows storing and write-lock is true. 
 * WriteLock means all write (set) operations will be locked using {@link Lock} class.
 * Customisable - when constructor allows to specify Map to be used and boolean for write lock.   
 */
public class DataModel implements IDataModel {
    
    protected IDataModelId dataModelId;
    protected String name;
    protected Map<String, IA1Address> namedAdresses;
    protected Map<String, ICellValue> namedValues;

    /** Workbook (table) representation: Row index, Column index, Data {@link IDmCell} */
    protected final Map<Integer, IDmRow> table;
    
    /** Lock on all row write operations */
    protected final Optional<Lock> writeLock;
    protected final Optional<Lock> cellWriteLock;

    public DataModel(String name) {
        this(name, new HashMap<>(), true);
    }
    
    public DataModel(String name, Map<Integer, IDmRow> tableImpl, boolean doWriteLock) {
        this.dataModelId = new DataModelId();
        this.name = name;
        this.table = tableImpl;
        this.writeLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
        this.cellWriteLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
        this.namedAdresses = new HashMap<>();
        this.namedValues = new HashMap<>();
    }

    @Override public IDataModelId getDataModelId() { return this.dataModelId; }
    @Override public void setDataModelId(IDataModelId dataModelId) { this.dataModelId = dataModelId; }
    
    @Override public String getName() { return this.name; }
    @Override public void setName(String name) { this.name = name; }

    @Override
    public IDmRow getRow(int rowIdx) {
        return this.table.get(Integer.valueOf(rowIdx));
    }

    @Override
    public IDmRow getRow(ICellAddress address) {
        return address == null ? null : this.getRow(address.a1Address().row());
    }

    @Override
    public void setRow(int rowIdx, IDmRow row) {
        if (rowIdx < 0) { return; }
        
        try {
            if (this.writeLock.isPresent()) { this.writeLock.get().lock(); }
            this.table.put(Integer.valueOf(rowIdx), row);
        }
        finally { if (this.writeLock.isPresent()) { this.writeLock.get().unlock(); } }
    }
    
    @Override
    public void setRow(ICellAddress address, IDmRow row) {
        if (address != null ) { this.setRow(address.a1Address().row(), row); }
    }

    @Override
    public IDmCell getCell(int rowIdx, int cellIdx) {
        IDmRow r = this.getRow(rowIdx);
        return r == null ? null : r.getCell(cellIdx);
    }
    
    @Override
    public IDmCell getCell(ICellAddress address) {
        return address == null ? null : this.getCell(address.a1Address().row(), address.a1Address().column());
    }

    @Override
    public void setCell(int rowIdx, int cellIdx, IDmCell cell) {
        if (rowIdx < 0 || cellIdx < 0) { return; }
        
        try {
            if (this.cellWriteLock.isPresent()) { this.cellWriteLock.get().lock(); }
            
            IDmRow r = this.getRow(rowIdx);
            if (r == null) { 
                r = new DmRow(rowIdx); 
                this.setRow(rowIdx, r); 
            }
            
            r.setCell(cellIdx, cell);
        }
        finally { if (this.cellWriteLock.isPresent()) { this.cellWriteLock.get().unlock(); } }
    }
    
    @Override
    public void setCell(ICellAddress address, IDmCell cell) {
        if (address != null ) { this.setCell(address.a1Address().row(), address.a1Address().column(), cell); }
    }
    
    @Override public int rowCount() { return this.table.size(); }

    @Override
    public int getFirstRowIndex() {
        return this.table.keySet().stream().min(Integer::compare).orElse(Integer.valueOf(-1));
    }

    @Override
    public int getLastRowIndex() {
        return this.table.keySet().stream().max(Integer::compare).orElse(Integer.valueOf(-1));
    }

    @Override
    public IA1Address getNamedAddress(String alias) {
        return this.namedAdresses.get(alias);
    }

    @Override
    public void setNamedAddress(String alias, IA1Address address) {
        this.namedAdresses.put(alias, address);
    }

    @Override
    public ICellValue getNamedValue(String alias) {
        return this.namedValues.get(alias);
    }

    @Override
    public void setNamedValue(String alias, ICellValue value) {
        this.namedValues.put(alias, value);
    }

    @Override
    public Map<String, IA1Address> getNamedAddresses() {
        return Collections.<String, IA1Address>unmodifiableMap(this.namedAdresses);
    }

    @Override
    public Map<String, ICellValue> getNamedValues() {
        return Collections.<String, ICellValue>unmodifiableMap(this.namedValues);
    }
    
    @Override 
    public Iterator<IDmRow> iterator() {
        return this.table.entrySet()
                         .stream()
                         .sorted(Comparator.comparing(Entry::getKey))
                         .map(Entry::getValue)
                         .collect(Collectors.<IDmRow>toList())
                         .listIterator();
    }

    @Override
    public Spliterator<IDmRow> spliterator() {
        return Spliterators.<IDmRow>spliterator(this.iterator(), this.table.size(), 0);
    }

    @Override
    public Stream<IDmRow> stream() {
        return StreamSupport.<IDmRow>stream(this.spliterator(), false);
    }
    
    @Override
    public String toString() { 
        return this.name + "\n" + 
               String.join("\n", this.table.entrySet()
                                           .stream()
                                           .sorted(Comparator.comparing(Entry::getKey))
                                           .map(e -> e.getValue() == null ? "null" : e.getValue().toString())
                                           .collect(Collectors.<String>toList()));
    }

}
