var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '00878d98-93a5-4607-bfb2-79c7b4409b2b', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 00878d98-93a5-4607-bfb2-79c7b4409b2b<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '55f08e8e-e72b-4bb3-b90e-104d51e75cb2', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 55f08e8e-e72b-4bb3-b90e-104d51e75cb2<br>Formula Expression: Formula String: SUM(A3, A2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '04012520-2f00-40ca-9be6-8de609b41e28', label: 'A3\n3.2', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 04012520-2f00-40ca-9be6-8de609b41e28<br>Formula Expression: Formula String: A3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '054495e2-96ad-4049-80a5-2b3513f5ccfe', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: 054495e2-96ad-4049-80a5-2b3513f5ccfe<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: 'abca0fc5-8c77-476c-8616-3f2357849edd', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: abca0fc5-8c77-476c-8616-3f2357849edd<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: 'fe13d2d2-8e3a-4922-9166-e006fe7ae515', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: fe13d2d2-8e3a-4922-9166-e006fe7ae515<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(A3, A2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '1e1df637-c5aa-4871-87e9-2adef127dc7c', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 1e1df637-c5aa-4871-87e9-2adef127dc7c<br>Formula Expression: Formula String: SUM(A3, A2); Formula Values: SUM(3.2, 12.6); Formula Ptg: 3.2, 12.6 SUM ; Ptgs: A3, A2 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '4b871230-919d-467a-ab45-9a910dfc769e', label: 'VALUE\n12.9', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef_One<br>Value: 12.9<br>Type: CONSTANT_VALUE<br>Id: 4b871230-919d-467a-ab45-9a910dfc769e<br>Formula Expression: Formula String: VALUE; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '742ee915-64b9-4a38-ad8c-c125c49ad0dc', label: 'VALUE\n[[12.6], [3.2], [4.5], [9.0]]', color: '#31b0d5', title: 'Name: VALUE<br>Alias: My_Grades<br>Value: [[12.6], [3.2], [4.5], [9.0]]<br>Type: CONSTANT_VALUE<br>Id: 742ee915-64b9-4a38-ad8c-c125c49ad0dc<br>Formula Expression: Formula String: VALUE; Formula Values: [[12.6], [3.2], [4.5], [9.0]]; Formula Ptg: [[12.6], [3.2], [4.5], [9.0]]; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '4a0fbdb1-febb-44aa-9b41-7fa3cad7e5e3', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: 4a0fbdb1-febb-44aa-9b41-7fa3cad7e5e3<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(A3, A2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM  12.6, 3.2, 4.5, 9.0 AVERAGE  - 3.2, 12.6 SUM  -; Ptgs: VALUE, A4, A2 SUM  VALUE AVERAGE  - A3, A2 SUM  - Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '4a88ce49-a504-448f-ab1f-5516d9584ff6', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 4a88ce49-a504-448f-ab1f-5516d9584ff6<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '8e1efbb2-0930-45c4-a296-32fdbedb6684', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: 8e1efbb2-0930-45c4-a296-32fdbedb6684<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '8bb72afe-b930-4802-8340-9e8c66652184', label: 'A3\n3.2', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 8bb72afe-b930-4802-8340-9e8c66652184<br>Formula Expression: Formula String: A3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: 'b6175a39-a368-4e6e-b99e-07fdfea1cad7', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: b6175a39-a368-4e6e-b99e-07fdfea1cad7<br>Formula Expression: Formula String: SUM(A3, A2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: 'a5d44a1f-38a8-47e1-9e8d-e1eb40a7d2b6', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: a5d44a1f-38a8-47e1-9e8d-e1eb40a7d2b6<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: '5dcab40c-06ed-4459-8ed8-105d5b478756', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 5dcab40c-06ed-4459-8ed8-105d5b478756<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: 'f37932e5-278c-4ca7-916e-bf89d8ff78aa', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: f37932e5-278c-4ca7-916e-bf89d8ff78aa<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'},
{id: 'f5417756-fae6-4546-a7f3-418249644488', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: f5417756-fae6-4546-a7f3-418249644488<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e08711f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fe13d2d2-8e3a-4922-9166-e006fe7ae515', to: '4a0fbdb1-febb-44aa-9b41-7fa3cad7e5e3'},
{from: 'abca0fc5-8c77-476c-8616-3f2357849edd', to: '55f08e8e-e72b-4bb3-b90e-104d51e75cb2'},
{from: 'a5d44a1f-38a8-47e1-9e8d-e1eb40a7d2b6', to: '8e1efbb2-0930-45c4-a296-32fdbedb6684'},
{from: '04012520-2f00-40ca-9be6-8de609b41e28', to: '55f08e8e-e72b-4bb3-b90e-104d51e75cb2'},
{from: '5dcab40c-06ed-4459-8ed8-105d5b478756', to: '742ee915-64b9-4a38-ad8c-c125c49ad0dc'},
{from: '00878d98-93a5-4607-bfb2-79c7b4409b2b', to: 'b6175a39-a368-4e6e-b99e-07fdfea1cad7'},
{from: '4b871230-919d-467a-ab45-9a910dfc769e', to: '4a88ce49-a504-448f-ab1f-5516d9584ff6'},
{from: 'b6175a39-a368-4e6e-b99e-07fdfea1cad7', to: '1e1df637-c5aa-4871-87e9-2adef127dc7c'},
{from: '4a88ce49-a504-448f-ab1f-5516d9584ff6', to: 'a5d44a1f-38a8-47e1-9e8d-e1eb40a7d2b6'},
{from: '8bb72afe-b930-4802-8340-9e8c66652184', to: 'b6175a39-a368-4e6e-b99e-07fdfea1cad7'},
{from: 'f5417756-fae6-4546-a7f3-418249644488', to: '8e1efbb2-0930-45c4-a296-32fdbedb6684'},
{from: '742ee915-64b9-4a38-ad8c-c125c49ad0dc', to: 'f37932e5-278c-4ca7-916e-bf89d8ff78aa'},
{from: 'f37932e5-278c-4ca7-916e-bf89d8ff78aa', to: 'f5417756-fae6-4546-a7f3-418249644488'},
{from: '5dcab40c-06ed-4459-8ed8-105d5b478756', to: '4a88ce49-a504-448f-ab1f-5516d9584ff6'},
{from: '054495e2-96ad-4049-80a5-2b3513f5ccfe', to: '742ee915-64b9-4a38-ad8c-c125c49ad0dc'},
{from: '054495e2-96ad-4049-80a5-2b3513f5ccfe', to: '4a88ce49-a504-448f-ab1f-5516d9584ff6'},
{from: '55f08e8e-e72b-4bb3-b90e-104d51e75cb2', to: 'fe13d2d2-8e3a-4922-9166-e006fe7ae515'},
{from: '8e1efbb2-0930-45c4-a296-32fdbedb6684', to: 'fe13d2d2-8e3a-4922-9166-e006fe7ae515'}
                            ]);