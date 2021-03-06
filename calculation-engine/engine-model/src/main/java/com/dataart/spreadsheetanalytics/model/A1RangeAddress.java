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

import static java.lang.String.format;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.poi.ss.util.CellRangeAddress;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;

/**
 * Special case of {@link A1Address} for ranges.
 * Its implementation is just a container for {@link A1Address} instances.
 * 
 * TODO: Maxim
 */
public class A1RangeAddress extends A1Address {

    public static final String RANGE_DELIMITER = ":";
    
    protected List<IA1Address> addresses;

    protected A1RangeAddress(String a1address) {
        this.addresses = new LinkedList<>();
        
        if (!a1address.contains(RANGE_DELIMITER)) { this.addresses.add(A1Address.fromA1Address(a1address)); return; }
        
        CellRangeAddress addrs = CellRangeAddress.valueOf(a1address);
        int fromR = addrs.getFirstRow();
        int fromC = addrs.getFirstColumn();
        int toR = addrs.getLastRow();
        int toC = addrs.getLastColumn();

        for (int row = fromR; row <= toR; row++) {
            for (int col = fromC; col <= toC; col++) {
                this.addresses.add(A1Address.fromRowColumn(row, col));
            }
        }
    }

    public static List<IA1Address> toA1Addresses(A1RangeAddress rangeAddress) {
        return Collections.<IA1Address>unmodifiableList(rangeAddress.addresses);
    }
    
    public static List<ICellAddress> toCellAddresses(A1RangeAddress rangeAddress) {
        return Collections.<ICellAddress>unmodifiableList(rangeAddress.addresses.stream()
                                                                                .map(e -> { return (ICellAddress) e; })
                                                                                .collect(Collectors.toList()));
    }

    @Override
    public int hashCode() {
        int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((this.addresses == null) ? 0 : this.addresses.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) { return true; }
        if (!super.equals(obj)) { return false; }
        if (getClass() != obj.getClass()) { return false; }
        A1RangeAddress other = (A1RangeAddress) obj;
        if (this.addresses == null) {
            if (other.addresses != null) { return false; }
        } else if (!this.addresses.equals(other.addresses)) { return false; }
        return true;
    }
    
    @Override
    public String address() {
        if (this.addresses.size() == 1) { return this.addresses.get(0).address(); }

        return format("%s%s%s", this.addresses.get(0).address(), 
                                RANGE_DELIMITER, 
                                this.addresses.get(this.addresses.size() - 1).address());
    }

}
