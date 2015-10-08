package com.dataart.spreadsheetanalytics.api.engine;

/**
 * This is a singlethon class-facade to all external services 
 * needed for calculation engine to calculate and build graphs.
 */
public enum ExternalServices {
    INSTANCE;

    protected DataSetStorage dataSetStorage;
    protected DataModelStorage dataModelStorage;
    protected DataSourceHub dataSourceHub;
    protected AttributeFunctionStorage attributeFunctionStorage;

    public DataSetStorage getDataSetStorage() { return dataSetStorage; }
    public void setDataSetStorage(DataSetStorage dataSetStorage) { this.dataSetStorage = dataSetStorage; }

    public DataModelStorage getDataModelStorage() { return dataModelStorage; }
    public void setDataModelStorage(DataModelStorage dataModelStorage) { this.dataModelStorage = dataModelStorage; }

    public DataSourceHub getDataSourceHub() { return dataSourceHub; }
    public void setDataSourceHub(DataSourceHub dataSourceHub) { this.dataSourceHub = dataSourceHub; }

    public AttributeFunctionStorage getAttributeFunctionStorage() { return attributeFunctionStorage; }
    public void setAttributeFunctionStorage(AttributeFunctionStorage attributeFunctionStorage) { this.attributeFunctionStorage = attributeFunctionStorage; }
    
}