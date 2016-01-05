var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '40d44373-42ae-42c4-9bb1-f02f14bcf789', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: 40d44373-42ae-42c4-9bb1-f02f14bcf789<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '9d10c6dd-4b71-4db6-96e8-7d8be02d74ed', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: 9d10c6dd-4b71-4db6-96e8-7d8be02d74ed<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'b1089389-9c4e-4fd7-8bcb-543583acf5a8', label: 'VALUE\n[[12.6], [3.2], [4.5], [9.0]]', color: '#31b0d5', title: 'Name: VALUE<br>Alias: My_Grades<br>Value: [[12.6], [3.2], [4.5], [9.0]]<br>Type: CONSTANT_VALUE<br>Id: b1089389-9c4e-4fd7-8bcb-543583acf5a8<br>Formula Expression: Formula String: VALUE; Formula Values: [[12.6], [3.2], [4.5], [9.0]]; Formula Ptg: [[12.6], [3.2], [4.5], [9.0]]; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'abe5b0aa-6506-4bc4-8745-52596bde1fb2', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: abe5b0aa-6506-4bc4-8745-52596bde1fb2<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '615ba8ea-dbc9-49f6-9f77-576d412868c5', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 615ba8ea-dbc9-49f6-9f77-576d412868c5<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'e57cbe4d-6942-40b0-bc63-b2f970f39113', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: e57cbe4d-6942-40b0-bc63-b2f970f39113<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'b370ec82-29ab-470d-8046-dd2fd04d3761', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: b370ec82-29ab-470d-8046-dd2fd04d3761<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '7955cae3-7b9e-4576-bdbe-9cdfb42b91db', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: 7955cae3-7b9e-4576-bdbe-9cdfb42b91db<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM  12.6, 3.2, 4.5, 9.0 AVERAGE  - 3.2, 12.6 SUM  -; Ptgs: VALUE, A4, A2 SUM  VALUE AVERAGE  - Sheet1!$A$3, Sheet1!$A$2 SUM  - Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'db19e2a0-a210-4302-8966-7395b07a86a4', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: db19e2a0-a210-4302-8966-7395b07a86a4<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'baaa0ad2-60fe-413b-ade8-90354dc8ef32', label: 'VALUE\n12.9', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef_One<br>Value: 12.9<br>Type: CONSTANT_VALUE<br>Id: baaa0ad2-60fe-413b-ade8-90354dc8ef32<br>Formula Expression: Formula String: VALUE; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'ebe55d6f-23e7-4f45-aea7-6f193f799ec5', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: ebe55d6f-23e7-4f45-aea7-6f193f799ec5<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '330f0499-f1d2-494f-83d4-3553eb94d76f', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 330f0499-f1d2-494f-83d4-3553eb94d76f<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: 3.2, 12.6 SUM ; Ptgs: Sheet1!$A$3, Sheet1!$A$2 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'c1b4d765-8152-4aea-8f7e-d08a6ecbc0b0', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: c1b4d765-8152-4aea-8f7e-d08a6ecbc0b0<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'cacb8629-a7d7-4949-869f-ba87c8030692', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: cacb8629-a7d7-4949-869f-ba87c8030692<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '7b933821-71b6-4ce9-b8ae-12cbab26734c', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 7b933821-71b6-4ce9-b8ae-12cbab26734c<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '385af153-31de-4280-8f3f-7d20f0912e1c', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 385af153-31de-4280-8f3f-7d20f0912e1c<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: 'df98d736-4a16-4941-a2c8-5c0ba06ef387', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: df98d736-4a16-4941-a2c8-5c0ba06ef387<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '311bf426-022c-4ddf-953c-29b31422c5e2', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 311bf426-022c-4ddf-953c-29b31422c5e2<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '1c81ac34-6631-450f-b858-e39dd011c92c', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 1c81ac34-6631-450f-b858-e39dd011c92c<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'},
{id: '505e7531-846b-4fa7-a61e-93c1ecc00c70', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 505e7531-846b-4fa7-a61e-93c1ecc00c70<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@33d512c1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e57cbe4d-6942-40b0-bc63-b2f970f39113', to: '7b933821-71b6-4ce9-b8ae-12cbab26734c'},
{from: 'db19e2a0-a210-4302-8966-7395b07a86a4', to: '1c81ac34-6631-450f-b858-e39dd011c92c'},
{from: '385af153-31de-4280-8f3f-7d20f0912e1c', to: '40d44373-42ae-42c4-9bb1-f02f14bcf789'},
{from: '7b933821-71b6-4ce9-b8ae-12cbab26734c', to: '330f0499-f1d2-494f-83d4-3553eb94d76f'},
{from: '311bf426-022c-4ddf-953c-29b31422c5e2', to: '40d44373-42ae-42c4-9bb1-f02f14bcf789'},
{from: 'ebe55d6f-23e7-4f45-aea7-6f193f799ec5', to: '385af153-31de-4280-8f3f-7d20f0912e1c'},
{from: 'db19e2a0-a210-4302-8966-7395b07a86a4', to: '311bf426-022c-4ddf-953c-29b31422c5e2'},
{from: 'ebe55d6f-23e7-4f45-aea7-6f193f799ec5', to: 'b370ec82-29ab-470d-8046-dd2fd04d3761'},
{from: '615ba8ea-dbc9-49f6-9f77-576d412868c5', to: '505e7531-846b-4fa7-a61e-93c1ecc00c70'},
{from: 'baaa0ad2-60fe-413b-ade8-90354dc8ef32', to: 'ebe55d6f-23e7-4f45-aea7-6f193f799ec5'},
{from: '505e7531-846b-4fa7-a61e-93c1ecc00c70', to: 'abe5b0aa-6506-4bc4-8745-52596bde1fb2'},
{from: '9d10c6dd-4b71-4db6-96e8-7d8be02d74ed', to: 'b1089389-9c4e-4fd7-8bcb-543583acf5a8'},
{from: 'c1b4d765-8152-4aea-8f7e-d08a6ecbc0b0', to: '505e7531-846b-4fa7-a61e-93c1ecc00c70'},
{from: '40d44373-42ae-42c4-9bb1-f02f14bcf789', to: 'abe5b0aa-6506-4bc4-8745-52596bde1fb2'},
{from: 'b1089389-9c4e-4fd7-8bcb-543583acf5a8', to: 'db19e2a0-a210-4302-8966-7395b07a86a4'},
{from: 'df98d736-4a16-4941-a2c8-5c0ba06ef387', to: '7b933821-71b6-4ce9-b8ae-12cbab26734c'},
{from: 'abe5b0aa-6506-4bc4-8745-52596bde1fb2', to: '7955cae3-7b9e-4576-bdbe-9cdfb42b91db'},
{from: 'cacb8629-a7d7-4949-869f-ba87c8030692', to: 'ebe55d6f-23e7-4f45-aea7-6f193f799ec5'},
{from: 'cacb8629-a7d7-4949-869f-ba87c8030692', to: 'b1089389-9c4e-4fd7-8bcb-543583acf5a8'},
{from: '9d10c6dd-4b71-4db6-96e8-7d8be02d74ed', to: 'ebe55d6f-23e7-4f45-aea7-6f193f799ec5'}
                            ]);