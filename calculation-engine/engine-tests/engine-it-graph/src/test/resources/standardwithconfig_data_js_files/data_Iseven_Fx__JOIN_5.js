var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0239fba4-1b7d-403d-8cac-3315b20d851d', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0239fba4-1b7d-403d-8cac-3315b20d851d<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'bef72e70-99d9-4330-96d5-2c50163bd613', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: TRUE<br>Type: FUNCTION<br>Id: bef72e70-99d9-4330-96d5-2c50163bd613<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'b9028fc0-a39c-43ad-9b74-cb0e1e0d1fa5', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: b9028fc0-a39c-43ad-9b74-cb0e1e0d1fa5<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'fcd06ca8-309e-4d0b-8e9d-6643f3b8caf3', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: fcd06ca8-309e-4d0b-8e9d-6643f3b8caf3<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'dc23a30d-eae4-45a5-baaa-7a8caef53972', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: dc23a30d-eae4-45a5-baaa-7a8caef53972<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '3a4199d4-5c2d-4a84-883f-e21092d149e2', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: 3a4199d4-5c2d-4a84-883f-e21092d149e2<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'cafc48df-7433-4889-9c32-6eec643d69f4', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: cafc48df-7433-4889-9c32-6eec643d69f4<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: 2.0 ISEVEN ; Ptgs: A2 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'a03c2d43-6fd6-4999-b87e-ee71f2ae72fa', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: a03c2d43-6fd6-4999-b87e-ee71f2ae72fa<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '88a46658-fdb9-4ffa-8580-bf739c193d3b', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 88a46658-fdb9-4ffa-8580-bf739c193d3b<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: 5.45 ISEVEN ; Ptgs: C3 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'aa3cd0cd-fe2c-4ff0-985d-dfee37445ecd', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: aa3cd0cd-fe2c-4ff0-985d-dfee37445ecd<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: qwerty ISEVEN ; Ptgs: D1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '30cb0e50-f776-4ea8-bac3-4f0c6e71c264', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 30cb0e50-f776-4ea8-bac3-4f0c6e71c264<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '9442ca30-7d25-4477-9574-4c1ac72db8c3', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: 9442ca30-7d25-4477-9574-4c1ac72db8c3<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: 'd6120355-f8ba-4b4e-99db-e715b31d540d', label: 'D12\nTRUE', color: '#31b0d5', title: 'Name: D12<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: d6120355-f8ba-4b4e-99db-e715b31d540d<br>Formula Expression: Formula String: ISEVEN(hjk); Formula Values: ISEVEN(); Formula Ptg:  ISEVEN ; Ptgs: hjk ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '6ee91c83-14d6-4a1d-853e-1ac2e7d80bb2', label: 'hjk\n', color: '#31b0d5', title: 'Name: hjk<br>Value: <br>Type: EMPTY_CELL<br>Id: 6ee91c83-14d6-4a1d-853e-1ac2e7d80bb2<br>Formula Expression: Formula String: hjk; Formula Values: ; Formula Ptg: ; Ptgs: hjk Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '5e71a15f-e9ed-4891-a53b-daf53d7cce23', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 5e71a15f-e9ed-4891-a53b-daf53d7cce23<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '38631d70-6c27-4b1f-b071-265d23a8d7a5', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 38631d70-6c27-4b1f-b071-265d23a8d7a5<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'},
{id: '253b09eb-899b-44da-912d-bfa4e2cd2706', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: TRUE<br>Type: FUNCTION<br>Id: 253b09eb-899b-44da-912d-bfa4e2cd2706<br>Formula Expression: Formula String: ISEVEN(hjk); Formula Values: ISEVEN(); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19507769'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '30cb0e50-f776-4ea8-bac3-4f0c6e71c264', to: 'fcd06ca8-309e-4d0b-8e9d-6643f3b8caf3'},
{from: 'fcd06ca8-309e-4d0b-8e9d-6643f3b8caf3', to: '38631d70-6c27-4b1f-b071-265d23a8d7a5'},
{from: '9442ca30-7d25-4477-9574-4c1ac72db8c3', to: '3a4199d4-5c2d-4a84-883f-e21092d149e2'},
{from: 'bef72e70-99d9-4330-96d5-2c50163bd613', to: 'cafc48df-7433-4889-9c32-6eec643d69f4'},
{from: '3a4199d4-5c2d-4a84-883f-e21092d149e2', to: 'aa3cd0cd-fe2c-4ff0-985d-dfee37445ecd'},
{from: 'b9028fc0-a39c-43ad-9b74-cb0e1e0d1fa5', to: 'a03c2d43-6fd6-4999-b87e-ee71f2ae72fa'},
{from: '6ee91c83-14d6-4a1d-853e-1ac2e7d80bb2', to: '253b09eb-899b-44da-912d-bfa4e2cd2706'},
{from: 'a03c2d43-6fd6-4999-b87e-ee71f2ae72fa', to: '88a46658-fdb9-4ffa-8580-bf739c193d3b'},
{from: 'fcd06ca8-309e-4d0b-8e9d-6643f3b8caf3', to: '0239fba4-1b7d-403d-8cac-3315b20d851d'},
{from: '253b09eb-899b-44da-912d-bfa4e2cd2706', to: 'd6120355-f8ba-4b4e-99db-e715b31d540d'},
{from: '0239fba4-1b7d-403d-8cac-3315b20d851d', to: '5e71a15f-e9ed-4891-a53b-daf53d7cce23'},
{from: 'dc23a30d-eae4-45a5-baaa-7a8caef53972', to: 'bef72e70-99d9-4330-96d5-2c50163bd613'}
                            ]);