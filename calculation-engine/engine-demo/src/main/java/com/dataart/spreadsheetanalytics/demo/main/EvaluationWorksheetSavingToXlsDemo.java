package com.dataart.spreadsheetanalytics.demo.main;

import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphConfig;

public class EvaluationWorksheetSavingToXlsDemo {

    public static void main(String[] args) throws Exception {
        if (args.length < 2) {
            System.err.println("Input Excel file path, output Excel file path, please!");
            return;
        }
        
        final String excel = args[0];
        final String outputFile = args[1];
        final IDataModel model = Converters.toDataModel(new XSSFWorkbook(excel));

        DemoUtil.initCaches(model, excel);
        
        //create Evaluator
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);

        try (FileOutputStream fileOut = new FileOutputStream(outputFile); 
             Workbook output = Converters.toWorkbook(evaluator.evaluate().getResult());)
        {
            output.write(fileOut);
            fileOut.flush();            
        } catch (IOException e) {
            System.err.println("Error saving output xlsx file");
        }
        
        //create Auditor
        final IAuditor auditor = new SpreadsheetAuditor(model);
        //build graph
        final IExecutionGraph graph = auditor.buildExecutionGraph(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES);

        //print graph
        DemoUtil.generateVisJsData(graph);
        DemoUtil.plainprint(graph);    
    }
    
}
