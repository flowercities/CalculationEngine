var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1', label: 'A2:C2\n[[5.0, 7.0, 9.0]]', color: '#31b0d5', title: 'Name: A2:C2<br>Alias: null<br>Value: [[5.0, 7.0, 9.0]]<br>Type: RANGE<br>Id: 1<br>Formula Expression: Formula String: A2:C2; Formula Values: [[5.0, 7.0, 9.0]]; Formula Ptg: [[5.0, 7.0, 9.0]]; Ptgs: A2:C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '2', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: SUM(A2:C2); Formula Values: SUM([[5.0, 7.0, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '4', label: 'A3:C3\n[[8.0, 4.0, 8.0]]', color: '#31b0d5', title: 'Name: A3:C3<br>Alias: null<br>Value: [[8.0, 4.0, 8.0]]<br>Type: RANGE<br>Id: 4<br>Formula Expression: Formula String: A3:C3; Formula Values: [[8.0, 4.0, 8.0]]; Formula Ptg: [[8.0, 4.0, 8.0]]; Ptgs: A3:C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '5', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: SUM(A3:C3); Formula Values: SUM([[8.0, 4.0, 8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '6', label: 'D4\n9.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: SUM(A4:C4); Formula Values: SUM([[1.0, 8.0, 0.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '7', label: 'A4:C4\n[[1.0, 8.0, 0.0]]', color: '#31b0d5', title: 'Name: A4:C4<br>Alias: null<br>Value: [[1.0, 8.0, 0.0]]<br>Type: RANGE<br>Id: 7<br>Formula Expression: Formula String: A4:C4; Formula Values: [[1.0, 8.0, 0.0]]; Formula Ptg: [[1.0, 8.0, 0.0]]; Ptgs: A4:C4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '8', label: 'SUM\n9.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 9.0<br>Type: FUNCTION<br>Id: 8<br>Formula Expression: Formula String: SUM(A4:C4); Formula Values: SUM([[1.0, 8.0, 0.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '10', label: 'A5:C5\n[[7.0, 8.0, ]]', color: '#31b0d5', title: 'Name: A5:C5<br>Alias: null<br>Value: [[7.0, 8.0, ]]<br>Type: RANGE<br>Id: 10<br>Formula Expression: Formula String: A5:C5; Formula Values: [[7.0, 8.0, ]]; Formula Ptg: [[7.0, 8.0, ]]; Ptgs: A5:C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '11', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 11<br>Formula Expression: Formula String: SUM(A5:C5); Formula Values: SUM([[7.0, 8.0, ]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '12', label: 'E6\nDEFINE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 12<br>Formula Expression: Formula String: DEFINE(SUM(A2:C2), VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(SUM([[5.0, 7.0, 9.0]]), #, 9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '14', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 14<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '15', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 15<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '16', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 16<br>Formula Expression: Formula String: B2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '18', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 18<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '19', label: 'D2\n21.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 19<br>Formula Expression: Formula String: SUM(A2:C2); Formula Values: SUM([[5.0, 7.0, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '20', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 20<br>Formula Expression: Formula String: DEFINE(SUM(A2:C2), VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(SUM([[5.0, 7.0, 9.0]]), #, 9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '21', label: 'F6\n21.0', color: '#31b0d5', title: 'Name: F6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 21<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '23', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 23<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '26', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 26<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '27', label: 'FUNCEXEC\n21.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 27<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '28', label: 'E7\nDEFINE', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 28<br>Formula Expression: Formula String: DEFINE(SUM(A3:C3), VALUE, C3, B3, A3, VALUE); Formula Values: DEFINE(SUM([[8.0, 4.0, 8.0]]), #, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '30', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 30<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '32', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 32<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '34', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 34<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '35', label: 'D3\n20.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 35<br>Formula Expression: Formula String: SUM(A3:C3); Formula Values: SUM([[8.0, 4.0, 8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '36', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 36<br>Formula Expression: Formula String: DEFINE(SUM(A3:C3), VALUE, C3, B3, A3, VALUE); Formula Values: DEFINE(SUM([[8.0, 4.0, 8.0]]), #, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '37', label: 'F7\n20.0', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 37<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '39', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 39<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '40', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 40<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '42', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 42<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '43', label: 'FUNCEXEC\n20.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 43<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '44', label: 'E8\nDEFINE', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 44<br>Formula Expression: Formula String: DEFINE(SUM(A4:C4), VALUE, C4, B4, A4, VALUE); Formula Values: DEFINE(SUM([[1.0, 8.0, 0.0]]), #, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '46', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 46<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '49', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 49<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '50', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 50<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '52', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 52<br>Formula Expression: Formula String: DEFINE(SUM(A4:C4), VALUE, C4, B4, A4, VALUE); Formula Values: DEFINE(SUM([[1.0, 8.0, 0.0]]), #, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '53', label: 'F8\n9.0', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 53<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '55', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 55<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '56', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 56<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '57', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 57<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '59', label: 'FUNCEXEC\n9.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 9.0<br>Type: FUNCTION<br>Id: 59<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '60', label: 'E9\nDEFINE', color: '#31b0d5', title: 'Name: E9<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 60<br>Formula Expression: Formula String: DEFINE(SUM(A5:C5), VALUE, C5, B5, A5, VALUE); Formula Values: DEFINE(SUM([[7.0, 8.0, ]]), #, , 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '62', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 62<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '63', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 63<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '64', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 64<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '66', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 66<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '67', label: 'D5\n15.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 67<br>Formula Expression: Formula String: SUM(A5:C5); Formula Values: SUM([[7.0, 8.0, ]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '68', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 68<br>Formula Expression: Formula String: DEFINE(SUM(A5:C5), VALUE, C5, B5, A5, VALUE); Formula Values: DEFINE(SUM([[7.0, 8.0, ]]), #, , 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '69', label: 'F9\n15.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 69<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '71', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 71<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '74', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 74<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'},
{id: '75', label: 'FUNCEXEC\n15.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 75<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5ad0c70a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '10', to: '11'},
{from: '26', to: '27'},
{from: '42', to: '43'},
{from: '74', to: '75'},
{from: '18', to: '20'},
{from: '34', to: '36'},
{from: '50', to: '52'},
{from: '66', to: '68'},
{from: '14', to: '20'},
{from: '30', to: '36'},
{from: '46', to: '52'},
{from: '62', to: '68'},
{from: '64', to: '10'},
{from: '56', to: '7'},
{from: '2', to: '19'},
{from: '15', to: '1'},
{from: '27', to: '21'},
{from: '43', to: '37'},
{from: '59', to: '53'},
{from: '75', to: '69'},
{from: '40', to: '4'},
{from: '7', to: '8'},
{from: '19', to: '20'},
{from: '35', to: '36'},
{from: '67', to: '68'},
{from: '23', to: '27'},
{from: '39', to: '43'},
{from: '55', to: '59'},
{from: '71', to: '75'},
{from: '32', to: '4'},
{from: '15', to: '20'},
{from: '63', to: '68'},
{from: '15', to: '27'},
{from: '63', to: '75'},
{from: '57', to: '7'},
{from: '6', to: '52'},
{from: '16', to: '1'},
{from: '49', to: '7'},
{from: '20', to: '12'},
{from: '36', to: '28'},
{from: '52', to: '44'},
{from: '68', to: '60'},
{from: '40', to: '36'},
{from: '56', to: '52'},
{from: '8', to: '6'},
{from: '74', to: '10'},
{from: '4', to: '5'},
{from: '40', to: '43'},
{from: '56', to: '59'},
{from: '16', to: '20'},
{from: '32', to: '36'},
{from: '64', to: '68'},
{from: '16', to: '27'},
{from: '32', to: '43'},
{from: '64', to: '75'},
{from: '11', to: '67'},
{from: '42', to: '4'},
{from: '57', to: '52'},
{from: '1', to: '2'},
{from: '57', to: '59'},
{from: '49', to: '52'},
{from: '26', to: '1'},
{from: '49', to: '59'},
{from: '63', to: '10'},
{from: '26', to: '20'},
{from: '42', to: '36'},
{from: '74', to: '68'},
{from: '5', to: '35'}
                            ]);