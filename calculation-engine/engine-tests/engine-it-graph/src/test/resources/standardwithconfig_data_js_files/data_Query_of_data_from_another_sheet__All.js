var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd1f1b5b0-71f5-4baa-ba66-e9ca1c21efc6', label: 'C3\n10.0', color: '#31b0d5', title: 'Name: C3<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: d1f1b5b0-71f5-4baa-ba66-e9ca1c21efc6<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: 5.0  + 5.0 +; Ptgs: C1 C2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '349aaffe-0515-49c1-a1cb-9c3075e70e40', label: '+\n110.0', color: '#f0ad4e', title: 'Name: +<br>Value: 110.0<br>Type: OPERATOR<br>Id: 349aaffe-0515-49c1-a1cb-9c3075e70e40<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '9a210070-1d8b-4943-beaf-6d5c6b08710a', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Value: 5.0<br>Type: OPERATOR<br>Id: 9a210070-1d8b-4943-beaf-6d5c6b08710a<br>Formula Expression: Formula String: C1 + C2; Formula Values: 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'f759e81f-dfac-40e9-8582-003c0ac428ff', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Value: 25.0<br>Type: OPERATOR<br>Id: f759e81f-dfac-40e9-8582-003c0ac428ff<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '97d2fd4a-c1e4-4741-8ecf-e01b694048f8', label: 'A4\n110.0', color: '#31b0d5', title: 'Name: A4<br>Value: 110.0<br>Type: CELL_WITH_FORMULA<br>Id: 97d2fd4a-c1e4-4741-8ecf-e01b694048f8<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: 20.0 5.0 + 85.0 +; Ptgs: A1 C1 + Sheet2!$B$1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '3d56ce22-cf14-4169-9232-2bc929a89722', label: 'C2\n', color: '#31b0d5', title: 'Name: C2<br>Value: <br>Type: EMPTY_CELL<br>Id: 3d56ce22-cf14-4169-9232-2bc929a89722<br>Formula Expression: Formula String: C2; Formula Values: ; Formula Ptg: ; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'fca8a99f-deb4-465e-8c97-21dea87786d6', label: '+\n55.0', color: '#f0ad4e', title: 'Name: +<br>Value: 55.0<br>Type: OPERATOR<br>Id: fca8a99f-deb4-465e-8c97-21dea87786d6<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '98d815f7-03fc-48a1-8c76-07b6b2d6d8fe', label: 'B1\n200.0', color: '#31b0d5', title: 'Name: B1<br>Value: 200.0<br>Type: CELL_WITH_VALUE<br>Id: 98d815f7-03fc-48a1-8c76-07b6b2d6d8fe<br>Formula Expression: Formula String: B1; Formula Values: 200.0; Formula Ptg: 200.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '787f5923-d3ba-441e-9d83-f3ac83ac4410', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 787f5923-d3ba-441e-9d83-f3ac83ac4410<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'c9ea79ba-65c7-4260-9568-2ca5fddf1129', label: 'B2\n300.0', color: '#31b0d5', title: 'Name: B2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: c9ea79ba-65c7-4260-9568-2ca5fddf1129<br>Formula Expression: Formula String: B2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '43b1b784-b600-465f-b985-34fb661218e6', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 43b1b784-b600-465f-b985-34fb661218e6<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'e97eb265-1d3a-4f51-9273-555fedbcde39', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: e97eb265-1d3a-4f51-9273-555fedbcde39<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'fad22f32-8935-4cea-b7ce-ff12bae0f04c', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: fad22f32-8935-4cea-b7ce-ff12bae0f04c<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '22f58bc3-19d0-43f3-8e4d-b74508fa4e64', label: '+\n10.0', color: '#f0ad4e', title: 'Name: +<br>Value: 10.0<br>Type: OPERATOR<br>Id: 22f58bc3-19d0-43f3-8e4d-b74508fa4e64<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '1a34f58b-dbcd-4b5c-9a4b-ed9eb06c4f6e', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 1a34f58b-dbcd-4b5c-9a4b-ed9eb06c4f6e<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'f3fbed1c-1c82-42d3-ad9c-e0e2bc21ab9e', label: 'A3\n55.0', color: '#31b0d5', title: 'Name: A3<br>Value: 55.0<br>Type: CELL_WITH_FORMULA<br>Id: f3fbed1c-1c82-42d3-ad9c-e0e2bc21ab9e<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: 20.0 30.0 + 5.0 +; Ptgs: A1 A2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '5f864676-12aa-459f-834d-089c7c6ce303', label: 'Sheet2!$B$1\n85.0', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Value: 85.0<br>Type: CELL_WITH_VALUE<br>Id: 5f864676-12aa-459f-834d-089c7c6ce303<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: 85.0; Formula Ptg: 85.0; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'c11f7466-c8c9-4205-abd4-80034b606da2', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: c11f7466-c8c9-4205-abd4-80034b606da2<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '377026b9-e9ee-4f41-9576-a2c7671dae64', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 377026b9-e9ee-4f41-9576-a2c7671dae64<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'dcf1fecb-5788-42ff-b925-6bc73edf2c44', label: '+\n500.0', color: '#f0ad4e', title: 'Name: +<br>Value: 500.0<br>Type: OPERATOR<br>Id: dcf1fecb-5788-42ff-b925-6bc73edf2c44<br>Formula Expression: Formula String: B1 + B2; Formula Values: 200.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '64171eb0-c89e-4c12-a0e3-f641c276f592', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 64171eb0-c89e-4c12-a0e3-f641c276f592<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'd71a4a1a-c1b3-4d9d-95e8-de737c58e221', label: 'B3\n505.0', color: '#31b0d5', title: 'Name: B3<br>Value: 505.0<br>Type: CELL_WITH_FORMULA<br>Id: d71a4a1a-c1b3-4d9d-95e8-de737c58e221<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: 200.0 300.0 + 5.0 +; Ptgs: B1 B2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '9d682171-3fd8-46de-bb53-4a9dc1cec322', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 9d682171-3fd8-46de-bb53-4a9dc1cec322<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'cb4a80a8-8be4-4d5f-96c0-501ff6374849', label: '+\n505.0', color: '#f0ad4e', title: 'Name: +<br>Value: 505.0<br>Type: OPERATOR<br>Id: cb4a80a8-8be4-4d5f-96c0-501ff6374849<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '43b1b784-b600-465f-b985-34fb661218e6', to: '1a34f58b-dbcd-4b5c-9a4b-ed9eb06c4f6e'},
{from: 'fad22f32-8935-4cea-b7ce-ff12bae0f04c', to: '9a210070-1d8b-4943-beaf-6d5c6b08710a'},
{from: '5f864676-12aa-459f-834d-089c7c6ce303', to: '349aaffe-0515-49c1-a1cb-9c3075e70e40'},
{from: 'e97eb265-1d3a-4f51-9273-555fedbcde39', to: 'fca8a99f-deb4-465e-8c97-21dea87786d6'},
{from: 'c11f7466-c8c9-4205-abd4-80034b606da2', to: '22f58bc3-19d0-43f3-8e4d-b74508fa4e64'},
{from: 'f759e81f-dfac-40e9-8582-003c0ac428ff', to: '349aaffe-0515-49c1-a1cb-9c3075e70e40'},
{from: 'c9ea79ba-65c7-4260-9568-2ca5fddf1129', to: 'dcf1fecb-5788-42ff-b925-6bc73edf2c44'},
{from: '9d682171-3fd8-46de-bb53-4a9dc1cec322', to: 'f759e81f-dfac-40e9-8582-003c0ac428ff'},
{from: '1a34f58b-dbcd-4b5c-9a4b-ed9eb06c4f6e', to: 'fca8a99f-deb4-465e-8c97-21dea87786d6'},
{from: '3d56ce22-cf14-4169-9232-2bc929a89722', to: '9a210070-1d8b-4943-beaf-6d5c6b08710a'},
{from: '64171eb0-c89e-4c12-a0e3-f641c276f592', to: '1a34f58b-dbcd-4b5c-9a4b-ed9eb06c4f6e'},
{from: '9a210070-1d8b-4943-beaf-6d5c6b08710a', to: '22f58bc3-19d0-43f3-8e4d-b74508fa4e64'},
{from: 'cb4a80a8-8be4-4d5f-96c0-501ff6374849', to: 'd71a4a1a-c1b3-4d9d-95e8-de737c58e221'},
{from: '377026b9-e9ee-4f41-9576-a2c7671dae64', to: 'f759e81f-dfac-40e9-8582-003c0ac428ff'},
{from: 'dcf1fecb-5788-42ff-b925-6bc73edf2c44', to: 'cb4a80a8-8be4-4d5f-96c0-501ff6374849'},
{from: '349aaffe-0515-49c1-a1cb-9c3075e70e40', to: '97d2fd4a-c1e4-4741-8ecf-e01b694048f8'},
{from: '787f5923-d3ba-441e-9d83-f3ac83ac4410', to: 'cb4a80a8-8be4-4d5f-96c0-501ff6374849'},
{from: 'fca8a99f-deb4-465e-8c97-21dea87786d6', to: 'f3fbed1c-1c82-42d3-ad9c-e0e2bc21ab9e'},
{from: '98d815f7-03fc-48a1-8c76-07b6b2d6d8fe', to: 'dcf1fecb-5788-42ff-b925-6bc73edf2c44'},
{from: '22f58bc3-19d0-43f3-8e4d-b74508fa4e64', to: 'd1f1b5b0-71f5-4baa-ba66-e9ca1c21efc6'}
                            ]);