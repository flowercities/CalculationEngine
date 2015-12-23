var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '687dbdfa-fe3a-4e3e-880a-74b6dbf41a4c', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 687dbdfa-fe3a-4e3e-880a-74b6dbf41a4c<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '3f5320d3-9a72-4392-a68b-966b8c58372a', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 3f5320d3-9a72-4392-a68b-966b8c58372a<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '875485f4-10d9-457b-8ab9-22a551284524', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: 875485f4-10d9-457b-8ab9-22a551284524<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '7f3aac44-08a4-41cf-a28d-6635fce9a45e', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 7f3aac44-08a4-41cf-a28d-6635fce9a45e<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: 'ff529f8a-9bd5-4c54-bf58-15f5bf9b3929', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: ff529f8a-9bd5-4c54-bf58-15f5bf9b3929<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: 'f1660976-b796-4fd7-bd09-0d5965a991b5', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: f1660976-b796-4fd7-bd09-0d5965a991b5<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2) - AVERAGE(A4) - My_Function; Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(4.5) - 15.8; Formula Ptg: 12.9, 4.5, 12.6 SUM  4.5 AVERAGE  - 15.8 -; Ptgs: Coef_One, A4, A2 SUM  A4 AVERAGE  - My_Function - Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '12a0ce58-1fef-425d-9d31-ac7e3702562b', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 12a0ce58-1fef-425d-9d31-ac7e3702562b<br>Formula Expression: Formula String: AVERAGE(A4); Formula Values: AVERAGE(4.5); Formula Ptg: 4.5 AVERAGE ; Ptgs: A4 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '241791e2-d6e1-4065-938d-7f8d52b116c2', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: 241791e2-d6e1-4065-938d-7f8d52b116c2<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2) - AVERAGE(A4); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(4.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: 'a7fcc7d3-5454-43af-823c-8bd763d1a947', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: a7fcc7d3-5454-43af-823c-8bd763d1a947<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2) - AVERAGE(A4) - My_Function; Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(4.5) - 15.8; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: 'c916d7c9-4b4c-4e4f-bff8-652175a70c02', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: c916d7c9-4b4c-4e4f-bff8-652175a70c02<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '83509be0-b7cf-4b3a-a65e-1912abea1014', label: 'My_Grades\n4.5', color: '#31b0d5', title: 'Name: My_Grades<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_FORMULA<br>Id: 83509be0-b7cf-4b3a-a65e-1912abea1014<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: 'b95f8463-4427-432c-a107-bd75ccccefd9', label: 'My_Function\n15.8', color: '#31b0d5', title: 'Name: My_Function<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_VALUE<br>Id: b95f8463-4427-432c-a107-bd75ccccefd9<br>Formula Expression: Formula String: My_Function; Formula Values: 15.8; Formula Ptg: 15.8; Ptgs: My_Function Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '3e526c2e-eae3-49a4-ab72-02760df9fbe8', label: 'My_Function\n15.8', color: '#31b0d5', title: 'Name: My_Function<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_VALUE<br>Id: 3e526c2e-eae3-49a4-ab72-02760df9fbe8<br>Formula Expression: Formula String: My_Function; Formula Values: 15.8; Formula Ptg: 15.8; Ptgs: My_Function Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '57498d9e-3eb9-466b-b557-cb4e96252901', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 57498d9e-3eb9-466b-b557-cb4e96252901<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: Coef_One, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '8ad2ed8f-81cd-4580-9cc4-f3e3f92e3dbd', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 8ad2ed8f-81cd-4580-9cc4-f3e3f92e3dbd<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: 'd2849803-646b-4916-8af4-d5bdbae23a7e', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: d2849803-646b-4916-8af4-d5bdbae23a7e<br>Formula Expression: Formula String: SUM(Coef_One, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: Coef_One, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '6834a917-2444-4e3a-9b73-ccc1cd9e63d7', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 6834a917-2444-4e3a-9b73-ccc1cd9e63d7<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '82f0cd1e-b560-408f-af5d-8d2c5548b24d', label: 'Coef_One\n12.9', color: '#31b0d5', title: 'Name: Coef_One<br>Alias: null<br>Value: 12.9<br>Type: CELL_WITH_VALUE<br>Id: 82f0cd1e-b560-408f-af5d-8d2c5548b24d<br>Formula Expression: Formula String: Coef_One; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: Coef_One Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '94c7515e-c469-4389-9066-4fa3beb715e3', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: 94c7515e-c469-4389-9066-4fa3beb715e3<br>Formula Expression: Formula String: AVERAGE(A4); Formula Values: AVERAGE(4.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '5c1d225b-bbe1-470e-bf90-ac421244cecc', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: 5c1d225b-bbe1-470e-bf90-ac421244cecc<br>Formula Expression: Formula String: My_Function; Formula Values: 15.8; Formula Ptg: 15.8; Ptgs: My_Function Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '835317f5-30be-4144-9f8a-118a41cb1b65', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.8<br>Type: FUNCTION<br>Id: 835317f5-30be-4144-9f8a-118a41cb1b65<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'},
{id: '7de42f14-75b1-4497-a7c3-fc764740a514', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 7de42f14-75b1-4497-a7c3-fc764740a514<br>Formula Expression: Formula String: AVERAGE(A4); Formula Values: AVERAGE(4.5); Formula Ptg: 4.5 AVERAGE ; Ptgs: A4 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@158d2680'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '875485f4-10d9-457b-8ab9-22a551284524', to: '7f3aac44-08a4-41cf-a28d-6635fce9a45e'},
{from: '875485f4-10d9-457b-8ab9-22a551284524', to: '83509be0-b7cf-4b3a-a65e-1912abea1014'},
{from: '82f0cd1e-b560-408f-af5d-8d2c5548b24d', to: '7f3aac44-08a4-41cf-a28d-6635fce9a45e'},
{from: '8ad2ed8f-81cd-4580-9cc4-f3e3f92e3dbd', to: '83509be0-b7cf-4b3a-a65e-1912abea1014'},
{from: 'ff529f8a-9bd5-4c54-bf58-15f5bf9b3929', to: 'f1660976-b796-4fd7-bd09-0d5965a991b5'},
{from: '3e526c2e-eae3-49a4-ab72-02760df9fbe8', to: 'a7fcc7d3-5454-43af-823c-8bd763d1a947'},
{from: '94c7515e-c469-4389-9066-4fa3beb715e3', to: '7de42f14-75b1-4497-a7c3-fc764740a514'},
{from: '687dbdfa-fe3a-4e3e-880a-74b6dbf41a4c', to: '835317f5-30be-4144-9f8a-118a41cb1b65'},
{from: '6834a917-2444-4e3a-9b73-ccc1cd9e63d7', to: 'ff529f8a-9bd5-4c54-bf58-15f5bf9b3929'},
{from: 'c916d7c9-4b4c-4e4f-bff8-652175a70c02', to: '835317f5-30be-4144-9f8a-118a41cb1b65'},
{from: '7de42f14-75b1-4497-a7c3-fc764740a514', to: '241791e2-d6e1-4065-938d-7f8d52b116c2'},
{from: '7f3aac44-08a4-41cf-a28d-6635fce9a45e', to: 'd2849803-646b-4916-8af4-d5bdbae23a7e'},
{from: '3f5320d3-9a72-4392-a68b-966b8c58372a', to: 'ff529f8a-9bd5-4c54-bf58-15f5bf9b3929'},
{from: '8ad2ed8f-81cd-4580-9cc4-f3e3f92e3dbd', to: '7f3aac44-08a4-41cf-a28d-6635fce9a45e'},
{from: '835317f5-30be-4144-9f8a-118a41cb1b65', to: '5c1d225b-bbe1-470e-bf90-ac421244cecc'},
{from: '94c7515e-c469-4389-9066-4fa3beb715e3', to: '12a0ce58-1fef-425d-9d31-ac7e3702562b'},
{from: 'b95f8463-4427-432c-a107-bd75ccccefd9', to: '5c1d225b-bbe1-470e-bf90-ac421244cecc'},
{from: '7f3aac44-08a4-41cf-a28d-6635fce9a45e', to: '57498d9e-3eb9-466b-b557-cb4e96252901'},
{from: 'a7fcc7d3-5454-43af-823c-8bd763d1a947', to: 'f1660976-b796-4fd7-bd09-0d5965a991b5'},
{from: '241791e2-d6e1-4065-938d-7f8d52b116c2', to: 'a7fcc7d3-5454-43af-823c-8bd763d1a947'},
{from: '57498d9e-3eb9-466b-b557-cb4e96252901', to: '241791e2-d6e1-4065-938d-7f8d52b116c2'},
{from: '83509be0-b7cf-4b3a-a65e-1912abea1014', to: '94c7515e-c469-4389-9066-4fa3beb715e3'}
                            ]);