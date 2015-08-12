package com.dataart.spreadsheetanalytics.util.print;

import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.ICellNode;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.model.CellNode;
import com.dataart.spreadsheetanalytics.model.ExecutionGraph;

public class ExecutionGraphConsolePrinter {

    public final CellNode node;

    public ExecutionGraphConsolePrinter(CellNode node) {
        this.node = node;
    }

    public static void print(IExecutionGraph graph) {
        JGraphVisualizator.visualize(ExecutionGraph.unwrap((ExecutionGraph) graph));
    }

    public void printStaticGraph() {
        printStaticNode(node, "", true);
    }

    private void printStaticNode(CellNode node, String prefix, boolean isTail) {
        String postfix = "";
        for (int i = 35; i > prefix.length(); i--) {
            postfix += " ";
        }
        System.out.println(prefix + (isTail ? "└── " : "├── ") + node.address().a1Address() + postfix + node.formula());

        List<ICellNode> children = node.getStaticNodes();

        for (int i = 0; i < children.size() - 1; i++) {
            printStaticNode((CellNode) children.get(i), prefix + (isTail ? "    " : "│   "), false);
        }
        if (children.size() > 0) {
            printStaticNode((CellNode) children.get(children.size() - 1), prefix + (isTail ? "    " : "│   "), true);
        }
    }

    public void printDynamicGraph() {
        printDynamicNode(node, "", true);
    }

    private void printDynamicNode(CellNode node, String prefix, boolean isTail) {
        String postfix = "";
        for (int i = 35; i > prefix.length(); i--) {
            postfix += " ";
        }
        System.out.println(prefix + (isTail ? "└── " : "├── ") + node.address().a1Address() + postfix + node.formula());

        List<ICellNode> children = node.getDynamicNodes();

        for (int i = 0; i < children.size() - 1; i++) {
            printDynamicNode((CellNode) children.get(i), prefix + (isTail ? "    " : "│   "), false);
        }
        if (children.size() > 0) {
            printDynamicNode((CellNode) children.get(children.size() - 1), prefix + (isTail ? "    " : "│   "), true);
        }
    }
}