/*
Copyright 2015 DataArt, Inc.

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
package com.dataart.spreadsheetanalytics.api.engine;

import java.util.List;

import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSourceQuery;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public interface DataSourceHub {

    void addDataSource(DataSource dataSource);
    
    void removeDataSource(DataSource dataSource);
    
    void removeDataSource(String dataSourceName);
    
    DataSource getDataSource(String dataSourceName);

    IDataSet executeQuery(String dataSourceName, DataSourceQuery query, List<Object> params) throws Exception;
}
