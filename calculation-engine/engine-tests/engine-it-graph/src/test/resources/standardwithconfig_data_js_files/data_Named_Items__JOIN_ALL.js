var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b05d96e6-c313-433b-9405-3a704ea37df7', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: b05d96e6-c313-433b-9405-3a704ea37df7<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '5390d7b9-573d-41bd-8b64-d465a25f0230', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 5390d7b9-573d-41bd-8b64-d465a25f0230<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '24d48172-68a2-4ead-b997-22913ec769e6', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: 24d48172-68a2-4ead-b997-22913ec769e6<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: 'ffaa85eb-e040-4495-9af1-292b3a9baaa9', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: ffaa85eb-e040-4495-9af1-292b3a9baaa9<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: 'b9622567-a6a1-4499-8a27-026be10b7b36', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: b9622567-a6a1-4499-8a27-026be10b7b36<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '01663c67-4a8a-4454-bc2e-e6312aba5785', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: 01663c67-4a8a-4454-bc2e-e6312aba5785<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '076370da-26bb-46c8-986d-c64d1052b2b1', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 076370da-26bb-46c8-986d-c64d1052b2b1<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: 'dcae10c9-b753-4bbd-93b7-e56647285379', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: dcae10c9-b753-4bbd-93b7-e56647285379<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '7820fae0-8657-493f-b117-d365be002452', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: 7820fae0-8657-493f-b117-d365be002452<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: 'ed8e822b-ecd4-4313-8455-b442d7a4a670', label: 'VALUE\n12.9', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef_One<br>Value: 12.9<br>Type: CONSTANT_VALUE<br>Id: ed8e822b-ecd4-4313-8455-b442d7a4a670<br>Formula Expression: Formula String: VALUE; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '89d5527b-b25c-4ae1-ab51-e353cd03c5f7', label: 'VALUE\n[[12.6], [3.2], [4.5], [9.0]]', color: '#31b0d5', title: 'Name: VALUE<br>Alias: My_Grades<br>Value: [[12.6], [3.2], [4.5], [9.0]]<br>Type: CONSTANT_VALUE<br>Id: 89d5527b-b25c-4ae1-ab51-e353cd03c5f7<br>Formula Expression: Formula String: VALUE; Formula Values: [[12.6], [3.2], [4.5], [9.0]]; Formula Ptg: [[12.6], [3.2], [4.5], [9.0]]; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: 'b00b8f3b-2bd7-4e0a-a49c-26139bd9090b', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: b00b8f3b-2bd7-4e0a-a49c-26139bd9090b<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '3f04495d-41ee-4064-a08c-326dcd3f568e', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: 3f04495d-41ee-4064-a08c-326dcd3f568e<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM  12.6, 3.2, 4.5, 9.0 AVERAGE  - 3.2, 12.6 SUM  -; Ptgs: VALUE, A4, A2 SUM  VALUE AVERAGE  - Sheet1!$A$3, Sheet1!$A$2 SUM  - Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: 'fc5718c7-276c-491f-bdd5-a3798be09c6e', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: fc5718c7-276c-491f-bdd5-a3798be09c6e<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '16c43adb-276e-4cb4-ac6f-9ef816e0e849', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 16c43adb-276e-4cb4-ac6f-9ef816e0e849<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: 'f51d1735-081b-4c0c-a89f-886970591951', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: f51d1735-081b-4c0c-a89f-886970591951<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: 3.2, 12.6 SUM ; Ptgs: Sheet1!$A$3, Sheet1!$A$2 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '0da7b41a-b0dc-4057-9a97-b8b6be36388b', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 0da7b41a-b0dc-4057-9a97-b8b6be36388b<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'},
{id: '313b1b2c-cf00-446d-a0a9-9bfecb48ccb8', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: 313b1b2c-cf00-446d-a0a9-9bfecb48ccb8<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5f058f00'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fc5718c7-276c-491f-bdd5-a3798be09c6e', to: 'dcae10c9-b753-4bbd-93b7-e56647285379'},
{from: '16c43adb-276e-4cb4-ac6f-9ef816e0e849', to: '313b1b2c-cf00-446d-a0a9-9bfecb48ccb8'},
{from: '076370da-26bb-46c8-986d-c64d1052b2b1', to: 'dcae10c9-b753-4bbd-93b7-e56647285379'},
{from: 'dcae10c9-b753-4bbd-93b7-e56647285379', to: 'f51d1735-081b-4c0c-a89f-886970591951'},
{from: '24d48172-68a2-4ead-b997-22913ec769e6', to: 'ffaa85eb-e040-4495-9af1-292b3a9baaa9'},
{from: 'ffaa85eb-e040-4495-9af1-292b3a9baaa9', to: '7820fae0-8657-493f-b117-d365be002452'},
{from: 'ed8e822b-ecd4-4313-8455-b442d7a4a670', to: 'b9622567-a6a1-4499-8a27-026be10b7b36'},
{from: '0da7b41a-b0dc-4057-9a97-b8b6be36388b', to: '16c43adb-276e-4cb4-ac6f-9ef816e0e849'},
{from: '01663c67-4a8a-4454-bc2e-e6312aba5785', to: '89d5527b-b25c-4ae1-ab51-e353cd03c5f7'},
{from: '313b1b2c-cf00-446d-a0a9-9bfecb48ccb8', to: '3f04495d-41ee-4064-a08c-326dcd3f568e'},
{from: 'b05d96e6-c313-433b-9405-3a704ea37df7', to: '89d5527b-b25c-4ae1-ab51-e353cd03c5f7'},
{from: '01663c67-4a8a-4454-bc2e-e6312aba5785', to: 'b9622567-a6a1-4499-8a27-026be10b7b36'},
{from: 'b00b8f3b-2bd7-4e0a-a49c-26139bd9090b', to: '7820fae0-8657-493f-b117-d365be002452'},
{from: '7820fae0-8657-493f-b117-d365be002452', to: '313b1b2c-cf00-446d-a0a9-9bfecb48ccb8'},
{from: '5390d7b9-573d-41bd-8b64-d465a25f0230', to: '16c43adb-276e-4cb4-ac6f-9ef816e0e849'},
{from: 'b05d96e6-c313-433b-9405-3a704ea37df7', to: 'b9622567-a6a1-4499-8a27-026be10b7b36'},
{from: '89d5527b-b25c-4ae1-ab51-e353cd03c5f7', to: '24d48172-68a2-4ead-b997-22913ec769e6'},
{from: 'b9622567-a6a1-4499-8a27-026be10b7b36', to: 'b00b8f3b-2bd7-4e0a-a49c-26139bd9090b'}
                            ]);