var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd5c38d0c-db16-49a2-9fd7-3e98da11a265', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: d5c38d0c-db16-49a2-9fd7-3e98da11a265<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'},
{id: '9a21de4e-05b9-4d83-aad4-0eb6a3087a57', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 9a21de4e-05b9-4d83-aad4-0eb6a3087a57<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV ; Ptgs: B1:C3 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'},
{id: '4b547841-da9f-4ad8-a0df-a2e36a609602', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: 4b547841-da9f-4ad8-a0df-a2e36a609602<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'},
{id: '30d6319b-4413-41a5-8bf5-c1b74abe8eb3', label: 'B8\n1.0204081632653061', color: '#31b0d5', title: 'Name: B8<br>Value: 1.0204081632653061<br>Type: CELL_WITH_FORMULA<br>Id: 30d6319b-4413-41a5-8bf5-c1b74abe8eb3<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV ; Ptgs: A1:A7 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'},
{id: '2cfce2f6-32c8-4359-bad4-8dccd1251757', label: 'C9\n109.43424036281179', color: '#31b0d5', title: 'Name: C9<br>Value: 109.43424036281179<br>Type: CELL_WITH_FORMULA<br>Id: 2cfce2f6-32c8-4359-bad4-8dccd1251757<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0), AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0)); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV , 4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0 AVEDEV  AVEDEV ; Ptgs: B1:C3 AVEDEV , A1:A7 AVEDEV  AVEDEV  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'},
{id: '8c7359fb-5ddc-45cb-8e1c-083edb5fcccc', label: 'A1:A7\n[[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 8c7359fb-5ddc-45cb-8e1c-083edb5fcccc<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [6.0], [7.0], [5.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'},
{id: '7d3ad7b6-994b-4d46-8524-13cc0b98f796', label: 'AVEDEV\n1.0204081632653061', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 1.0204081632653061<br>Type: FUNCTION<br>Id: 7d3ad7b6-994b-4d46-8524-13cc0b98f796<br>Formula Expression: Formula String: AVEDEV(A1:A7); Formula Values: AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'},
{id: '9b322d0f-aaf7-4e70-97f3-8d9b934faf6f', label: 'AVEDEV\n109.43424036281179', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 109.43424036281179<br>Type: FUNCTION<br>Id: 9b322d0f-aaf7-4e70-97f3-8d9b934faf6f<br>Formula Expression: Formula String: AVEDEV(AVEDEV(B1:C3), AVEDEV(A1:A7)); Formula Values: AVEDEV(AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0), AVEDEV(4.0, 5.0, 6.0, 7.0, 5.0, 4.0, 3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77db3d02'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '30d6319b-4413-41a5-8bf5-c1b74abe8eb3', to: '9b322d0f-aaf7-4e70-97f3-8d9b934faf6f'},
{from: '9a21de4e-05b9-4d83-aad4-0eb6a3087a57', to: '9b322d0f-aaf7-4e70-97f3-8d9b934faf6f'},
{from: '7d3ad7b6-994b-4d46-8524-13cc0b98f796', to: '30d6319b-4413-41a5-8bf5-c1b74abe8eb3'},
{from: '4b547841-da9f-4ad8-a0df-a2e36a609602', to: 'd5c38d0c-db16-49a2-9fd7-3e98da11a265'},
{from: '9b322d0f-aaf7-4e70-97f3-8d9b934faf6f', to: '2cfce2f6-32c8-4359-bad4-8dccd1251757'},
{from: 'd5c38d0c-db16-49a2-9fd7-3e98da11a265', to: '9a21de4e-05b9-4d83-aad4-0eb6a3087a57'},
{from: '8c7359fb-5ddc-45cb-8e1c-083edb5fcccc', to: '7d3ad7b6-994b-4d46-8524-13cc0b98f796'}
                            ]);