package com.dataart.spreadsheetanalytics.demo;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.swing.JFrame;
import javax.swing.JScrollPane;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jgraph.JGraph;
import org.jgrapht.DirectedGraph;
import org.jgrapht.Graph;
import org.jgrapht.ext.JGraphModelAdapter;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress.A1Address;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.model.CellAddress;

public class ExecutionGraphDemo {
    
    public static void main(String[] args) throws Exception {
        
        final String path = "src/main/resources/excel/2.xlsx";
        // TODO: this part  should somewhere in dataprovider and Class should be something like IWorkbook or IModel
        final XSSFWorkbook model = new XSSFWorkbook(path);
        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        
        ICellAddress addr = new CellAddress().a1Address(new A1Address("A1")).row(0).column(0);
        
        IExecutionGraph graph = auditor.buildDynamicExecutionGraph(model, addr);
        
        generateVisJsData(ExecutionGraph.unwrap((ExecutionGraph) graph));
        plainprint(ExecutionGraph.unwrap((ExecutionGraph) graph));
        visualize(ExecutionGraph.unwrap((ExecutionGraph) graph));
    }

    public static void visualize(Graph graphT) {

        JGraph graph = new JGraph(new JGraphModelAdapter(graphT));

        // Show in Frame
        JFrame frame = new JFrame();
        frame.getContentPane().add(new JScrollPane(graph));
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }
    
    public static void plainprint(DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
        for (IExecutionGraphVertex vertex : graph.vertexSet()) {
            System.out.println("---------------------------------");
            System.out.println("Vertex Id: " + vertex.id());
            System.out.println("Name: " + vertex.name());
            System.out.println("Type: " + vertex.type());
            System.out.println("Formula Expression: " + vertex.formula());
            System.out.println("Value: " + vertex.value());
            System.out.println("Source Object Id: " + vertex.sourceObjectId());
        }
    }
    
    private static void generateVisJsData(DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
        try {
            final String dataTemplateFileStr = "src/main/resources/ui/data_template.js";
            final String dataFileStr = "src/main/resources/ui/data.js";

            final String VERTICES_PLACEHOLDER = "<%vertices_placeholder%>";
            final String EDGES_PLACEHOLDER = "<%edges_placeholder%>";
            
            StringBuilder verticesJson = new StringBuilder();
            StringBuilder edgesJson = new StringBuilder();

            for (IExecutionGraphVertex vertex : graph.vertexSet()) {
                /* {id: a, label: b, ...}, */
                
                verticesJson.append("{id: '")
                            .append(vertex.id())
                            .append("', label: '")
                            .append(vertex.name())
                            .append("', color: '")
                            .append(vertex.type() == Type.OPERATOR || vertex.type() == Type.FUNCTION || vertex.type() == Type.IF ? "#f0ad4e" : "#31b0d5")
                            .append("', title: '")
                                .append("Name: ")
                                .append(vertex.name())
                                .append("<br>")
                                .append("Value: ")
                                .append(vertex.value())
                                .append("<br>")
                                .append("Type: ")
                                .append(vertex.type())
                                .append("<br>")
                                .append("Id: ")
                                .append(vertex.id())
                                .append("<br>")
                                .append("Formula Expression: ")
                                .append(vertex.formula())
                                .append("<br>")
                                .append("Source Object Id: ")
                                .append(vertex.sourceObjectId())
                            .append("'},\n");
            }
            verticesJson.setLength(verticesJson.length() - 2);

            for (DefaultEdge edge : graph.edgeSet()) {
                /* {from: id_a, to: id_b}, */
                
                IExecutionGraphVertex from = graph.getEdgeSource(edge);
                IExecutionGraphVertex to = graph.getEdgeTarget(edge);
                
                edgesJson.append("{from: '")
                         .append(from.id())
                         .append("', to: '")
                         .append(to.id())
                         .append("'},\n");
            }
            edgesJson.setLength(edgesJson.length() - 2);

            String content = new String(Files.readAllBytes(Paths.get(dataTemplateFileStr)), StandardCharsets.UTF_8);
            content = content.replaceAll(VERTICES_PLACEHOLDER, verticesJson.toString())
                             .replaceAll(EDGES_PLACEHOLDER, edgesJson.toString());
            
            Files.write(Paths.get(dataFileStr), content.getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
