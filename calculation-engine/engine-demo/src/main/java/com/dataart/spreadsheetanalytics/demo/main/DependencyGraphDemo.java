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
package com.dataart.spreadsheetanalytics.demo.main;

import java.nio.file.Paths;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.PoiDataModel;

public class DependencyGraphDemo {
    
    public static void main(String[] args) throws Exception {

        //input arguments: filename and list of cells to evaluate
        if (args.length < 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }
        
        final String excel = args[0];
        final String graphCell = args[1];

        //prepare DataModel to work with
        final PoiDataModel model = new PoiDataModel(Paths.get(excel).getFileName().toString(), excel);
                
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(graphCell));

        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        final IAuditor auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator);
        final IExecutionGraph graph = auditor.buildDependencyGraph(addr);
        
        //print graph
        DemoUtil.generateVisJsData(graph);
        DemoUtil.plainprint(graph);
    }
    
}