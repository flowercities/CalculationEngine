package com.dataart.spreadsheetanalytics.engine;

import javax.cache.Cache;
import javax.cache.Caching;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet.Parameters;

public class CacheBasedDataSetStorage implements DataSetStorage {
    private static final Logger log = LoggerFactory.getLogger(CacheBasedDataSetStorage.class);
    
    public static final String DATA_SET_TO_ID_CACHE_NAME = "dataSetToIdCache";
    public static final String DATA_SET_TO_NAME_CACHE_NAME = "dataSetToNameCache";
    public static final String DATA_SET_TO_LAZY_PARAMETERS = "dataSetToLazyParameters";
    
    protected Cache<IDataModelId, IDataSet> dataSetToIdCache = Caching.getCache(DATA_SET_TO_ID_CACHE_NAME, IDataModelId.class, IDataSet.class);
    protected Cache<String, IDataSet> dataSetToNameCache = Caching.getCache(DATA_SET_TO_NAME_CACHE_NAME, String.class, IDataSet.class);
    
    protected Cache<ILazyDataSet.Parameters, IDataSet> dataSetToLazyParameters = Caching.getCache(DATA_SET_TO_LAZY_PARAMETERS, ILazyDataSet.Parameters.class, IDataSet.class);

    @Override
    public void saveDataSet(IDataSet dset) {
        saveDataSet(dset, DataSetScope.GLOBAL);
    }
    
    @Override
    public void saveDataSet(IDataSet dset, DataSetScope scope) {
        if (dset == null) { return; }
        if (dset.name() == null) { throw new IllegalArgumentException("DataSet must have a name."); }
        
        switch (scope) {
            case LOCAL: {
                this.dataSetToNameCache.put(dset.name(), dset);
                this.dataSetToIdCache.put(dset.dataModelId(), dset);
                break;
            }
            case GLOBAL: default: {
                this.dataSetToNameCache.put(dset.name(), dset);
                this.dataSetToIdCache.put(dset.dataModelId(), dset);
                break;
            }
        }
        
        log.debug("Saved new DataSet {} with scope {} to DataSetStorage", dset.name(), scope);
    }

    @Override
    public IDataSet getDataSet(IDataModelId dataModelId) throws Exception {
        IDataSet dset = this.dataSetToIdCache.get(dataModelId);
        if (dset == null) { throw new IllegalStateException(String.format("No DataSet with id = %s is found in DataSet storage.", dataModelId)); }
        
        return isLazyDataSet(dset) ? ((ILazyDataSet) dset).get(Parameters.EMPTY) : dset; 
    }

    @Override
    public IDataSet getDataSet(String name) throws Exception {
        return getDataSet(name, Parameters.EMPTY);
    }
    
    @Override
    public IDataSet getDataSet(String name, Parameters parameters) throws Exception {
        if (Parameters.EMPTY != parameters && dataSetToLazyParameters.containsKey(parameters)) { return dataSetToLazyParameters.get(parameters); }
        
        IDataSet dset = this.dataSetToNameCache.get(name);
        if (dset == null) { throw new IllegalStateException(String.format("No DataSet with name = %s is found in DataSet storage.", name)); }
        
        dset = isLazyDataSet(dset) ? ((ILazyDataSet) dset).get(parameters) : dset;
        dataSetToLazyParameters.put(parameters, dset);
        return dset;
    }

    @Override
    public boolean isLazyDataSet(String name) {
        return this.dataSetToNameCache.containsKey(name) && this.dataSetToNameCache.get(name) instanceof ILazyDataSet;
    }

    @Override
    public boolean isLazyDataSet(IDataSet dataSet) {    
        return dataSet instanceof ILazyDataSet;
    }

    public void setDataSetToIdCache(Cache<IDataModelId, IDataSet> dataSetToIdCache) { this.dataSetToIdCache = dataSetToIdCache; }
    public void setDataSetToNameCache(Cache<String, IDataSet> dataSetToNameCache) { this.dataSetToNameCache = dataSetToNameCache; }

    public void setDataSetToLazyParameters(Cache<ILazyDataSet.Parameters, IDataSet> dataSetToLazyParameters) { this.dataSetToLazyParameters = dataSetToLazyParameters; }

}
