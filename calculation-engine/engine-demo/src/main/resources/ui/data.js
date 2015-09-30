var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0759380d-174c-4c1a-a8cd-7769e1b20e2d', label: 'F16\n...', color: '#31b0d5', title: 'Name: F16<br>Value: org.apache.poi.ss.formula.ArrayEval$1@29d89d5d<br>Type: CELL_WITH_FORMULA<br>Id: 0759380d-174c-4c1a-a8cd-7769e1b20e2d<br>Formula Expression: Formula String: INDEX(VALUE, #external#(B2, A2, VALUE, FUNCEXEC)); Formula Values: INDEX(2, #external#(2.0, 1.0, DEVDEF_1, org.apache.poi.ss.formula.eval.FunctionNameEval FUNCEXEC)); Formula Ptg: 2, 2.0, 1.0, DEVDEF_1, org.apache.poi.ss.formula.eval.FunctionNameEval FUNCEXEC #external#  INDEX ; Ptgs: VALUE, B2, A2, VALUE, FUNCEXEC #external#  INDEX  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'},
{id: '0cd2719a-fcf3-43b8-91c7-d3134b34ca5c', label: 'FUNCEXEC\n...', color: '#31b0d5', title: 'Name: FUNCEXEC<br>Value: org.apache.poi.ss.formula.eval.FunctionNameEval [FUNCEXEC]<br>Type: CELL_WITH_VALUE<br>Id: 0cd2719a-fcf3-43b8-91c7-d3134b34ca5c<br>Formula Expression: Formula String: FUNCEXEC; Formula Values: org.apache.poi.ss.formula.eval.FunctionNameEval [FUNCEXEC]; Formula Ptg: org.apache.poi.ss.formula.eval.FunctionNameEval [FUNCEXEC]; Ptgs: FUNCEXEC Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'},
{id: '2459e2e8-a101-4f10-a7b0-3355403f15ec', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 2459e2e8-a101-4f10-a7b0-3355403f15ec<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'},
{id: '93d4e17a-93d5-4e94-a447-4b5713aba690', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 93d4e17a-93d5-4e94-a447-4b5713aba690<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'},
{id: '8f300134-2755-49a3-9a88-bad7dfbae896', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 8f300134-2755-49a3-9a88-bad7dfbae896<br>Formula Expression: Formula String: B2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'},
{id: '7ce28879-9d58-44c9-8776-36adf07a6ea4', label: '#external#\n...', color: '#f0ad4e', title: 'Name: #external#<br>Value: org.apache.poi.ss.formula.ArrayEval@2aceadd4<br>Type: FUNCTION<br>Id: 7ce28879-9d58-44c9-8776-36adf07a6ea4<br>Formula Expression: Formula String: #external#(B2, A2, VALUE, FUNCEXEC); Formula Values: #external#(2.0, 1.0, DEVDEF_1, org.apache.poi.ss.formula.eval.FunctionNameEval FUNCEXEC); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'},
{id: 'a5dec954-6fac-4d11-9197-706cbd7a4412', label: 'VALUE\n2', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2<br>Type: CONSTANT_VALUE<br>Id: a5dec954-6fac-4d11-9197-706cbd7a4412<br>Formula Expression: Formula String: VALUE; Formula Values: 2; Formula Ptg: 2; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'},
{id: 'ba7b9719-cc16-4a2b-8c4c-3304264bd175', label: 'INDEX\n...', color: '#f0ad4e', title: 'Name: INDEX<br>Value: org.apache.poi.ss.formula.ArrayEval$1@29d89d5d<br>Type: FUNCTION<br>Id: ba7b9719-cc16-4a2b-8c4c-3304264bd175<br>Formula Expression: Formula String: INDEX(VALUE, #external#(B2, A2, VALUE, FUNCEXEC)); Formula Values: INDEX(2, #external#(2.0, 1.0, DEVDEF_1, org.apache.poi.ss.formula.eval.FunctionNameEval FUNCEXEC)); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a7f959b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f300134-2755-49a3-9a88-bad7dfbae896', to: '7ce28879-9d58-44c9-8776-36adf07a6ea4'},
{from: '93d4e17a-93d5-4e94-a447-4b5713aba690', to: '7ce28879-9d58-44c9-8776-36adf07a6ea4'},
{from: '2459e2e8-a101-4f10-a7b0-3355403f15ec', to: '7ce28879-9d58-44c9-8776-36adf07a6ea4'},
{from: '0cd2719a-fcf3-43b8-91c7-d3134b34ca5c', to: '7ce28879-9d58-44c9-8776-36adf07a6ea4'},
{from: 'a5dec954-6fac-4d11-9197-706cbd7a4412', to: 'ba7b9719-cc16-4a2b-8c4c-3304264bd175'},
{from: '7ce28879-9d58-44c9-8776-36adf07a6ea4', to: 'ba7b9719-cc16-4a2b-8c4c-3304264bd175'},
{from: 'ba7b9719-cc16-4a2b-8c4c-3304264bd175', to: '0759380d-174c-4c1a-a8cd-7769e1b20e2d'}
                            ]);