package com.dataart.spreadsheetanalytics.query;

import org.junit.AfterClass;
import org.junit.BeforeClass;

public class QUERY_1000set_100times_Test extends ZParentTest {

    static String description;
    static int iterations = 100;
    static int dataSetSize = 1000;
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
        ZParentTest.before();
    }

    @AfterClass
    public static void after() throws Exception {
        ZParentTest.after();
    }

}