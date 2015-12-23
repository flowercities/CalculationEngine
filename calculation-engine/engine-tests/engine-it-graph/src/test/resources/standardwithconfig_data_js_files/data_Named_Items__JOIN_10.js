var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '10deec7e-f9b4-4d5d-bead-d6258a800084', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: 10deec7e-f9b4-4d5d-bead-d6258a800084<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2) - AVERAGE(A4) - My_Function; Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(4.5) - 15.8; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '88d66455-0978-477a-861b-d39d84144081', label: 'Coef_One\n12.9', color: '#31b0d5', title: 'Name: Coef_One<br>Alias: null<br>Value: 12.9<br>Type: CELL_WITH_VALUE<br>Id: 88d66455-0978-477a-861b-d39d84144081<br>Formula Expression: Formula String: Coef_One; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: Coef_One Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '40ab7654-2fa6-4b4d-b707-0d6ea6aae691', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: 40ab7654-2fa6-4b4d-b707-0d6ea6aae691<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '4ce2f0e9-8b94-48eb-ba48-2120a8806957', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: 4ce2f0e9-8b94-48eb-ba48-2120a8806957<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2) - AVERAGE(A4) - My_Function; Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(4.5) - 15.8; Formula Ptg: 12.9, 4.5, 12.6 SUM  4.5 AVERAGE  - 15.8 -; Ptgs: Coef_One, A4, A2 SUM  A4 AVERAGE  - My_Function - Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'c68b40cf-af5f-494d-b7fe-c919791bf141', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: c68b40cf-af5f-494d-b7fe-c919791bf141<br>Formula Expression: Formula String: My_Function; Formula Values: 15.8; Formula Ptg: 15.8; Ptgs: My_Function Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '83cb2fbe-d404-4b3c-86c1-09c12f2095ca', label: 'My_Function\n15.8', color: '#31b0d5', title: 'Name: My_Function<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_VALUE<br>Id: 83cb2fbe-d404-4b3c-86c1-09c12f2095ca<br>Formula Expression: Formula String: My_Function; Formula Values: 15.8; Formula Ptg: 15.8; Ptgs: My_Function Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'ebd40ea9-a7d3-4f1a-8e70-1b5e1ac1e5e8', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: ebd40ea9-a7d3-4f1a-8e70-1b5e1ac1e5e8<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'a5cd391c-9928-4a5f-a579-02ed591e0729', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: a5cd391c-9928-4a5f-a579-02ed591e0729<br>Formula Expression: Formula String: AVERAGE(A4); Formula Values: AVERAGE(4.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '98b0092f-5493-4365-8741-2d72741267a3', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 98b0092f-5493-4365-8741-2d72741267a3<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '7593f007-71dc-42d6-a8ac-46d923eb4135', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 7593f007-71dc-42d6-a8ac-46d923eb4135<br>Formula Expression: Formula String: AVERAGE(A4); Formula Values: AVERAGE(4.5); Formula Ptg: 4.5 AVERAGE ; Ptgs: A4 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '675eeeaf-e7b2-483d-b35e-960b4818096c', label: 'My_Function\n15.8', color: '#31b0d5', title: 'Name: My_Function<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_VALUE<br>Id: 675eeeaf-e7b2-483d-b35e-960b4818096c<br>Formula Expression: Formula String: My_Function; Formula Values: 15.8; Formula Ptg: 15.8; Ptgs: My_Function Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '197883d8-9bb6-46c0-acc8-347d76bad32b', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 197883d8-9bb6-46c0-acc8-347d76bad32b<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'd5907538-92d3-42d2-aa86-1c91231e0f05', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: d5907538-92d3-42d2-aa86-1c91231e0f05<br>Formula Expression: Formula String: AVERAGE(A4); Formula Values: AVERAGE(4.5); Formula Ptg: 4.5 AVERAGE ; Ptgs: A4 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'aa0302e0-0a9b-48a3-9d3d-ce52dec3bc14', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: aa0302e0-0a9b-48a3-9d3d-ce52dec3bc14<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'b2c6ab4f-6d16-4856-91c8-6dcd7e2a3b68', label: 'My_Grades\n4.5', color: '#31b0d5', title: 'Name: My_Grades<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_FORMULA<br>Id: b2c6ab4f-6d16-4856-91c8-6dcd7e2a3b68<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'f3825f13-119f-4da8-85cb-d64f8ffcbcbe', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: f3825f13-119f-4da8-85cb-d64f8ffcbcbe<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '42b9dbba-be33-4b7b-9a93-2ae0f1fefa5b', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 42b9dbba-be33-4b7b-9a93-2ae0f1fefa5b<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '9ef3b353-a498-40e0-b9eb-4e0ad5ab787e', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 9ef3b353-a498-40e0-b9eb-4e0ad5ab787e<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: Coef_One, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '94adb3d7-af44-42b0-b267-2c3727df42ca', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 94adb3d7-af44-42b0-b267-2c3727df42ca<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '7793ae49-482e-4461-94d9-7e90f8c1adbf', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: 7793ae49-482e-4461-94d9-7e90f8c1adbf<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: '533e8c90-c437-4185-a862-94de1eac5c81', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 533e8c90-c437-4185-a862-94de1eac5c81<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: Coef_One, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'},
{id: 'e87ccf19-4d08-4616-aafc-6794664c92d2', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: e87ccf19-4d08-4616-aafc-6794664c92d2<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2) - AVERAGE(A4); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(4.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b2ea799'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '10deec7e-f9b4-4d5d-bead-d6258a800084', to: '4ce2f0e9-8b94-48eb-ba48-2120a8806957'},
{from: 'ebd40ea9-a7d3-4f1a-8e70-1b5e1ac1e5e8', to: 'aa0302e0-0a9b-48a3-9d3d-ce52dec3bc14'},
{from: 'f3825f13-119f-4da8-85cb-d64f8ffcbcbe', to: '533e8c90-c437-4185-a862-94de1eac5c81'},
{from: 'f3825f13-119f-4da8-85cb-d64f8ffcbcbe', to: '9ef3b353-a498-40e0-b9eb-4e0ad5ab787e'},
{from: '42b9dbba-be33-4b7b-9a93-2ae0f1fefa5b', to: '7793ae49-482e-4461-94d9-7e90f8c1adbf'},
{from: '83cb2fbe-d404-4b3c-86c1-09c12f2095ca', to: '10deec7e-f9b4-4d5d-bead-d6258a800084'},
{from: '7593f007-71dc-42d6-a8ac-46d923eb4135', to: 'e87ccf19-4d08-4616-aafc-6794664c92d2'},
{from: 'e87ccf19-4d08-4616-aafc-6794664c92d2', to: '10deec7e-f9b4-4d5d-bead-d6258a800084'},
{from: 'a5cd391c-9928-4a5f-a579-02ed591e0729', to: '7593f007-71dc-42d6-a8ac-46d923eb4135'},
{from: '98b0092f-5493-4365-8741-2d72741267a3', to: '7793ae49-482e-4461-94d9-7e90f8c1adbf'},
{from: 'aa0302e0-0a9b-48a3-9d3d-ce52dec3bc14', to: '4ce2f0e9-8b94-48eb-ba48-2120a8806957'},
{from: '40ab7654-2fa6-4b4d-b707-0d6ea6aae691', to: 'f3825f13-119f-4da8-85cb-d64f8ffcbcbe'},
{from: '88d66455-0978-477a-861b-d39d84144081', to: 'f3825f13-119f-4da8-85cb-d64f8ffcbcbe'},
{from: '675eeeaf-e7b2-483d-b35e-960b4818096c', to: 'c68b40cf-af5f-494d-b7fe-c919791bf141'},
{from: 'b2c6ab4f-6d16-4856-91c8-6dcd7e2a3b68', to: 'a5cd391c-9928-4a5f-a579-02ed591e0729'},
{from: '7793ae49-482e-4461-94d9-7e90f8c1adbf', to: 'c68b40cf-af5f-494d-b7fe-c919791bf141'},
{from: '533e8c90-c437-4185-a862-94de1eac5c81', to: 'e87ccf19-4d08-4616-aafc-6794664c92d2'},
{from: 'a5cd391c-9928-4a5f-a579-02ed591e0729', to: 'd5907538-92d3-42d2-aa86-1c91231e0f05'},
{from: '197883d8-9bb6-46c0-acc8-347d76bad32b', to: 'f3825f13-119f-4da8-85cb-d64f8ffcbcbe'},
{from: '197883d8-9bb6-46c0-acc8-347d76bad32b', to: 'b2c6ab4f-6d16-4856-91c8-6dcd7e2a3b68'},
{from: '40ab7654-2fa6-4b4d-b707-0d6ea6aae691', to: 'b2c6ab4f-6d16-4856-91c8-6dcd7e2a3b68'},
{from: '94adb3d7-af44-42b0-b267-2c3727df42ca', to: 'aa0302e0-0a9b-48a3-9d3d-ce52dec3bc14'}
                            ]);