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

import static com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder.buildSingleVertexGraphForCellWithValue;
import static com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder.buildSingleVertexGraphForEmptyCell;
import static com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder.buildSingleVertexGraphForParseException;
import static org.apache.poi.ss.formula.eval.ErrorEval.NAME_INVALID;
import static org.apache.poi.ss.formula.eval.ErrorEval.VALUE_INVALID;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.apache.poi.common.execgraph.IncorrectExternalReferenceException;
import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Name;
import org.apache.poi.ss.usermodel.Workbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiDependencyGraphBuilder;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder;

/**
 * SpreadsheetAuditor is a direct implementation of {@link IAuditor}.
 * It allows to trace all execution steps while {@link IDataModel} is being evaluated.
 * The output is execution graph.
 * 
 * This class requires an instanse of {@link SpreadsheetEvaluator} to work, since it does not do actual calculation.
 * This class is thread safe, but it's <i>buildXXX</i> methods use Lock, because of POI's Evaluator nature (stateful).
 */
public class SpreadsheetAuditor implements IAuditor {
    private static final Logger log = LoggerFactory.getLogger(SpreadsheetAuditor.class);

    protected final SpreadsheetEvaluator evaluator;
    protected final Lock graphLock = new ReentrantLock();
    protected final Lock staticGraphLock = new ReentrantLock();

    public SpreadsheetAuditor(SpreadsheetEvaluator evaluator) {
        this.evaluator = evaluator;
    }

    @Override
    public IExecutionGraph buildDependencyGraph(ICellAddress cell) {
        try {
            graphLock.lock();
            log.debug("Building Dependency Graph for address: {}.", cell);
            
            return PoiDependencyGraphBuilder.buildDependencyGraph(evaluator.model, cell);
        } finally {
            graphLock.unlock();
            log.debug("Building Dependency Graph for address: {} is finished.", cell);
        }
    }

    @Override
    public IExecutionGraph buildDependencyGraph() {
        try {
            graphLock.lock();
            log.debug("Building Dependency Graph for DataModel: {}.", evaluator.model);
            
            return PoiDependencyGraphBuilder.buildDependencyGraph(evaluator.model);
        } finally {
            graphLock.unlock();
            log.debug("Building Dependency Graph for DataModel: {} is finished.", evaluator.model);
        }
    }
    
    @Override
    public IExecutionGraph buildExecutionGraph(ICellAddress cell) {
        return buildExecutionGraph(cell, ExecutionGraphConfig.DEFAULT);
    }
    
    @Override
    public IExecutionGraph buildExecutionGraph(ICellAddress cell, ExecutionGraphConfig config) {
        try {
            graphLock.lock();
            log.debug("Building Graph for address: {}.", cell);
            
            /* Clear POI cache to allow graph building to be full */
            this.evaluator.poiEvaluator.clearAllCachedResultValues();
            
            PoiExecutionGraphBuilder graphBuilder = new PoiExecutionGraphBuilder();
            try { graphBuilder.setRefsToNames(getWorkbookNames(Converters.toWorkbook(evaluator.model))); }
            catch (Exception e) { e.printStackTrace(); /*TODO: remove Workbook*/ }
            
            graphBuilder.setExecutionGraphConfig(config);
            
            this.evaluator.setExecutionGraphBuilder(graphBuilder);
            
            try {
                ICellValue cv = evaluator.evaluate(cell);
                
                if (cv == null || cv.get() == null) { return buildSingleVertexGraphForEmptyCell(cell); }

                
                if (Cell.CELL_TYPE_FORMULA != ConverterUtils.resolveCellType(cv)) { return buildSingleVertexGraphForCellWithValue(cv, cell); }

                graphBuilder.runPostProcessing(false);
                ExecutionGraph g = graphBuilder.get();
                
                if (g.getVertices().isEmpty() || g.getVertices().size() == 1) {
                    if (VALUE_INVALID.getErrorString().equals(cv.get())) { return buildSingleVertexGraphForParseException(cell, VALUE_INVALID, null); }
                    if (NAME_INVALID.getErrorString().equals(cv.get())) { return buildSingleVertexGraphForParseException(cell, NAME_INVALID, null); }
                }
                
                return g;
            } catch (FormulaParseException | IncorrectExternalReferenceException e) {
                log.warn("Caught exception while building graph, but graph should be ok.", e);
                return graphBuilder.get();
            }
        } finally {
            graphLock.unlock();
            log.debug("Building Graph for address: {} is finished.", cell);
        }
    }

    @Override
    public IExecutionGraph buildExecutionGraph() {
        return buildExecutionGraph(ExecutionGraphConfig.DEFAULT);
    }

    @Override
    public IExecutionGraph buildExecutionGraph(ExecutionGraphConfig config) {
        try {
            graphLock.lock();
            log.debug("Building Graph for DataModel: {} with Config: {}.", evaluator.model, config);
            
            /* Clear POI cache to allow graph building to be full */
            this.evaluator.poiEvaluator.clearAllCachedResultValues();
            
            PoiExecutionGraphBuilder graphBuilder = new PoiExecutionGraphBuilder();
            
            try { graphBuilder.setRefsToNames(getWorkbookNames(Converters.toWorkbook(evaluator.model))); }
            catch (Exception e) { e.printStackTrace(); /*TODO: remove Workbook*/ }
            
            graphBuilder.setExecutionGraphConfig(config);
            this.evaluator.setExecutionGraphBuilder(graphBuilder);
            
            evaluator.evaluate();

            graphBuilder.runPostProcessing(true);
            return graphBuilder.get();
            
        } finally {
            graphLock.unlock();
            log.debug("Building Graph for DataModel: {} with Config: {} is finished.", evaluator.model, config);
        }
    }
    
    public static Map<String, String> getWorkbookNames(Workbook workbook) {
        Map<String, String> result = new HashMap<>(workbook.getNumberOfNames());
        for (int i = 0 ; i < workbook.getNumberOfNames() ; i++) {
            Name name = workbook.getNameAt(i);
            result.put(name.getNameName(), name.getRefersToFormula());
        }
        return result;
    }
    
    @Override
    public IEvaluator getEvaluator() { return evaluator; }

}
