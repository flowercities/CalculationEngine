var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '264bd903-db3b-4fc7-995c-4adebf9c6cac', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 264bd903-db3b-4fc7-995c-4adebf9c6cac<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'd5d89b3d-69f6-4d12-beb5-2ec0c4454b1e', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: d5d89b3d-69f6-4d12-beb5-2ec0c4454b1e<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '0131bc31-d051-4a35-a45e-cd382aadf4c7', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Value: 372.0<br>Type: OPERATOR<br>Id: 0131bc31-d051-4a35-a45e-cd382aadf4c7<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '6d09f0d5-94df-4a69-a757-52d8ec05c0a4', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: 6d09f0d5-94df-4a69-a757-52d8ec05c0a4<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'e26030d3-aeed-4f6b-8ba5-bf5702593850', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: e26030d3-aeed-4f6b-8ba5-bf5702593850<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: 7.0, 6.0 0.4 + 5.0 - AND ; Ptgs: C2, B3 D1 + E1 - AND  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'b6902692-8f8c-4bf2-915b-5f659f65ef22', label: 'C2\n7.0', color: '#31b0d5', title: 'Name: C2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: b6902692-8f8c-4bf2-915b-5f659f65ef22<br>Formula Expression: Formula String: C2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C2 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '47884dd4-df3d-4ee4-9235-5d0d557ae25b', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Value: FALSE<br>Type: OPERATOR<br>Id: 47884dd4-df3d-4ee4-9235-5d0d557ae25b<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '967c48ad-2a37-4cb4-b690-a789c4ebecd9', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Value: FALSE<br>Type: FUNCTION<br>Id: 967c48ad-2a37-4cb4-b690-a789c4ebecd9<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '5a6dff19-4f1c-478c-801e-7d55b6390dd6', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Value: 6.4<br>Type: OPERATOR<br>Id: 5a6dff19-4f1c-478c-801e-7d55b6390dd6<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'd6f2b3d9-37df-497c-8030-351dcccbd67b', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: d6f2b3d9-37df-497c-8030-351dcccbd67b<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: 5.0 367.0 + 89.0 =, 1.0 0.4 < AND ; Ptgs: E1 D3 + C4 =, VALUE D1 < AND  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'bba67972-b8c8-4622-bba6-d80d68f1a344', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: bba67972-b8c8-4622-bba6-d80d68f1a344<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '9b7c78f2-446c-40a8-a6fc-089b3dde0f46', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Value: TRUE<br>Type: FUNCTION<br>Id: 9b7c78f2-446c-40a8-a6fc-089b3dde0f46<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '00ac219e-97e1-48d5-9f19-5fff1ec30278', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 00ac219e-97e1-48d5-9f19-5fff1ec30278<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: 'e2d764e9-09e9-4f90-bc3f-dc451e3012ac', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: e2d764e9-09e9-4f90-bc3f-dc451e3012ac<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '0feba5e1-ad98-48fb-bfce-e5cc0fecad82', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: 0feba5e1-ad98-48fb-bfce-e5cc0fecad82<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'},
{id: '90ec681c-245f-415d-be23-51e0d8e081ef', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 90ec681c-245f-415d-be23-51e0d8e081ef<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@273a5a8a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd5d89b3d-69f6-4d12-beb5-2ec0c4454b1e', to: 'e2d764e9-09e9-4f90-bc3f-dc451e3012ac'},
{from: 'b6902692-8f8c-4bf2-915b-5f659f65ef22', to: '9b7c78f2-446c-40a8-a6fc-089b3dde0f46'},
{from: '5a6dff19-4f1c-478c-801e-7d55b6390dd6', to: 'e2d764e9-09e9-4f90-bc3f-dc451e3012ac'},
{from: 'bba67972-b8c8-4622-bba6-d80d68f1a344', to: '5a6dff19-4f1c-478c-801e-7d55b6390dd6'},
{from: '0feba5e1-ad98-48fb-bfce-e5cc0fecad82', to: '00ac219e-97e1-48d5-9f19-5fff1ec30278'},
{from: '264bd903-db3b-4fc7-995c-4adebf9c6cac', to: '5a6dff19-4f1c-478c-801e-7d55b6390dd6'},
{from: '47884dd4-df3d-4ee4-9235-5d0d557ae25b', to: '967c48ad-2a37-4cb4-b690-a789c4ebecd9'},
{from: 'd5d89b3d-69f6-4d12-beb5-2ec0c4454b1e', to: '0131bc31-d051-4a35-a45e-cd382aadf4c7'},
{from: 'e2d764e9-09e9-4f90-bc3f-dc451e3012ac', to: '9b7c78f2-446c-40a8-a6fc-089b3dde0f46'},
{from: '967c48ad-2a37-4cb4-b690-a789c4ebecd9', to: 'd6f2b3d9-37df-497c-8030-351dcccbd67b'},
{from: '264bd903-db3b-4fc7-995c-4adebf9c6cac', to: '47884dd4-df3d-4ee4-9235-5d0d557ae25b'},
{from: '9b7c78f2-446c-40a8-a6fc-089b3dde0f46', to: 'e26030d3-aeed-4f6b-8ba5-bf5702593850'},
{from: '0131bc31-d051-4a35-a45e-cd382aadf4c7', to: '00ac219e-97e1-48d5-9f19-5fff1ec30278'},
{from: '90ec681c-245f-415d-be23-51e0d8e081ef', to: '47884dd4-df3d-4ee4-9235-5d0d557ae25b'},
{from: '6d09f0d5-94df-4a69-a757-52d8ec05c0a4', to: '0131bc31-d051-4a35-a45e-cd382aadf4c7'},
{from: '00ac219e-97e1-48d5-9f19-5fff1ec30278', to: '967c48ad-2a37-4cb4-b690-a789c4ebecd9'}
                            ]);