var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e8841d45-5b56-4612-b86f-d8ca69b6312e', label: 'AVEDEV\n109.43424036281179', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 109.43424036281179<br>Type: FUNCTION<br>Id: e8841d45-5b56-4612-b86f-d8ca69b6312e<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0), AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: '5da2e8e4-0581-419e-9c92-69c7ccc61032', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 5da2e8e4-0581-419e-9c92-69c7ccc61032<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV ; Ptgs: B1:C3 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: '67982c93-28e7-4dc9-b917-93ebc833e422', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 67982c93-28e7-4dc9-b917-93ebc833e422<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV ; Ptgs: A1:A7 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: '0e249b3d-d55e-48b0-be60-645af7b2de0b', label: 'C9\n109.43424036281179', color: '#31b0d5', title: 'Name: C9<br>Value: 109.43424036281179<br>Type: CELL_WITH_FORMULA<br>Id: 0e249b3d-d55e-48b0-be60-645af7b2de0b<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0), AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0)); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV , 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV  AVEDEV ; Ptgs: B1:C3 AVEDEV , A1:A7 AVEDEV  AVEDEV  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: 'd5d4a337-7247-4c77-b9ef-fc7094cb3b7b', label: 'A1:A7\n[[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: d5d4a337-7247-4c77-b9ef-fc7094cb3b7b<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: '08d57b45-bb9a-4a77-a916-e8c4bb1316af', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 08d57b45-bb9a-4a77-a916-e8c4bb1316af<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV ; Ptgs: A1:A7 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: '56afec44-7109-4aab-ac41-db3fa3cc0001', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: 56afec44-7109-4aab-ac41-db3fa3cc0001<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: '5e4ae690-8f62-465d-a8a7-33eafdd375fc', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 5e4ae690-8f62-465d-a8a7-33eafdd375fc<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV ; Ptgs: B1:C3 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: 'b1dfee1c-0712-4dba-9d29-3175c66d53b3', label: 'AVEDEV\n1.0204081632653061', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 1.0204081632653061<br>Type: FUNCTION<br>Id: b1dfee1c-0712-4dba-9d29-3175c66d53b3<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'},
{id: '63994d39-64c6-41aa-9767-0869bd4fe9c6', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: 63994d39-64c6-41aa-9767-0869bd4fe9c6<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e242137'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b1dfee1c-0712-4dba-9d29-3175c66d53b3', to: '08d57b45-bb9a-4a77-a916-e8c4bb1316af'},
{from: '08d57b45-bb9a-4a77-a916-e8c4bb1316af', to: 'e8841d45-5b56-4612-b86f-d8ca69b6312e'},
{from: '56afec44-7109-4aab-ac41-db3fa3cc0001', to: '63994d39-64c6-41aa-9767-0869bd4fe9c6'},
{from: 'd5d4a337-7247-4c77-b9ef-fc7094cb3b7b', to: 'b1dfee1c-0712-4dba-9d29-3175c66d53b3'},
{from: 'b1dfee1c-0712-4dba-9d29-3175c66d53b3', to: '67982c93-28e7-4dc9-b917-93ebc833e422'},
{from: '63994d39-64c6-41aa-9767-0869bd4fe9c6', to: '5e4ae690-8f62-465d-a8a7-33eafdd375fc'},
{from: '5e4ae690-8f62-465d-a8a7-33eafdd375fc', to: 'e8841d45-5b56-4612-b86f-d8ca69b6312e'},
{from: 'e8841d45-5b56-4612-b86f-d8ca69b6312e', to: '0e249b3d-d55e-48b0-be60-645af7b2de0b'},
{from: '63994d39-64c6-41aa-9767-0869bd4fe9c6', to: '5da2e8e4-0581-419e-9c92-69c7ccc61032'}
                            ]);