package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.IN_OUT_SEPARATOR;
import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.KEYWORD;
import static java.lang.Runtime.getRuntime;
import static java.util.concurrent.TimeUnit.MINUTES;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelLocation;
import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.model.DataModel;

/**
 * Simple {@link IDataProvider} implementations based on HashMaps.
 */
public class DataProvider implements IDataProvider {

    //this is a cache
    protected Map<String, DefineFunctionMeta> defines;

    //TODO: this should be a persistent storage
    protected Map<IDataModelId, IDataModel> dataModels;

    protected DataProvider() {}

    /**
     * Creates new instance of {@link IDataProvider} with nothing inside.
     * Since data provider can be filled up with data later. 
     */
    public static IDataProvider createEmptyDataProvider() {
        DataProvider dp = new DataProvider();
        dp.defines = new HashMap<>();
        dp.dataModels = new HashMap<>();

        return dp;
    }

    @Override
    public Map<String, DefineFunctionMeta> getDefineFunctions() {
        return Collections.<String, DefineFunctionMeta> unmodifiableMap(defines);
    }

    @Override
    public void updateDefineFunctions() {
        ConcurrentHashMap<String, DefineFunctionMeta> map = new ConcurrentHashMap<>(defines.size());
        defines.clear();
        
        ExecutorService scanner = Executors.newFixedThreadPool(getRuntime().availableProcessors() > dataModels.size()
                                                                    ? dataModels.size()
                                                                    : getRuntime().availableProcessors());
        List<Runnable> targets = new ArrayList<>(dataModels.size());
        dataModels.forEach((k, v) -> { targets.add(() -> map.putAll(scanDataModelForDefines(v))); });

        try {
            targets.forEach(r -> scanner.execute(r));
            scanner.shutdown();
            scanner.awaitTermination(/* TODO */5, MINUTES);
        } catch (InterruptedException e) {
            // TODO
        }
        
        defines.putAll(map);
    }

    @Override
    public void addDefineFunction(DefineFunctionMeta meta) {
        this.defines.put(meta.name(), meta);
    }

    @Override
    public void updateDataModels(IDataModelLocation location) {
        if (!(location instanceof FileSystemDataModelLocation)) {
            throw new IllegalArgumentException(getClass().getSimpleName() + " does not support " + location.getClass().getSimpleName());
        }
        
        dataModels.clear();
        addDataModel(location);
    }

    @Override
    public void addDataModel(IDataModelLocation location) {
        if (!(location instanceof FileSystemDataModelLocation)) {
            throw new IllegalArgumentException(getClass().getSimpleName() + " does not support " + location.getClass().getSimpleName());
        }

        FileSystemDataModelLocation l = (FileSystemDataModelLocation) location;
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(l.getPath())) {
            for (Path file : stream) {
                DataModel dm = new DataModel(file.toAbsolutePath().toString());
                dataModels.put(dm.dataModelId(), dm);
            }
        } catch (IOException e) {
            //TODO
        }
    }

    @Override
    public void addDataModel(IDataModel dataModel) {
        dataModels.put(dataModel.dataModelId(), dataModel);
    }

    @Override
    public IDataModel getDataModel(IDataModelId dataModelId) {
        return dataModels.get(dataModelId);
    }

    @Override
    public IDataModel createModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws IOException {
        IDataModel model = getDataModel(dataModelId);
        
        //debug
        long time1 = System.nanoTime();
        IDataModel execModel = copyModelInMemory((DataModel) model);
        long time2 = System.nanoTime();
        System.out.println("Time for copy model into memory: " + TimeUnit.NANOSECONDS.toSeconds((time2 - time1)) + " sec.");

        //debug
        long time3 = System.nanoTime();
        for (int i = 0; i < inputAddresses.size(); i++) {
            execModel.replaceCellValue(inputAddresses.get(i), inputValues.get(i));
        }
        long time4 = System.nanoTime();
        System.out.println("Time for replace all cell values in model: " + TimeUnit.NANOSECONDS.toSeconds((time4 - time3)) + " sec.");


        return execModel;
    }

    /**
     * Does exact copy of {@link DataModel} to memory.
     * There some cases when original model should contains different (replaced) values and
     * only then executed.
     * To avoid copying model to files this method can store it in memory.
     * 
     *  Implementation is based on {@link ByteArrayInputStream} and {@link ByteArrayOutputStream}
     *  and {@link Arrays#copyOf(boolean[], int)} to do the actual copy command.
     *  
     *  Returned {@link IDataModel} will not be equal to original one. But may contain the same Id.
     */
    protected IDataModel copyModelInMemory(DataModel model) throws IOException {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        model.model.write(os);
        
        byte[] b = os.toByteArray();
        InputStream in = new ByteArrayInputStream(Arrays.copyOf(b, b.length));

        return new DataModel(in);
    }

    /**
     * Does full scan given {@link IDataModel} for DEFINE functions ({@link DefineFunctionMeta}).
     * 3 iterators are used inside to go through all the cells and find 'DEFINE' keyword.
     */
    protected Map<String, DefineFunctionMeta> scanDataModelForDefines(IDataModel dataModel) {
        DataModel dm = (DataModel) dataModel;
        
        Map<String, DefineFunctionMeta> map = new HashMap<>();

        for (Iterator sheeterator = dm.model.iterator(); sheeterator.hasNext();) {
            Sheet sh = (Sheet) sheeterator.next();
            for (Iterator rowterator = sh.iterator(); rowterator.hasNext();) {
                Row ro = (Row) rowterator.next();
                
                String lastSuccessFormula = "";
                
                for (Iterator celterator = ro.iterator(); celterator.hasNext();) {
                    Cell ce = (Cell) celterator.next();
                    if (ce == null) continue;
                        
                    //for each cell we should scan for =DEFINE key word
                    //then get it and parse to DefineFunctionMeta
                    if (CELL_TYPE_FORMULA != ce.getCellType()) continue;
                    
                    //DEBUG
                    String formula = "";
                    try {
                        formula = ce.getCellFormula();
                        lastSuccessFormula = formula;
                    }catch(Exception e) {
                        System.out.println(lastSuccessFormula);
                        System.exit(0);
                    }
                    
                    if (!formula.startsWith(KEYWORD)) continue;
                    
                    if (!formula.contains(IN_OUT_SEPARATOR)) {
                        //TODO log or throw?? if throw create exception?
                        throw new RuntimeException(KEYWORD + " function must contain a " + IN_OUT_SEPARATOR);
                    }

                    DefineFunctionMeta meta = DefineFunctionMeta.parse(formula);
                    meta.dataModelId(dataModel.dataModelId());
                    
                    map.put(meta.name(), meta);
                }
            }
        }
        
        return map;
    }
    
}
