var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd6c4a174-5b3b-4ac4-b5ef-a2f59b658692', label: 'A1\n-1.95', color: '#31b0d5', title: 'Name: A1<br>Value: -1.95<br>Type: CELL_WITH_FORMULA<br>Id: d6c4a174-5b3b-4ac4-b5ef-a2f59b658692<br>Formula Expression: Formula String: B4*B5+COS(B6)/SUM(B1,B3,B5)-IF(I1=I2,I3,I4); Formula Values: 2.05 - 4; Formula Ptg: 2.05 4 -; Ptgs: 2.05 I4 - Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'c77b95df-1055-4db1-8a2a-7b19a2d4410a', label: 'B4\n1', color: '#31b0d5', title: 'Name: B4<br>Value: 1<br>Type: CELL_WITH_REFERENCE<br>Id: c77b95df-1055-4db1-8a2a-7b19a2d4410a<br>Formula Expression: Formula String: D9; Formula Values: 1; Formula Ptg: 1; Ptgs: D9 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '36cf1ad9-8091-43c7-ab9f-c53651cb1058', label: 'B5\n2', color: '#31b0d5', title: 'Name: B5<br>Value: 2<br>Type: CELL_WITH_FORMULA<br>Id: 36cf1ad9-8091-43c7-ab9f-c53651cb1058<br>Formula Expression: Formula String: D5-E5; Formula Values: 5 - 3; Formula Ptg: 5 3 -; Ptgs: D5 E5 - Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '0edeff5f-e1f4-43ab-8757-6c318ce50004', label: '*\n2', color: '#f0ad4e', title: 'Name: *<br>Value: 2<br>Type: OPERATOR<br>Id: 0edeff5f-e1f4-43ab-8757-6c318ce50004<br>Formula Expression: Formula String: B4 * B5; Formula Values: 1 * 2; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'daac1a9a-7015-42b6-b8c8-6b88ad4859cf', label: 'D9\n1', color: '#31b0d5', title: 'Name: D9<br>Value: 1<br>Type: CELL_WITH_FORMULA<br>Id: daac1a9a-7015-42b6-b8c8-6b88ad4859cf<br>Formula Expression: Formula String: D9; Formula Values: COUNT ([]); Formula Ptg: [] COUNT; Ptgs: [] COUNT Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'cc4bba99-ebd8-4053-9d27-d45b4f7d65f1', label: 'D1:D8\n...', color: '#31b0d5', title: 'Name: D1:D8<br>Value: Area1x8;[D1:];[D2:];[D3:];[D4:];[D5:5];[D6:];[D7:];[D8:];<br>Type: RANGE<br>Id: cc4bba99-ebd8-4053-9d27-d45b4f7d65f1<br>Formula Expression: Formula String: null; Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '06e280d9-3b4f-4f7f-977b-cac75187b6dd', label: 'COUNT\n1', color: '#f0ad4e', title: 'Name: COUNT<br>Value: 1<br>Type: FUNCTION<br>Id: 06e280d9-3b4f-4f7f-977b-cac75187b6dd<br>Formula Expression: Formula String: COUNT ([]); Formula Values: COUNT ([]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '9a604fb4-9136-45cf-8fc2-befb70c1f867', label: 'D5\n5', color: '#31b0d5', title: 'Name: D5<br>Value: 5<br>Type: CELL_WITH_VALUE<br>Id: 9a604fb4-9136-45cf-8fc2-befb70c1f867<br>Formula Expression: Formula String: D5; Formula Values: 5; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '5ecdbda3-6821-44d7-bcd3-748be1e95f7c', label: 'E5\n3', color: '#31b0d5', title: 'Name: E5<br>Value: 3<br>Type: CELL_WITH_VALUE<br>Id: 5ecdbda3-6821-44d7-bcd3-748be1e95f7c<br>Formula Expression: Formula String: E5; Formula Values: 3; Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'ffe612cc-29fa-48a1-81e6-0a062889b2a1', label: '-\n2', color: '#f0ad4e', title: 'Name: -<br>Value: 2<br>Type: OPERATOR<br>Id: ffe612cc-29fa-48a1-81e6-0a062889b2a1<br>Formula Expression: Formula String: D5 - E5; Formula Values: 5 - 3; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'b27efa86-204e-4d8e-9859-2572aebb158d', label: 'B6\n0', color: '#31b0d5', title: 'Name: B6<br>Value: 0<br>Type: CELL_WITH_VALUE<br>Id: b27efa86-204e-4d8e-9859-2572aebb158d<br>Formula Expression: Formula String: B6; Formula Values: 0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '4108993f-590b-4714-8e7a-a1e28733bda1', label: 'COS\n1', color: '#f0ad4e', title: 'Name: COS<br>Value: 1<br>Type: FUNCTION<br>Id: 4108993f-590b-4714-8e7a-a1e28733bda1<br>Formula Expression: Formula String: COS ([B6]); Formula Values: COS ([0]); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '6969d2cd-3705-4b98-adbb-649e04e7a241', label: 'B1\n10.0', color: '#31b0d5', title: 'Name: B1<br>Value: 10.0<br>Type: CELL_WITH_VALUE<br>Id: 6969d2cd-3705-4b98-adbb-649e04e7a241<br>Formula Expression: Formula String: B1; Formula Values: 10.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'c2539fa3-4f4b-4239-a0ff-23ebc4b8e149', label: 'B3\n8.0', color: '#31b0d5', title: 'Name: B3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: c2539fa3-4f4b-4239-a0ff-23ebc4b8e149<br>Formula Expression: Formula String: B3; Formula Values: 8.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '862407a9-bcd9-4eb0-98a3-b49b131dbcba', label: 'B5\n2', color: '#31b0d5', title: 'Name: B5<br>Value: 2<br>Type: CELL_WITH_FORMULA<br>Id: 862407a9-bcd9-4eb0-98a3-b49b131dbcba<br>Formula Expression: Formula String: D5-E5; Formula Values: 5 - 3; Formula Ptg: 5 3 -; Ptgs: D5 E5 - Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'fb504cde-1914-4c87-b8ea-ac2133f292e1', label: 'SUM\n20', color: '#f0ad4e', title: 'Name: SUM<br>Value: 20<br>Type: FUNCTION<br>Id: fb504cde-1914-4c87-b8ea-ac2133f292e1<br>Formula Expression: Formula String: SUM ([B1, B3, B5]); Formula Values: SUM ([10.0, 8.0, 2]); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '696605bc-15b7-452b-9932-423b4ad768ba', label: '/\n0.05', color: '#f0ad4e', title: 'Name: /<br>Value: 0.05<br>Type: OPERATOR<br>Id: 696605bc-15b7-452b-9932-423b4ad768ba<br>Formula Expression: Formula String: 1 / 20; Formula Values: 1 / 20; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '88ac9fd9-842a-43fa-802b-bc2b07007a67', label: '+\n2.05', color: '#f0ad4e', title: 'Name: +<br>Value: 2.05<br>Type: OPERATOR<br>Id: 88ac9fd9-842a-43fa-802b-bc2b07007a67<br>Formula Expression: Formula String: 2 + 0.05; Formula Values: 2 + 0.05; Formula Ptg: ; Ptgs:  Index in Ptgs: 10 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '0139b3b7-7708-4793-8561-cd4f684ce6a5', label: 'I1\n1', color: '#31b0d5', title: 'Name: I1<br>Value: 1<br>Type: CELL_WITH_VALUE<br>Id: 0139b3b7-7708-4793-8561-cd4f684ce6a5<br>Formula Expression: Formula String: I1; Formula Values: 1; Formula Ptg: ; Ptgs:  Index in Ptgs: 11 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'f27d2df9-d7c1-4d2b-b91e-1444e1245887', label: 'I2\n2', color: '#31b0d5', title: 'Name: I2<br>Value: 2<br>Type: CELL_WITH_VALUE<br>Id: f27d2df9-d7c1-4d2b-b91e-1444e1245887<br>Formula Expression: Formula String: I2; Formula Values: 2; Formula Ptg: ; Ptgs:  Index in Ptgs: 12 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '2817aea2-c3a2-4055-9c21-7641785fdedc', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 2817aea2-c3a2-4055-9c21-7641785fdedc<br>Formula Expression: Formula String: I1 = I2; Formula Values: 1 = 2; Formula Ptg: ; Ptgs:  Index in Ptgs: 13 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '13a711f5-d003-49b0-898e-1479fd21bd11', label: 'IF\n4', color: '#f0ad4e', title: 'Name: IF<br>Value: 4<br>Type: IF<br>Id: 13a711f5-d003-49b0-898e-1479fd21bd11<br>Formula Expression: Formula String: IF(I1=I2,I3,I4); Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 14 <br>Source Object Id: null'},
{id: '6084808e-7f5b-4154-9ae3-a849ecb150e0', label: 'I4\n4', color: '#31b0d5', title: 'Name: I4<br>Value: 4<br>Type: CELL_WITH_FORMULA<br>Id: 6084808e-7f5b-4154-9ae3-a849ecb150e0<br>Formula Expression: Formula String: B5+B5; Formula Values: 2 + 2; Formula Ptg: 2 2 +; Ptgs: B5 B5 + Index in Ptgs: 17 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: '0fb7e128-bdbd-49b9-a089-b4ce4c9b572d', label: '-\n-1.95', color: '#f0ad4e', title: 'Name: -<br>Value: -1.95<br>Type: OPERATOR<br>Id: 0fb7e128-bdbd-49b9-a089-b4ce4c9b572d<br>Formula Expression: Formula String: 2.05 - I4; Formula Values: 2.05 - 4; Formula Ptg: ; Ptgs:  Index in Ptgs: 20 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'def8ddf0-a07f-400c-b768-96c429ec4c82', label: 'B5\n2', color: '#31b0d5', title: 'Name: B5<br>Value: 2<br>Type: CELL_WITH_FORMULA<br>Id: def8ddf0-a07f-400c-b768-96c429ec4c82<br>Formula Expression: Formula String: D5-E5; Formula Values: 5 - 3; Formula Ptg: 5 3 -; Ptgs: D5 E5 - Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'ff783993-726d-4c84-8a9a-72edf4e9aa1b', label: 'B5\n2', color: '#31b0d5', title: 'Name: B5<br>Value: 2<br>Type: CELL_WITH_FORMULA<br>Id: ff783993-726d-4c84-8a9a-72edf4e9aa1b<br>Formula Expression: Formula String: D5-E5; Formula Values: 5 - 3; Formula Ptg: 5 3 -; Ptgs: D5 E5 - Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'},
{id: 'daf69953-abdd-4b4a-b54d-680145210935', label: '+\n4', color: '#f0ad4e', title: 'Name: +<br>Value: 4<br>Type: OPERATOR<br>Id: daf69953-abdd-4b4a-b54d-680145210935<br>Formula Expression: Formula String: B5 + B5; Formula Values: 2 + 2; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1755eec3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '36cf1ad9-8091-43c7-ab9f-c53651cb1058', to: '0edeff5f-e1f4-43ab-8757-6c318ce50004'},
{from: 'c77b95df-1055-4db1-8a2a-7b19a2d4410a', to: '0edeff5f-e1f4-43ab-8757-6c318ce50004'},
{from: 'cc4bba99-ebd8-4053-9d27-d45b4f7d65f1', to: '06e280d9-3b4f-4f7f-977b-cac75187b6dd'},
{from: '06e280d9-3b4f-4f7f-977b-cac75187b6dd', to: 'daac1a9a-7015-42b6-b8c8-6b88ad4859cf'},
{from: 'daac1a9a-7015-42b6-b8c8-6b88ad4859cf', to: 'c77b95df-1055-4db1-8a2a-7b19a2d4410a'},
{from: '5ecdbda3-6821-44d7-bcd3-748be1e95f7c', to: 'ffe612cc-29fa-48a1-81e6-0a062889b2a1'},
{from: '9a604fb4-9136-45cf-8fc2-befb70c1f867', to: 'ffe612cc-29fa-48a1-81e6-0a062889b2a1'},
{from: 'ffe612cc-29fa-48a1-81e6-0a062889b2a1', to: '36cf1ad9-8091-43c7-ab9f-c53651cb1058'},
{from: 'b27efa86-204e-4d8e-9859-2572aebb158d', to: '4108993f-590b-4714-8e7a-a1e28733bda1'},
{from: '862407a9-bcd9-4eb0-98a3-b49b131dbcba', to: 'fb504cde-1914-4c87-b8ea-ac2133f292e1'},
{from: 'c2539fa3-4f4b-4239-a0ff-23ebc4b8e149', to: 'fb504cde-1914-4c87-b8ea-ac2133f292e1'},
{from: '6969d2cd-3705-4b98-adbb-649e04e7a241', to: 'fb504cde-1914-4c87-b8ea-ac2133f292e1'},
{from: 'fb504cde-1914-4c87-b8ea-ac2133f292e1', to: '696605bc-15b7-452b-9932-423b4ad768ba'},
{from: '4108993f-590b-4714-8e7a-a1e28733bda1', to: '696605bc-15b7-452b-9932-423b4ad768ba'},
{from: '696605bc-15b7-452b-9932-423b4ad768ba', to: '88ac9fd9-842a-43fa-802b-bc2b07007a67'},
{from: '0edeff5f-e1f4-43ab-8757-6c318ce50004', to: '88ac9fd9-842a-43fa-802b-bc2b07007a67'},
{from: 'f27d2df9-d7c1-4d2b-b91e-1444e1245887', to: '2817aea2-c3a2-4055-9c21-7641785fdedc'},
{from: '0139b3b7-7708-4793-8561-cd4f684ce6a5', to: '2817aea2-c3a2-4055-9c21-7641785fdedc'},
{from: '6084808e-7f5b-4154-9ae3-a849ecb150e0', to: '13a711f5-d003-49b0-898e-1479fd21bd11'},
{from: '2817aea2-c3a2-4055-9c21-7641785fdedc', to: '13a711f5-d003-49b0-898e-1479fd21bd11'},
{from: '13a711f5-d003-49b0-898e-1479fd21bd11', to: '0fb7e128-bdbd-49b9-a089-b4ce4c9b572d'},
{from: '88ac9fd9-842a-43fa-802b-bc2b07007a67', to: '0fb7e128-bdbd-49b9-a089-b4ce4c9b572d'},
{from: 'ff783993-726d-4c84-8a9a-72edf4e9aa1b', to: 'daf69953-abdd-4b4a-b54d-680145210935'},
{from: 'def8ddf0-a07f-400c-b768-96c429ec4c82', to: 'daf69953-abdd-4b4a-b54d-680145210935'},
{from: 'daf69953-abdd-4b4a-b54d-680145210935', to: '6084808e-7f5b-4154-9ae3-a849ecb150e0'},
{from: '0fb7e128-bdbd-49b9-a089-b4ce4c9b572d', to: 'd6c4a174-5b3b-4ac4-b5ef-a2f59b658692'},
{from: 'ffe612cc-29fa-48a1-81e6-0a062889b2a1', to: '862407a9-bcd9-4eb0-98a3-b49b131dbcba'},
{from: 'ffe612cc-29fa-48a1-81e6-0a062889b2a1', to: 'ff783993-726d-4c84-8a9a-72edf4e9aa1b'},
{from: 'ffe612cc-29fa-48a1-81e6-0a062889b2a1', to: 'def8ddf0-a07f-400c-b768-96c429ec4c82'}
                            ]);