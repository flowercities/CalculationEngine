var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '97eb2685-141d-55cd-5a70-a877643a10cd', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 97eb2685-141d-55cd-5a70-a877643a10cd<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '840b9227-0d16-c231-0765-a726caeafe85', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 840b9227-0d16-c231-0765-a726caeafe85<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'ea7335d3-afae-0696-7fe7-ba9f6b62335f', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: ea7335d3-afae-0696-7fe7-ba9f6b62335f<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'a3a78465-ee31-869f-57c3-3ddb17fa2439', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: a3a78465-ee31-869f-57c3-3ddb17fa2439<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '79709607-7150-d11c-0aea-ec4b4bccbdb7', label: '+\n505.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 505.0<br>Type: OPERATOR<br>Id: 79709607-7150-d11c-0aea-ec4b4bccbdb7<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '6f1161e0-68b9-c8c2-786e-ed1001e4e1bb', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 50.0<br>Type: OPERATOR<br>Id: 6f1161e0-68b9-c8c2-786e-ed1001e4e1bb<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'b1b2cb6d-d97c-ffb1-4f21-e0c7759c6be5', label: 'C2\n', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: b1b2cb6d-d97c-ffb1-4f21-e0c7759c6be5<br>Formula Expression: Formula String: C2; Formula Values: ; Formula Ptg: ; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'c73471c0-6c78-0661-d28f-9a1d8f5d7ae4', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: c73471c0-6c78-0661-d28f-9a1d8f5d7ae4<br>Formula Expression: Formula String: C1 + C2; Formula Values: 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '4b4bdb41-4f8d-556a-23cc-490fca879cc3', label: 'B2\n300.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 4b4bdb41-4f8d-556a-23cc-490fca879cc3<br>Formula Expression: Formula String: B2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '73d87d47-2228-1e7e-e778-e261d1004d92', label: '+\n55.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 55.0<br>Type: OPERATOR<br>Id: 73d87d47-2228-1e7e-e778-e261d1004d92<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'cb71923f-afd7-3ee7-302e-9623deb9d120', label: 'A4\n#REF!', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: cb71923f-afd7-3ee7-302e-9623deb9d120<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'fe042e06-0450-a850-c922-ea732327fcf0', label: '+\n500.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 500.0<br>Type: OPERATOR<br>Id: fe042e06-0450-a850-c922-ea732327fcf0<br>Formula Expression: Formula String: B1 + B2; Formula Values: 200.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'ecb89fd4-2d70-32c8-0da0-54dc622d3175', label: 'C3\n10.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: ecb89fd4-2d70-32c8-0da0-54dc622d3175<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '58634ad0-45a4-913a-c41c-259ce61a01b5', label: 'B1\n200.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 200.0<br>Type: CELL_WITH_VALUE<br>Id: 58634ad0-45a4-913a-c41c-259ce61a01b5<br>Formula Expression: Formula String: B1; Formula Values: 200.0; Formula Ptg: 200.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '92c159d5-54a0-13a9-1eb2-1dfdf41475a2', label: 'A3\n55.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 55.0<br>Type: CELL_WITH_FORMULA<br>Id: 92c159d5-54a0-13a9-1eb2-1dfdf41475a2<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '74dbe018-9b26-dc27-60bc-49eb523016e2', label: '+\n10.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 10.0<br>Type: OPERATOR<br>Id: 74dbe018-9b26-dc27-60bc-49eb523016e2<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '519c0c43-cfa1-5a11-8f0a-815a3a4f1536', label: 'B3\n505.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 505.0<br>Type: CELL_WITH_FORMULA<br>Id: 519c0c43-cfa1-5a11-8f0a-815a3a4f1536<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: '3c364562-9531-7e2e-69fb-d92191d96249', label: 'Sheet2!$B$1\n#REF!', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 3c364562-9531-7e2e-69fb-d92191d96249<br>Formula Expression: Formula String: Sheet2!B1; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'},
{id: 'e4dd91f2-0ac7-0a36-6c12-d788a6c75081', label: '+\n#REF!', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: #REF!<br>Type: OPERATOR<br>Id: e4dd91f2-0ac7-0a36-6c12-d788a6c75081<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7c9d8e2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '74dbe018-9b26-dc27-60bc-49eb523016e2', to: 'ecb89fd4-2d70-32c8-0da0-54dc622d3175'},
{from: 'a3a78465-ee31-869f-57c3-3ddb17fa2439', to: 'e4dd91f2-0ac7-0a36-6c12-d788a6c75081'},
{from: '97eb2685-141d-55cd-5a70-a877643a10cd', to: '79709607-7150-d11c-0aea-ec4b4bccbdb7'},
{from: '3c364562-9531-7e2e-69fb-d92191d96249', to: 'e4dd91f2-0ac7-0a36-6c12-d788a6c75081'},
{from: 'b1b2cb6d-d97c-ffb1-4f21-e0c7759c6be5', to: 'c73471c0-6c78-0661-d28f-9a1d8f5d7ae4'},
{from: '97eb2685-141d-55cd-5a70-a877643a10cd', to: 'a3a78465-ee31-869f-57c3-3ddb17fa2439'},
{from: '97eb2685-141d-55cd-5a70-a877643a10cd', to: '74dbe018-9b26-dc27-60bc-49eb523016e2'},
{from: '73d87d47-2228-1e7e-e778-e261d1004d92', to: '92c159d5-54a0-13a9-1eb2-1dfdf41475a2'},
{from: '79709607-7150-d11c-0aea-ec4b4bccbdb7', to: '519c0c43-cfa1-5a11-8f0a-815a3a4f1536'},
{from: '97eb2685-141d-55cd-5a70-a877643a10cd', to: 'c73471c0-6c78-0661-d28f-9a1d8f5d7ae4'},
{from: '97eb2685-141d-55cd-5a70-a877643a10cd', to: '73d87d47-2228-1e7e-e778-e261d1004d92'},
{from: '58634ad0-45a4-913a-c41c-259ce61a01b5', to: 'fe042e06-0450-a850-c922-ea732327fcf0'},
{from: '4b4bdb41-4f8d-556a-23cc-490fca879cc3', to: 'fe042e06-0450-a850-c922-ea732327fcf0'},
{from: '6f1161e0-68b9-c8c2-786e-ed1001e4e1bb', to: '73d87d47-2228-1e7e-e778-e261d1004d92'},
{from: '840b9227-0d16-c231-0765-a726caeafe85', to: 'a3a78465-ee31-869f-57c3-3ddb17fa2439'},
{from: 'ea7335d3-afae-0696-7fe7-ba9f6b62335f', to: '6f1161e0-68b9-c8c2-786e-ed1001e4e1bb'},
{from: 'fe042e06-0450-a850-c922-ea732327fcf0', to: '79709607-7150-d11c-0aea-ec4b4bccbdb7'},
{from: 'c73471c0-6c78-0661-d28f-9a1d8f5d7ae4', to: '74dbe018-9b26-dc27-60bc-49eb523016e2'},
{from: 'e4dd91f2-0ac7-0a36-6c12-d788a6c75081', to: 'cb71923f-afd7-3ee7-302e-9623deb9d120'},
{from: '840b9227-0d16-c231-0765-a726caeafe85', to: '6f1161e0-68b9-c8c2-786e-ed1001e4e1bb'}
                            ]);