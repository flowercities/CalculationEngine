var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '22b5f571-9b75-4bdb-bc56-eba8399a9189', label: 'VALUE\n2015.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2015.0<br>Type: CONSTANT_VALUE<br>Id: 22b5f571-9b75-4bdb-bc56-eba8399a9189<br>Formula Expression: Formula String: VALUE; Formula Values: 2015.0; Formula Ptg: 2015.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '3d0840c7-200a-4689-97e4-55df2a165f53', label: 'D7\n736.61', color: '#31b0d5', title: 'Name: D7<br>Value: 736.61<br>Type: CELL_WITH_FORMULA<br>Id: 3d0840c7-200a-4689-97e4-55df2a165f53<br>Formula Expression: Formula String: SUM(D1:D6); Formula Values: SUM(101.9, 144.2, 77.7, 107.3, 189.1, 116.41); Formula Ptg: 101.9, 144.2, 77.7, 107.3, 189.1, 116.41 SUM ; Ptgs: D1:D6 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '1fcf113a-9908-4070-b846-327e012608f7', label: 'SUM\n188015.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 188015.0<br>Type: FUNCTION<br>Id: 1fcf113a-9908-4070-b846-327e012608f7<br>Formula Expression: Formula String: SUM(C1:C6); Formula Values: SUM(62500.0, 9832.0, 2130.0, 70202.0, 7702.0, 35649.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'f5016789-0770-4a8b-b084-29ad533ebfd3', label: '+\n170784.0', color: '#f0ad4e', title: 'Name: +<br>Value: 170784.0<br>Type: OPERATOR<br>Id: f5016789-0770-4a8b-b084-29ad533ebfd3<br>Formula Expression: Formula String: A1 + A2 + A3 + A4 + A5 + A6; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0 + 4074.0 + 30398.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '55898d18-e5cc-46b7-8a0e-bccca1e583bf', label: 'A2\n6816.0', color: '#31b0d5', title: 'Name: A2<br>Value: 6816.0<br>Type: CELL_WITH_VALUE<br>Id: 55898d18-e5cc-46b7-8a0e-bccca1e583bf<br>Formula Expression: Formula String: A2; Formula Values: 6816.0; Formula Ptg: 6816.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '66892ca9-b620-401c-ac74-4b1320758884', label: '+\n68156.0', color: '#f0ad4e', title: 'Name: +<br>Value: 68156.0<br>Type: OPERATOR<br>Id: 66892ca9-b620-401c-ac74-4b1320758884<br>Formula Expression: Formula String: A1 + A2; Formula Values: 61340.0 + 6816.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'ce282d0d-e20a-4255-9ed6-19e23f33202b', label: 'B1:B6\n...', color: '#31b0d5', title: 'Name: B1:B6<br>Value: [[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]<br>Type: RANGE<br>Id: ce282d0d-e20a-4255-9ed6-19e23f33202b<br>Formula Expression: Formula String: B1:B6; Formula Values: [[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]; Formula Ptg: [[61950.0], [6311.0], [1963.0], [66298.0], [4348.0], [32307.0]]; Ptgs: B1:B6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'f20b342d-7fea-439f-9f9f-f0c679882a75', label: '+\n140386.0', color: '#f0ad4e', title: 'Name: +<br>Value: 140386.0<br>Type: OPERATOR<br>Id: f20b342d-7fea-439f-9f9f-f0c679882a75<br>Formula Expression: Formula String: A1 + A2 + A3 + A4 + A5; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0 + 4074.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '2ad4195c-a266-4c2d-a80b-13f9bded6783', label: 'D1:D6\n[[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]', color: '#31b0d5', title: 'Name: D1:D6<br>Value: [[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]<br>Type: RANGE<br>Id: 2ad4195c-a266-4c2d-a80b-13f9bded6783<br>Formula Expression: Formula String: D1:D6; Formula Values: [[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]; Formula Ptg: [[101.9], [144.2], [77.7], [107.3], [189.1], [116.41]]; Ptgs: D1:D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '572c2322-379c-43dd-a8d1-095a561d3dfd', label: 'B7\n173177.0', color: '#31b0d5', title: 'Name: B7<br>Value: 173177.0<br>Type: CELL_WITH_FORMULA<br>Id: 572c2322-379c-43dd-a8d1-095a561d3dfd<br>Formula Expression: Formula String: SUM(B1:B6); Formula Values: SUM(61950.0, 6311.0, 1963.0, 66298.0, 4348.0, 32307.0); Formula Ptg: 61950.0, 6311.0, 1963.0, 66298.0, 4348.0, 32307.0 SUM ; Ptgs: B1:B6 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'b57b6b42-674b-4d2e-8a73-6fec2bf21b98', label: '+\n136312.0', color: '#f0ad4e', title: 'Name: +<br>Value: 136312.0<br>Type: OPERATOR<br>Id: b57b6b42-674b-4d2e-8a73-6fec2bf21b98<br>Formula Expression: Formula String: A1 + A2 + A3 + A4; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'dd4eb148-7dc1-486f-8d1e-899d2e4a640e', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: dd4eb148-7dc1-486f-8d1e-899d2e4a640e<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'a269c49a-83bb-4dce-8a57-d7bc496341b5', label: 'DATE\n42251.0', color: '#f0ad4e', title: 'Name: DATE<br>Value: 42251.0<br>Type: FUNCTION<br>Id: a269c49a-83bb-4dce-8a57-d7bc496341b5<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '6d28549c-3d3d-4234-ab99-129d0ffa364a', label: 'A7\n170784.0', color: '#31b0d5', title: 'Name: A7<br>Value: 170784.0<br>Type: CELL_WITH_FORMULA<br>Id: 6d28549c-3d3d-4234-ab99-129d0ffa364a<br>Formula Expression: Formula String: A1 + A2 + A3 + A4 + A5 + A6; Formula Values: 61340.0 + 6816.0 + 2742.0 + 65414.0 + 4074.0 + 30398.0; Formula Ptg: 61340.0 6816.0 + 2742.0 + 65414.0 + 4074.0 + 30398.0 +; Ptgs: A1 A2 + A3 + A4 + A5 + A6 + Index in Ptgs: 10 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '5026f513-e1b4-4e0a-805c-052ee36dae2b', label: 'SUM\n736.61', color: '#f0ad4e', title: 'Name: SUM<br>Value: 736.61<br>Type: FUNCTION<br>Id: 5026f513-e1b4-4e0a-805c-052ee36dae2b<br>Formula Expression: Formula String: SUM(D1:D6); Formula Values: SUM(101.9, 144.2, 77.7, 107.3, 189.1, 116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'ecf06aa1-0737-4c21-a898-776cee10a768', label: 'E8\n42251.0', color: '#31b0d5', title: 'Name: E8<br>Value: 42251.0<br>Type: CELL_WITH_FORMULA<br>Id: ecf06aa1-0737-4c21-a898-776cee10a768<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: 4.0, 9.0, 2015.0 DATE ; Ptgs: VALUE, VALUE, VALUE DATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '2566d06f-d651-4e3d-ba0f-0e07ffc198bd', label: 'A5\n4074.0', color: '#31b0d5', title: 'Name: A5<br>Value: 4074.0<br>Type: CELL_WITH_VALUE<br>Id: 2566d06f-d651-4e3d-ba0f-0e07ffc198bd<br>Formula Expression: Formula String: A5; Formula Values: 4074.0; Formula Ptg: 4074.0; Ptgs: A5 Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '461baf31-6999-4526-b4f9-1545c2f7b1b9', label: 'SUM\n173177.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 173177.0<br>Type: FUNCTION<br>Id: 461baf31-6999-4526-b4f9-1545c2f7b1b9<br>Formula Expression: Formula String: SUM(B1:B6); Formula Values: SUM(61950.0, 6311.0, 1963.0, 66298.0, 4348.0, 32307.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'e4da1bcf-4ba3-4191-a767-438d477c434b', label: 'A1\n61340.0', color: '#31b0d5', title: 'Name: A1<br>Value: 61340.0<br>Type: CELL_WITH_VALUE<br>Id: e4da1bcf-4ba3-4191-a767-438d477c434b<br>Formula Expression: Formula String: A1; Formula Values: 61340.0; Formula Ptg: 61340.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '3b8863cc-0523-4930-b341-1edcece7f46f', label: '+\n70898.0', color: '#f0ad4e', title: 'Name: +<br>Value: 70898.0<br>Type: OPERATOR<br>Id: 3b8863cc-0523-4930-b341-1edcece7f46f<br>Formula Expression: Formula String: A1 + A2 + A3; Formula Values: 61340.0 + 6816.0 + 2742.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '28505481-bff9-4069-87c7-a548bbb4d6f3', label: 'VALUE\n9.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 9.0<br>Type: CONSTANT_VALUE<br>Id: 28505481-bff9-4069-87c7-a548bbb4d6f3<br>Formula Expression: Formula String: VALUE; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '56f5a5d3-9b9d-415a-8434-d0edc6a802f1', label: 'A4\n65414.0', color: '#31b0d5', title: 'Name: A4<br>Value: 65414.0<br>Type: CELL_WITH_VALUE<br>Id: 56f5a5d3-9b9d-415a-8434-d0edc6a802f1<br>Formula Expression: Formula String: A4; Formula Values: 65414.0; Formula Ptg: 65414.0; Ptgs: A4 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '853a124b-0323-45e9-af24-79fe477c847f', label: 'C7\n188015.0', color: '#31b0d5', title: 'Name: C7<br>Value: 188015.0<br>Type: CELL_WITH_FORMULA<br>Id: 853a124b-0323-45e9-af24-79fe477c847f<br>Formula Expression: Formula String: SUM(C1:C6); Formula Values: SUM(62500.0, 9832.0, 2130.0, 70202.0, 7702.0, 35649.0); Formula Ptg: 62500.0, 9832.0, 2130.0, 70202.0, 7702.0, 35649.0 SUM ; Ptgs: C1:C6 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: 'f9bef431-c15e-45e1-87fc-798fa4780c6f', label: 'A6\n30398.0', color: '#31b0d5', title: 'Name: A6<br>Value: 30398.0<br>Type: CELL_WITH_VALUE<br>Id: f9bef431-c15e-45e1-87fc-798fa4780c6f<br>Formula Expression: Formula String: A6; Formula Values: 30398.0; Formula Ptg: 30398.0; Ptgs: A6 Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '9167f8f3-1861-4550-918b-55a1e3b77a42', label: 'C1:C6\n...', color: '#31b0d5', title: 'Name: C1:C6<br>Value: [[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]<br>Type: RANGE<br>Id: 9167f8f3-1861-4550-918b-55a1e3b77a42<br>Formula Expression: Formula String: C1:C6; Formula Values: [[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]; Formula Ptg: [[62500.0], [9832.0], [2130.0], [70202.0], [7702.0], [35649.0]]; Ptgs: C1:C6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'},
{id: '30b4f0a5-a7ea-47ce-a8ac-f01d0ea8521a', label: 'A3\n2742.0', color: '#31b0d5', title: 'Name: A3<br>Value: 2742.0<br>Type: CELL_WITH_VALUE<br>Id: 30b4f0a5-a7ea-47ce-a8ac-f01d0ea8521a<br>Formula Expression: Formula String: A3; Formula Values: 2742.0; Formula Ptg: 2742.0; Ptgs: A3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e95c023'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e4da1bcf-4ba3-4191-a767-438d477c434b', to: '66892ca9-b620-401c-ac74-4b1320758884'},
{from: '1fcf113a-9908-4070-b846-327e012608f7', to: '853a124b-0323-45e9-af24-79fe477c847f'},
{from: '28505481-bff9-4069-87c7-a548bbb4d6f3', to: 'a269c49a-83bb-4dce-8a57-d7bc496341b5'},
{from: 'a269c49a-83bb-4dce-8a57-d7bc496341b5', to: 'ecf06aa1-0737-4c21-a898-776cee10a768'},
{from: 'b57b6b42-674b-4d2e-8a73-6fec2bf21b98', to: 'f20b342d-7fea-439f-9f9f-f0c679882a75'},
{from: '2566d06f-d651-4e3d-ba0f-0e07ffc198bd', to: 'f20b342d-7fea-439f-9f9f-f0c679882a75'},
{from: '22b5f571-9b75-4bdb-bc56-eba8399a9189', to: 'a269c49a-83bb-4dce-8a57-d7bc496341b5'},
{from: 'dd4eb148-7dc1-486f-8d1e-899d2e4a640e', to: 'a269c49a-83bb-4dce-8a57-d7bc496341b5'},
{from: '55898d18-e5cc-46b7-8a0e-bccca1e583bf', to: '66892ca9-b620-401c-ac74-4b1320758884'},
{from: '56f5a5d3-9b9d-415a-8434-d0edc6a802f1', to: 'b57b6b42-674b-4d2e-8a73-6fec2bf21b98'},
{from: 'f5016789-0770-4a8b-b084-29ad533ebfd3', to: '6d28549c-3d3d-4234-ab99-129d0ffa364a'},
{from: '5026f513-e1b4-4e0a-805c-052ee36dae2b', to: '3d0840c7-200a-4689-97e4-55df2a165f53'},
{from: '66892ca9-b620-401c-ac74-4b1320758884', to: '3b8863cc-0523-4930-b341-1edcece7f46f'},
{from: 'f9bef431-c15e-45e1-87fc-798fa4780c6f', to: 'f5016789-0770-4a8b-b084-29ad533ebfd3'},
{from: 'f20b342d-7fea-439f-9f9f-f0c679882a75', to: 'f5016789-0770-4a8b-b084-29ad533ebfd3'},
{from: '3b8863cc-0523-4930-b341-1edcece7f46f', to: 'b57b6b42-674b-4d2e-8a73-6fec2bf21b98'},
{from: '2ad4195c-a266-4c2d-a80b-13f9bded6783', to: '5026f513-e1b4-4e0a-805c-052ee36dae2b'},
{from: '9167f8f3-1861-4550-918b-55a1e3b77a42', to: '1fcf113a-9908-4070-b846-327e012608f7'},
{from: '30b4f0a5-a7ea-47ce-a8ac-f01d0ea8521a', to: '3b8863cc-0523-4930-b341-1edcece7f46f'},
{from: 'ce282d0d-e20a-4255-9ed6-19e23f33202b', to: '461baf31-6999-4526-b4f9-1545c2f7b1b9'},
{from: '461baf31-6999-4526-b4f9-1545c2f7b1b9', to: '572c2322-379c-43dd-a8d1-095a561d3dfd'}
                            ]);