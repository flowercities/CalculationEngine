package com.dataart.spreadsheetanalytics.test.graph;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;
import static org.assertj.core.api.StrictAssertions.assertThat;

import java.io.IOException;


import javax.xml.transform.TransformerConfigurationException;

import org.junit.BeforeClass;
import org.junit.Test;
import org.xml.sax.SAXException;

import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Empty_Cell_E6_Test extends SerializedGraphTest {
    
    static String address = "E6";
    static String file = "Empty_cell";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    
    @BeforeClass
    public static void before() throws IOException {
        before(path, address);
    }
    
    @Test
    public void assert_ExcelFile_SerializedGraph() throws TransformerConfigurationException, SAXException {
        super.assert_ExcelFile_SerializedGraph(file, address);

    }

    @Test
    public void assert_root_vertex_not_null() {
        assertThat(rootVertex).isNotEqualTo(null);
    }
    
    @Test
    public void assert_root_vertex_fields() {
        assertThat(rootVertex.property(NAME).get()).isEqualTo(address);
        assertThat(rootVertex.property(VALUE).get()).isEqualTo(null);        
    }
    
    @Test
    public void assert_number_of_nodes() {
        assertThat(ExecutionGraph.unwrap((ExecutionGraph)graph).vertexSet().size()).isEqualTo(1);
    }
    
    @Test
    public void assert_root_formula_fields() {
        assertThat(rootVertex.formula()).isEqualTo(null);
    }    

}