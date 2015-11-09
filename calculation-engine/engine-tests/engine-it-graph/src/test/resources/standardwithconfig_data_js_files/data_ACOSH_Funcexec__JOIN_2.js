var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1815e58a-8c03-49b1-ab49-b765d357c47a', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 1815e58a-8c03-49b1-ab49-b765d357c47a<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '7a442087-c45c-47f9-a9a5-c9cbc3cd0f53', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 7a442087-c45c-47f9-a9a5-c9cbc3cd0f53<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '2d2fd0e1-16f1-41b9-a679-4d03fe550d60', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 2d2fd0e1-16f1-41b9-a679-4d03fe550d60<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '96dd3802-a325-4839-b2f1-8c9ac2c4f9ab', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 96dd3802-a325-4839-b2f1-8c9ac2c4f9ab<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: 'a8943e57-263b-4c51-bfc2-e3a67f6714d2', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: a8943e57-263b-4c51-bfc2-e3a67f6714d2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: 'b7bfa68c-393e-4bc9-aa63-ac98cc1472a6', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: b7bfa68c-393e-4bc9-aa63-ac98cc1472a6<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '41111566-de75-4805-9f12-d4602d08f852', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 41111566-de75-4805-9f12-d4602d08f852<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '372472cd-8a8e-47d2-be14-aea3dc4740a4', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 372472cd-8a8e-47d2-be14-aea3dc4740a4<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: 'c1f6de8e-c726-43bf-b0a9-bec64f3b066d', label: 'F7\n5.192925985263684', color: '#31b0d5', title: 'Name: F7<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: c1f6de8e-c726-43bf-b0a9-bec64f3b066d<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: 90.0, DEVDEF FUNCEXEC ; Ptgs: C2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '861839de-c80e-490b-9808-a6c86ed197c8', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 861839de-c80e-490b-9808-a6c86ed197c8<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '273a63be-8703-47b8-878e-14c90aa0b2eb', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 273a63be-8703-47b8-878e-14c90aa0b2eb<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: '0444f16e-b8c9-4ab0-946e-3e85fdfe4742', label: 'FUNCEXEC\n5.192925985263684', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 0444f16e-b8c9-4ab0-946e-3e85fdfe4742<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'},
{id: 'b508b0a7-9c86-4b51-ba80-9b177d84e129', label: 'E7\nDEFINE', color: '#31b0d5', title: 'Name: E7<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: b508b0a7-9c86-4b51-ba80-9b177d84e129<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: 90.0 ACOSH , #, 90.0, DEVDEF DEFINE ; Ptgs: C2 ACOSH , VALUE, C2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21a02556'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '273a63be-8703-47b8-878e-14c90aa0b2eb', to: '861839de-c80e-490b-9808-a6c86ed197c8'},
{from: '7a442087-c45c-47f9-a9a5-c9cbc3cd0f53', to: '96dd3802-a325-4839-b2f1-8c9ac2c4f9ab'},
{from: '7a442087-c45c-47f9-a9a5-c9cbc3cd0f53', to: '0444f16e-b8c9-4ab0-946e-3e85fdfe4742'},
{from: '96dd3802-a325-4839-b2f1-8c9ac2c4f9ab', to: 'b7bfa68c-393e-4bc9-aa63-ac98cc1472a6'},
{from: '2d2fd0e1-16f1-41b9-a679-4d03fe550d60', to: '41111566-de75-4805-9f12-d4602d08f852'},
{from: 'b7bfa68c-393e-4bc9-aa63-ac98cc1472a6', to: '41111566-de75-4805-9f12-d4602d08f852'},
{from: 'a8943e57-263b-4c51-bfc2-e3a67f6714d2', to: '41111566-de75-4805-9f12-d4602d08f852'},
{from: '0444f16e-b8c9-4ab0-946e-3e85fdfe4742', to: 'c1f6de8e-c726-43bf-b0a9-bec64f3b066d'},
{from: '7a442087-c45c-47f9-a9a5-c9cbc3cd0f53', to: '41111566-de75-4805-9f12-d4602d08f852'},
{from: '41111566-de75-4805-9f12-d4602d08f852', to: 'b508b0a7-9c86-4b51-ba80-9b177d84e129'},
{from: '1815e58a-8c03-49b1-ab49-b765d357c47a', to: '0444f16e-b8c9-4ab0-946e-3e85fdfe4742'},
{from: '861839de-c80e-490b-9808-a6c86ed197c8', to: '372472cd-8a8e-47d2-be14-aea3dc4740a4'}
                            ]);