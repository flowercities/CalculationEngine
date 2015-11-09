var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aa4af3f4-9570-4a14-acf5-6d4de2e9eb42', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: aa4af3f4-9570-4a14-acf5-6d4de2e9eb42<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '35e2c6e0-4286-402f-a2d0-3c93e4fb8d18', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 35e2c6e0-4286-402f-a2d0-3c93e4fb8d18<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'a77c0c39-4eb6-4bb6-a982-0cf3e561ef6a', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Value: 372.0<br>Type: OPERATOR<br>Id: a77c0c39-4eb6-4bb6-a982-0cf3e561ef6a<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'c6ae1ec8-c8a5-4601-8735-e62e0ddc4055', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: c6ae1ec8-c8a5-4601-8735-e62e0ddc4055<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'e8bdde42-7ece-4046-a914-9e083a12c3c5', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: e8bdde42-7ece-4046-a914-9e083a12c3c5<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: 7.0, 6.0 0.4 + 5.0 - AND ; Ptgs: C2, B3 D1 + E1 - AND  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '1f324e25-ec96-46ef-aef5-8975c45aaa72', label: 'C2\n7.0', color: '#31b0d5', title: 'Name: C2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1f324e25-ec96-46ef-aef5-8975c45aaa72<br>Formula Expression: Formula String: C2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C2 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '4d122464-30d6-406c-ae72-6938943b0c23', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Value: FALSE<br>Type: OPERATOR<br>Id: 4d122464-30d6-406c-ae72-6938943b0c23<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'bfb361fe-868c-47fa-9fab-7cad0f9d3255', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Value: FALSE<br>Type: FUNCTION<br>Id: bfb361fe-868c-47fa-9fab-7cad0f9d3255<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '93a408e3-efd6-4ccc-8cf5-38db3adb9260', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Value: 6.4<br>Type: OPERATOR<br>Id: 93a408e3-efd6-4ccc-8cf5-38db3adb9260<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'f5033078-6578-4df9-a3ce-7e82fa0a391d', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: f5033078-6578-4df9-a3ce-7e82fa0a391d<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: 5.0 367.0 + 89.0 =, 1.0 0.4 < AND ; Ptgs: E1 D3 + C4 =, VALUE D1 < AND  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'a884b9ef-e85d-448d-9132-31ccaf770479', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: a884b9ef-e85d-448d-9132-31ccaf770479<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '30506598-ca0e-48d6-82a6-e474e4c3e6ae', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Value: TRUE<br>Type: FUNCTION<br>Id: 30506598-ca0e-48d6-82a6-e474e4c3e6ae<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '7f0b07e9-b5cb-4607-b4c4-07c6b57de02a', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 7f0b07e9-b5cb-4607-b4c4-07c6b57de02a<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'a17fa26c-2620-4eed-b9f8-e1bd490db442', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: a17fa26c-2620-4eed-b9f8-e1bd490db442<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'c5c012ed-7f83-4f18-810f-92508aaf55a2', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: c5c012ed-7f83-4f18-810f-92508aaf55a2<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '7f5c8f39-8190-48f8-921d-782b9c0399b3', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 7f5c8f39-8190-48f8-921d-782b9c0399b3<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '35e2c6e0-4286-402f-a2d0-3c93e4fb8d18', to: 'a17fa26c-2620-4eed-b9f8-e1bd490db442'},
{from: '1f324e25-ec96-46ef-aef5-8975c45aaa72', to: '30506598-ca0e-48d6-82a6-e474e4c3e6ae'},
{from: '93a408e3-efd6-4ccc-8cf5-38db3adb9260', to: 'a17fa26c-2620-4eed-b9f8-e1bd490db442'},
{from: 'a884b9ef-e85d-448d-9132-31ccaf770479', to: '93a408e3-efd6-4ccc-8cf5-38db3adb9260'},
{from: 'c5c012ed-7f83-4f18-810f-92508aaf55a2', to: '7f0b07e9-b5cb-4607-b4c4-07c6b57de02a'},
{from: 'aa4af3f4-9570-4a14-acf5-6d4de2e9eb42', to: '93a408e3-efd6-4ccc-8cf5-38db3adb9260'},
{from: '4d122464-30d6-406c-ae72-6938943b0c23', to: 'bfb361fe-868c-47fa-9fab-7cad0f9d3255'},
{from: '35e2c6e0-4286-402f-a2d0-3c93e4fb8d18', to: 'a77c0c39-4eb6-4bb6-a982-0cf3e561ef6a'},
{from: 'a17fa26c-2620-4eed-b9f8-e1bd490db442', to: '30506598-ca0e-48d6-82a6-e474e4c3e6ae'},
{from: 'bfb361fe-868c-47fa-9fab-7cad0f9d3255', to: 'f5033078-6578-4df9-a3ce-7e82fa0a391d'},
{from: 'aa4af3f4-9570-4a14-acf5-6d4de2e9eb42', to: '4d122464-30d6-406c-ae72-6938943b0c23'},
{from: '30506598-ca0e-48d6-82a6-e474e4c3e6ae', to: 'e8bdde42-7ece-4046-a914-9e083a12c3c5'},
{from: 'a77c0c39-4eb6-4bb6-a982-0cf3e561ef6a', to: '7f0b07e9-b5cb-4607-b4c4-07c6b57de02a'},
{from: '7f5c8f39-8190-48f8-921d-782b9c0399b3', to: '4d122464-30d6-406c-ae72-6938943b0c23'},
{from: 'c6ae1ec8-c8a5-4601-8735-e62e0ddc4055', to: 'a77c0c39-4eb6-4bb6-a982-0cf3e561ef6a'},
{from: '7f0b07e9-b5cb-4607-b4c4-07c6b57de02a', to: 'bfb361fe-868c-47fa-9fab-7cad0f9d3255'}
                            ]);