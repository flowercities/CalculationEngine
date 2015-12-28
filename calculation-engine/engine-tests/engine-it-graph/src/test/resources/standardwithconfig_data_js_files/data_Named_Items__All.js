var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '48695ceb-dca4-451b-b815-712f8505fd66', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 48695ceb-dca4-451b-b815-712f8505fd66<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '6c35fdba-0cda-4e5d-a210-4c8d980cc8f0', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 6c35fdba-0cda-4e5d-a210-4c8d980cc8f0<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: 'd7a9ade2-7856-4d3f-acb7-858be6da4f87', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: d7a9ade2-7856-4d3f-acb7-858be6da4f87<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '466c4c22-b78a-4b44-a079-2817883377fe', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 466c4c22-b78a-4b44-a079-2817883377fe<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: 'a71a0686-4165-44cd-88ff-f0a70cedc28c', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: a71a0686-4165-44cd-88ff-f0a70cedc28c<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '674a3638-fceb-4f6f-b395-483b6e0d7a18', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: 674a3638-fceb-4f6f-b395-483b6e0d7a18<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '748aee16-68ab-49ac-821d-aa6a04f903c9', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 748aee16-68ab-49ac-821d-aa6a04f903c9<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '534c8c79-f595-44fd-834f-1f66c3d108c3', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: 534c8c79-f595-44fd-834f-1f66c3d108c3<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM  12.6, 3.2, 4.5, 9.0 AVERAGE  - 3.2, 12.6 SUM  -; Ptgs: VALUE, A4, A2 SUM  VALUE AVERAGE  - Sheet1!$A$3, Sheet1!$A$2 SUM  - Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '87c0c8e6-277e-4dab-a4d3-6e13b3262e26', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: 87c0c8e6-277e-4dab-a4d3-6e13b3262e26<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: 'e291883c-029c-4051-a3fd-11964c9abbc4', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: e291883c-029c-4051-a3fd-11964c9abbc4<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '6a60353a-6a58-46ce-b008-899326b67b3d', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 6a60353a-6a58-46ce-b008-899326b67b3d<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: 'b97cd334-ff5d-40f4-aa60-e8056cae7151', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: b97cd334-ff5d-40f4-aa60-e8056cae7151<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: 'af8e6a6e-9e59-474f-9b37-6428cee4783a', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: af8e6a6e-9e59-474f-9b37-6428cee4783a<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '4f0d7ff0-f4fd-4990-a65a-604cd62caadb', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 4f0d7ff0-f4fd-4990-a65a-604cd62caadb<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '7b3a931b-b54d-413c-ac41-e5ad2c4abfab', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 7b3a931b-b54d-413c-ac41-e5ad2c4abfab<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: 'b7d5e910-406b-4dee-9970-75f76fe70a3c', label: 'VALUE\n12.9', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef_One<br>Value: 12.9<br>Type: CONSTANT_VALUE<br>Id: b7d5e910-406b-4dee-9970-75f76fe70a3c<br>Formula Expression: Formula String: VALUE; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '8e1324f1-ae86-4a5a-a12a-1333faaf02b7', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 8e1324f1-ae86-4a5a-a12a-1333faaf02b7<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: 'aa6e27c4-2b72-4d63-91ad-a45245b5506e', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: aa6e27c4-2b72-4d63-91ad-a45245b5506e<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '1a99e294-9dee-441f-946f-6c1c8e524131', label: 'VALUE\n[[12.6], [3.2], [4.5], [9.0]]', color: '#31b0d5', title: 'Name: VALUE<br>Alias: My_Grades<br>Value: [[12.6], [3.2], [4.5], [9.0]]<br>Type: CONSTANT_VALUE<br>Id: 1a99e294-9dee-441f-946f-6c1c8e524131<br>Formula Expression: Formula String: VALUE; Formula Values: [[12.6], [3.2], [4.5], [9.0]]; Formula Ptg: [[12.6], [3.2], [4.5], [9.0]]; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'},
{id: '68e9aa87-f3f8-453d-a097-feb7f285653d', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 68e9aa87-f3f8-453d-a097-feb7f285653d<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: 3.2, 12.6 SUM ; Ptgs: Sheet1!$A$3, Sheet1!$A$2 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@223d2c72'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b97cd334-ff5d-40f4-aa60-e8056cae7151', to: '466c4c22-b78a-4b44-a079-2817883377fe'},
{from: '748aee16-68ab-49ac-821d-aa6a04f903c9', to: 'd7a9ade2-7856-4d3f-acb7-858be6da4f87'},
{from: 'b7d5e910-406b-4dee-9970-75f76fe70a3c', to: '466c4c22-b78a-4b44-a079-2817883377fe'},
{from: 'd7a9ade2-7856-4d3f-acb7-858be6da4f87', to: 'aa6e27c4-2b72-4d63-91ad-a45245b5506e'},
{from: '466c4c22-b78a-4b44-a079-2817883377fe', to: 'a71a0686-4165-44cd-88ff-f0a70cedc28c'},
{from: '87c0c8e6-277e-4dab-a4d3-6e13b3262e26', to: 'aa6e27c4-2b72-4d63-91ad-a45245b5506e'},
{from: '48695ceb-dca4-451b-b815-712f8505fd66', to: '4f0d7ff0-f4fd-4990-a65a-604cd62caadb'},
{from: '674a3638-fceb-4f6f-b395-483b6e0d7a18', to: '7b3a931b-b54d-413c-ac41-e5ad2c4abfab'},
{from: '8e1324f1-ae86-4a5a-a12a-1333faaf02b7', to: '1a99e294-9dee-441f-946f-6c1c8e524131'},
{from: '7b3a931b-b54d-413c-ac41-e5ad2c4abfab', to: '87c0c8e6-277e-4dab-a4d3-6e13b3262e26'},
{from: '674a3638-fceb-4f6f-b395-483b6e0d7a18', to: 'af8e6a6e-9e59-474f-9b37-6428cee4783a'},
{from: 'b97cd334-ff5d-40f4-aa60-e8056cae7151', to: '1a99e294-9dee-441f-946f-6c1c8e524131'},
{from: '6a60353a-6a58-46ce-b008-899326b67b3d', to: '4f0d7ff0-f4fd-4990-a65a-604cd62caadb'},
{from: 'aa6e27c4-2b72-4d63-91ad-a45245b5506e', to: '534c8c79-f595-44fd-834f-1f66c3d108c3'},
{from: '466c4c22-b78a-4b44-a079-2817883377fe', to: '6c35fdba-0cda-4e5d-a210-4c8d980cc8f0'},
{from: '1a99e294-9dee-441f-946f-6c1c8e524131', to: '674a3638-fceb-4f6f-b395-483b6e0d7a18'},
{from: 'e291883c-029c-4051-a3fd-11964c9abbc4', to: 'd7a9ade2-7856-4d3f-acb7-858be6da4f87'},
{from: '6c35fdba-0cda-4e5d-a210-4c8d980cc8f0', to: '87c0c8e6-277e-4dab-a4d3-6e13b3262e26'},
{from: '8e1324f1-ae86-4a5a-a12a-1333faaf02b7', to: '466c4c22-b78a-4b44-a079-2817883377fe'},
{from: '4f0d7ff0-f4fd-4990-a65a-604cd62caadb', to: '68e9aa87-f3f8-453d-a097-feb7f285653d'}
                            ]);