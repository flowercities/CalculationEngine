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
package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.engine.Functions.getUdfFinder;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Name;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DmCell;
import com.dataart.spreadsheetanalytics.model.DmRow;

final class DataModelConverters {
    
    private DataModelConverters() {}

    /**
     * Converts an {@link InputStream} to {@link IDataModel}. Uses new {@link XSSFWorkbook} as proxy.
     * @see DataModelConverters#toDataModel(Workbook)
     */
    static IDataModel toDataModel(final InputStream workbook) {
        return toDataModel(ConverterUtils.newWorkbook(workbook));
    }
    
    /**
     * For given {@link Workbook} does convert everything to new {@link DataModel} structure.
     * Does copy all supported fields (for supported fields see {@link DataModel} class.
     */
    static IDataModel toDataModel(final Workbook workbook) {
        if (workbook == null) { return null; }
        
        //add custom functions information
        workbook.addToolPack(getUdfFinder());
        
        Sheet s = workbook.getSheetAt(0); //TODO: only one sheet is supported
        if (s == null) { return null; }
        
        DataModel dm = new DataModel(s.getSheetName());
        
        for (int i = s.getFirstRowNum(); i <= s.getLastRowNum(); i++) {
            Row r = s.getRow(i);
            if (r == null) { continue; }
            
            DmRow row = new DmRow(i);
            dm.setRow(i, row);
            
            for (int j = r.getFirstCellNum(); j < r.getLastCellNum(); j++) {
                Cell c = r.getCell(j);
                if (c == null) { continue; }
                
                DmCell cell = new DmCell();
                row.setCell(j, cell);
                
                cell.setAddress(A1Address.fromRowColumn(i, j));
                cell.setContent(ConverterUtils.resolveCellValue(c));
            }
        }

        for (int nIdx = 0; nIdx < workbook.getNumberOfNames(); nIdx++) {
            Name name = workbook.getNameAt(nIdx);
            dm.setCellAlias(A1Address.fromA1Address(name.getRefersToFormula()), name.getNameName());
        }

        return dm;
    }
    
    /**
     * Uses {@link DataModelConverters#toXlsxFile(IDataModel, InputStream)} with null formatting (no formatting).
     */
    static OutputStream toXlsxFile(final IDataModel dataModel) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataModel, (Workbook) null).write(xlsx); }
        catch (IOException e) { throw new RuntimeException(e); }
        
        return xlsx;
    }
    
    /**
     * Uses {@link DataModelConverters#toWorkbook(IDataModel, InputStream)} with {@link ByteArrayOutputStream} as out stream
     * and new {@link XSSFWorkbook} as {@link InputStream} wrapper.
     */
    static OutputStream toXlsxFile(final IDataModel dataModel, final InputStream formatting) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataModel, ConverterUtils.newWorkbook(formatting)).write(xlsx); }
        catch (IOException e) { throw new RuntimeException(e); }
        
        return xlsx;
    }
    
    /**
     * Convertes plain {@link IDataModel} to plain new {@link XSSFWorkbook}.
     */
    static Workbook toWorkbook(final IDataModel dataModel) {
        return toWorkbook(dataModel, (Workbook) null);
    }
    
    /**
     * Convertes plain {@link IDataModel} to new {@link XSSFWorkbook} with formatting provided.
     */
    static Workbook toWorkbook(final IDataModel dataModel, final Workbook formatting) {
        Workbook result = formatting == null ? ConverterUtils.newWorkbook() : ConverterUtils.clearContent(formatting);
        
        Sheet wbSheet = result.getSheet(dataModel.getName());
        if (wbSheet == null) { wbSheet = result.createSheet(dataModel.getName()); }

        dataModel.getCellAliases().forEach((k, v) -> {
            Name name = result.createName();
            name.setNameName(v);
            name.setRefersToFormula(k.a1Address().address());
        });

        for (int rowIdx = dataModel.getFirstRowIndex(); rowIdx <= dataModel.getLastRowIndex(); rowIdx++) {
            IDmRow dmRow = dataModel.getRow(rowIdx);
            if (dmRow == null) { continue; }
            Row wbRow = wbSheet.getRow(rowIdx);
            if (wbRow == null) { wbRow = wbSheet.createRow(rowIdx); }
            
            for (int cellIdx = dmRow.getFirstColumnIndex(); cellIdx <= dmRow.getLastColumnIndex(); cellIdx++) {
                IDmCell dmCell = dmRow.getCell(cellIdx);
                if (dmCell == null) { continue; }
                
                Cell wbCell = wbRow.getCell(cellIdx);
                if (wbCell == null) { wbCell = wbRow.createCell(cellIdx); }
                
                ConverterUtils.populateCellValue(wbCell, dmCell.getContent());
            }
        }

        return result;
    }

}
