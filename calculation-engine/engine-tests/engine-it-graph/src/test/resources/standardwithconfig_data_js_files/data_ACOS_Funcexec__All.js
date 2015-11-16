var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '95aec984-14f7-4e61-af6a-953d232d13b9', label: 'ACOS\n1.0471975511965979', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 95aec984-14f7-4e61-af6a-953d232d13b9<br>Formula Expression: Formula String: ACOS(B2); Formula Values: ACOS(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'fcecfdab-308a-4731-9888-e71399ad96b8', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: fcecfdab-308a-4731-9888-e71399ad96b8<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '17d92773-9a92-4df1-b50c-78564d2df5f3', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 17d92773-9a92-4df1-b50c-78564d2df5f3<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '514ccf7c-8016-4f65-b6d4-eb327b47a047', label: 'B4\n1.0471975511965979', color: '#31b0d5', title: 'Name: B4<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: 514ccf7c-8016-4f65-b6d4-eb327b47a047<br>Formula Expression: Formula String: ACOS(B2); Formula Values: ACOS(0.5); Formula Ptg: 0.5 ACOS ; Ptgs: B2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '2bfcca72-8e73-4d4d-944c-e5e2f82c85de', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 2bfcca72-8e73-4d4d-944c-e5e2f82c85de<br>Formula Expression: Formula String: DEFINE(ACOS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ACOS(0.0), #, 0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '305b19fb-1304-418b-8392-68d7637ea036', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 305b19fb-1304-418b-8392-68d7637ea036<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '5b486ae8-5be6-47c4-9bc4-15abd0ec1d0f', label: 'FUNCEXEC\n1.5707963267948966', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 5b486ae8-5be6-47c4-9bc4-15abd0ec1d0f<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '78ab963f-ecfb-4f24-b54b-eb05ac934c13', label: 'C6\n1.0471975511965979', color: '#31b0d5', title: 'Name: C6<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: 78ab963f-ecfb-4f24-b54b-eb05ac934c13<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: 0.5, DEVDEF FUNCEXEC ; Ptgs: B2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '50f61d61-669f-442c-be9d-78b93d9b16f0', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 50f61d61-669f-442c-be9d-78b93d9b16f0<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'a234c460-0d0a-4ae6-ab45-d5b55a016ba1', label: 'C5\n1.5707963267948966', color: '#31b0d5', title: 'Name: C5<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: a234c460-0d0a-4ae6-ab45-d5b55a016ba1<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: 0.0, DEVDEF FUNCEXEC ; Ptgs: A2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'ead80948-7384-4e4c-a766-ea5170a83859', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: ead80948-7384-4e4c-a766-ea5170a83859<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'f22fd538-42e8-4e55-9cda-afa60fddcf68', label: 'ACOS\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: f22fd538-42e8-4e55-9cda-afa60fddcf68<br>Formula Expression: Formula String: ACOS(A2); Formula Values: ACOS(0.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'b1b63910-d88c-47e9-ba5f-aef61edfd923', label: 'FUNCEXEC\n1.0471975511965979', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: b1b63910-d88c-47e9-ba5f-aef61edfd923<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'b80075bc-8d1d-463b-bf6e-e83378f95efe', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: b80075bc-8d1d-463b-bf6e-e83378f95efe<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '8b8560f9-ca41-448f-8adc-65729cfbf7fa', label: 'B5\nDEFINE', color: '#31b0d5', title: 'Name: B5<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 8b8560f9-ca41-448f-8adc-65729cfbf7fa<br>Formula Expression: Formula String: DEFINE(ACOS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ACOS(0.0), #, 0.0, DEVDEF); Formula Ptg: 0.0 ACOS , #, 0.0, DEVDEF DEFINE ; Ptgs: A2 ACOS , VALUE, A2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'f44d2f91-9006-41cb-9478-a73aa848f395', label: 'A4\n1.5707963267948966', color: '#31b0d5', title: 'Name: A4<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: f44d2f91-9006-41cb-9478-a73aa848f395<br>Formula Expression: Formula String: ACOS(A2); Formula Values: ACOS(0.0); Formula Ptg: 0.0 ACOS ; Ptgs: A2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'e93b49b0-eb72-484f-98a2-3a05040ec29c', label: 'A4\n1.5707963267948966', color: '#31b0d5', title: 'Name: A4<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: e93b49b0-eb72-484f-98a2-3a05040ec29c<br>Formula Expression: Formula String: ACOS(A2); Formula Values: ACOS(0.0); Formula Ptg: 0.0 ACOS ; Ptgs: A2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'cd9d2834-63f7-4d2b-aa7a-e069b28e659b', label: 'B4\n1.0471975511965979', color: '#31b0d5', title: 'Name: B4<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: cd9d2834-63f7-4d2b-aa7a-e069b28e659b<br>Formula Expression: Formula String: ACOS(B2); Formula Values: ACOS(0.5); Formula Ptg: 0.5 ACOS ; Ptgs: B2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '66242cde-9fbe-4052-8ad3-ffee0b8dbf4e', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 66242cde-9fbe-4052-8ad3-ffee0b8dbf4e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'c0ca970e-7b82-4e59-9a46-8634120c73dd', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: c0ca970e-7b82-4e59-9a46-8634120c73dd<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '07c2a44a-0924-452f-a150-1411ae8cfccf', label: 'B6\nDEFINE', color: '#31b0d5', title: 'Name: B6<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 07c2a44a-0924-452f-a150-1411ae8cfccf<br>Formula Expression: Formula String: DEFINE(ACOS(B2), VALUE, B2, VALUE); Formula Values: DEFINE(ACOS(0.5), #, 0.5, DEVDEF); Formula Ptg: 0.5 ACOS , #, 0.5, DEVDEF DEFINE ; Ptgs: B2 ACOS , VALUE, B2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'dfd8ec0c-2cb5-4cb3-b59e-a84213950a0c', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: dfd8ec0c-2cb5-4cb3-b59e-a84213950a0c<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: 'd90bd251-fed3-4e71-9b83-43a36246638f', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: d90bd251-fed3-4e71-9b83-43a36246638f<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '4d37dc7b-b382-4483-bbc8-ce1903a19f7f', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 4d37dc7b-b382-4483-bbc8-ce1903a19f7f<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '88988a1f-fe5d-44e5-b3a7-95aa1602aad5', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 88988a1f-fe5d-44e5-b3a7-95aa1602aad5<br>Formula Expression: Formula String: DEFINE(ACOS(B2), VALUE, B2, VALUE); Formula Values: DEFINE(ACOS(0.5), #, 0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'},
{id: '1e141df1-2a5a-417e-97e0-d33c3aedfe6e', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 1e141df1-2a5a-417e-97e0-d33c3aedfe6e<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3791160a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5b486ae8-5be6-47c4-9bc4-15abd0ec1d0f', to: 'a234c460-0d0a-4ae6-ab45-d5b55a016ba1'},
{from: '4d37dc7b-b382-4483-bbc8-ce1903a19f7f', to: '2bfcca72-8e73-4d4d-944c-e5e2f82c85de'},
{from: 'c0ca970e-7b82-4e59-9a46-8634120c73dd', to: 'b1b63910-d88c-47e9-ba5f-aef61edfd923'},
{from: 'b1b63910-d88c-47e9-ba5f-aef61edfd923', to: '78ab963f-ecfb-4f24-b54b-eb05ac934c13'},
{from: '305b19fb-1304-418b-8392-68d7637ea036', to: '2bfcca72-8e73-4d4d-944c-e5e2f82c85de'},
{from: '95aec984-14f7-4e61-af6a-953d232d13b9', to: '514ccf7c-8016-4f65-b6d4-eb327b47a047'},
{from: '50f61d61-669f-442c-be9d-78b93d9b16f0', to: 'b1b63910-d88c-47e9-ba5f-aef61edfd923'},
{from: '1e141df1-2a5a-417e-97e0-d33c3aedfe6e', to: '88988a1f-fe5d-44e5-b3a7-95aa1602aad5'},
{from: 'dfd8ec0c-2cb5-4cb3-b59e-a84213950a0c', to: 'f22fd538-42e8-4e55-9cda-afa60fddcf68'},
{from: 'd90bd251-fed3-4e71-9b83-43a36246638f', to: '2bfcca72-8e73-4d4d-944c-e5e2f82c85de'},
{from: 'ead80948-7384-4e4c-a766-ea5170a83859', to: '88988a1f-fe5d-44e5-b3a7-95aa1602aad5'},
{from: '88988a1f-fe5d-44e5-b3a7-95aa1602aad5', to: '07c2a44a-0924-452f-a150-1411ae8cfccf'},
{from: '95aec984-14f7-4e61-af6a-953d232d13b9', to: 'cd9d2834-63f7-4d2b-aa7a-e069b28e659b'},
{from: '17d92773-9a92-4df1-b50c-78564d2df5f3', to: '5b486ae8-5be6-47c4-9bc4-15abd0ec1d0f'},
{from: 'f22fd538-42e8-4e55-9cda-afa60fddcf68', to: 'f44d2f91-9006-41cb-9478-a73aa848f395'},
{from: 'b80075bc-8d1d-463b-bf6e-e83378f95efe', to: '95aec984-14f7-4e61-af6a-953d232d13b9'},
{from: '2bfcca72-8e73-4d4d-944c-e5e2f82c85de', to: '8b8560f9-ca41-448f-8adc-65729cfbf7fa'},
{from: 'fcecfdab-308a-4731-9888-e71399ad96b8', to: '5b486ae8-5be6-47c4-9bc4-15abd0ec1d0f'},
{from: '514ccf7c-8016-4f65-b6d4-eb327b47a047', to: '88988a1f-fe5d-44e5-b3a7-95aa1602aad5'},
{from: '66242cde-9fbe-4052-8ad3-ffee0b8dbf4e', to: '88988a1f-fe5d-44e5-b3a7-95aa1602aad5'},
{from: 'f22fd538-42e8-4e55-9cda-afa60fddcf68', to: 'e93b49b0-eb72-484f-98a2-3a05040ec29c'},
{from: 'f44d2f91-9006-41cb-9478-a73aa848f395', to: '2bfcca72-8e73-4d4d-944c-e5e2f82c85de'}
                            ]);