package com.dataart.spreadsheetanalytics.query;

import org.junit.AfterClass;
import org.junit.BeforeClass;

public class QUERY_10set_1times_Test extends ZParentTest {

    static String description;
    static int iterations = 1;
    static int dataSetSize = 10;
    static String excelFile = "src/test/resources/datamodel/query/QUERY_" + dataSetSize + "set_" + iterations + "times.xlsx";
    static String dataSet = "src/test/resources/dataset/ShuffledDataSet" + dataSetSize + ".xlsx";

    static {
        ZParentTest.description = description;
        ZParentTest.excelFile = excelFile;
        ZParentTest.dataSet = dataSet;
        ZParentTest.iterations = iterations;
    }
    
    @BeforeClass
    public static void before() throws Exception {
        ZParentTest.beforeTests();
    }

    @AfterClass
    public static void after() throws Exception {
        ZParentTest.afterTests();
    }

}
