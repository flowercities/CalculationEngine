var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E2\n5.25', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: AVERAGE(A2:D2); Formula Values: AVERAGE([[5.0, 3.0, 9.0, 4.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '1', label: 'A2:D2\n[[5.0, 3.0, 9.0, 4.0]]', color: '#31b0d5', title: 'Name: A2:D2<br>Alias: null<br>Value: [[5.0, 3.0, 9.0, 4.0]]<br>Type: RANGE<br>Id: 1<br>Formula Expression: Formula String: A2:D2; Formula Values: [[5.0, 3.0, 9.0, 4.0]]; Formula Ptg: [[5.0, 3.0, 9.0, 4.0]]; Ptgs: A2:D2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '2', label: 'AVERAGE\n5.25', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 5.25<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: AVERAGE(A2:D2); Formula Values: AVERAGE([[5.0, 3.0, 9.0, 4.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '3', label: 'E3\n5.5', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: AVERAGE(A3:D3); Formula Values: AVERAGE([[8.0, 4.0, 8.0, 2.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '4', label: 'A3:D3\n[[8.0, 4.0, 8.0, 2.0]]', color: '#31b0d5', title: 'Name: A3:D3<br>Alias: null<br>Value: [[8.0, 4.0, 8.0, 2.0]]<br>Type: RANGE<br>Id: 4<br>Formula Expression: Formula String: A3:D3; Formula Values: [[8.0, 4.0, 8.0, 2.0]]; Formula Ptg: [[8.0, 4.0, 8.0, 2.0]]; Ptgs: A3:D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '5', label: 'AVERAGE\n5.5', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 5.5<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: AVERAGE(A3:D3); Formula Values: AVERAGE([[8.0, 4.0, 8.0, 2.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '6', label: 'E4\n3.5', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: AVERAGE(A4:D4); Formula Values: AVERAGE([[1.0, 8.0, 0.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '7', label: 'A4:D4\n[[1.0, 8.0, 0.0, 5.0]]', color: '#31b0d5', title: 'Name: A4:D4<br>Alias: null<br>Value: [[1.0, 8.0, 0.0, 5.0]]<br>Type: RANGE<br>Id: 7<br>Formula Expression: Formula String: A4:D4; Formula Values: [[1.0, 8.0, 0.0, 5.0]]; Formula Ptg: [[1.0, 8.0, 0.0, 5.0]]; Ptgs: A4:D4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '8', label: 'AVERAGE\n3.5', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 3.5<br>Type: FUNCTION<br>Id: 8<br>Formula Expression: Formula String: AVERAGE(A4:D4); Formula Values: AVERAGE([[1.0, 8.0, 0.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '9', label: 'E5\n6.225', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: 9<br>Formula Expression: Formula String: AVERAGE(A5:D5); Formula Values: AVERAGE([[7.0, 8.0, 0.9, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '10', label: 'A5:D5\n[[7.0, 8.0, 0.9, 9.0]]', color: '#31b0d5', title: 'Name: A5:D5<br>Alias: null<br>Value: [[7.0, 8.0, 0.9, 9.0]]<br>Type: RANGE<br>Id: 10<br>Formula Expression: Formula String: A5:D5; Formula Values: [[7.0, 8.0, 0.9, 9.0]]; Formula Ptg: [[7.0, 8.0, 0.9, 9.0]]; Ptgs: A5:D5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '11', label: 'AVERAGE\n6.225', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 6.225<br>Type: FUNCTION<br>Id: 11<br>Formula Expression: Formula String: AVERAGE(A5:D5); Formula Values: AVERAGE([[7.0, 8.0, 0.9, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '12', label: 'F6\n5.25', color: '#31b0d5', title: 'Name: F6<br>Alias: null<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: 12<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '14', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 14<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '15', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 15<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '16', label: 'B2\n3.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 16<br>Formula Expression: Formula String: B2; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '17', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 17<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '18', label: 'D2\n4.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 18<br>Formula Expression: Formula String: D2; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D2 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '19', label: 'FUNCEXEC\n5.25', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.25<br>Type: FUNCTION<br>Id: 19<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '20', label: 'A7\nDEFINE', color: '#31b0d5', title: 'Name: A7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 20<br>Formula Expression: Formula String: DEFINE(E2, VALUE, D2, C2, B2, A2, VALUE); Formula Values: DEFINE(5.25, #, 4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '22', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 22<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '23', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 23<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '24', label: 'B2\n3.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 24<br>Formula Expression: Formula String: B2; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '25', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 25<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '26', label: 'D2\n4.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 26<br>Formula Expression: Formula String: D2; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D2 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '27', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 27<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '28', label: 'E2\n5.25', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: 28<br>Formula Expression: Formula String: AVERAGE(A2:D2); Formula Values: AVERAGE([[5.0, 3.0, 9.0, 4.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '29', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 29<br>Formula Expression: Formula String: DEFINE(E2, VALUE, D2, C2, B2, A2, VALUE); Formula Values: DEFINE(5.25, #, 4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '30', label: 'F7\n5.5', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: 30<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '32', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 32<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '33', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 33<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '34', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 34<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '35', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 35<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '36', label: 'D3\n2.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 36<br>Formula Expression: Formula String: D3; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: D3 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '37', label: 'FUNCEXEC\n5.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.5<br>Type: FUNCTION<br>Id: 37<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '38', label: 'A8\nDEFINE', color: '#31b0d5', title: 'Name: A8<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 38<br>Formula Expression: Formula String: DEFINE(E3, VALUE, D3, C3, B3, A3, VALUE); Formula Values: DEFINE(5.5, #, 2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '40', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 40<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '41', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 41<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '42', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 42<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '43', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 43<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '44', label: 'D3\n2.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 44<br>Formula Expression: Formula String: D3; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: D3 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '45', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 45<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '46', label: 'E3\n5.5', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: 46<br>Formula Expression: Formula String: AVERAGE(A3:D3); Formula Values: AVERAGE([[8.0, 4.0, 8.0, 2.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '47', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 47<br>Formula Expression: Formula String: DEFINE(E3, VALUE, D3, C3, B3, A3, VALUE); Formula Values: DEFINE(5.5, #, 2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '48', label: 'F8\n3.5', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: 48<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '50', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 50<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '51', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 51<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '52', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 52<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '53', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 53<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '54', label: 'D4\n5.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 54<br>Formula Expression: Formula String: D4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D4 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '55', label: 'FUNCEXEC\n3.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 3.5<br>Type: FUNCTION<br>Id: 55<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '56', label: 'A9\nDEFINE', color: '#31b0d5', title: 'Name: A9<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 56<br>Formula Expression: Formula String: DEFINE(E4, VALUE, D4, C4, B4, A4, VALUE); Formula Values: DEFINE(3.5, #, 5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '58', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 58<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '59', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 59<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '60', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 60<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '61', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 61<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '62', label: 'D4\n5.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 62<br>Formula Expression: Formula String: D4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D4 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '63', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 63<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '64', label: 'E4\n3.5', color: '#31b0d5', title: 'Name: E4<br>Alias: null<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: 64<br>Formula Expression: Formula String: AVERAGE(A4:D4); Formula Values: AVERAGE([[1.0, 8.0, 0.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '65', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 65<br>Formula Expression: Formula String: DEFINE(E4, VALUE, D4, C4, B4, A4, VALUE); Formula Values: DEFINE(3.5, #, 5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '66', label: 'F9\n6.225', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: 66<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '68', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 68<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '69', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 69<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '70', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 70<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '71', label: 'C5\n0.9', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 0.9<br>Type: CELL_WITH_VALUE<br>Id: 71<br>Formula Expression: Formula String: C5; Formula Values: 0.9; Formula Ptg: 0.9; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '72', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 72<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '73', label: 'FUNCEXEC\n6.225', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 6.225<br>Type: FUNCTION<br>Id: 73<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '74', label: 'A10\nDEFINE', color: '#31b0d5', title: 'Name: A10<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 74<br>Formula Expression: Formula String: DEFINE(E5, VALUE, D5, C5, B5, A5, VALUE); Formula Values: DEFINE(6.225, #, 9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '76', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 76<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '77', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 77<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '78', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 78<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '79', label: 'C5\n0.9', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 0.9<br>Type: CELL_WITH_VALUE<br>Id: 79<br>Formula Expression: Formula String: C5; Formula Values: 0.9; Formula Ptg: 0.9; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '80', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 80<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '81', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 81<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '82', label: 'E5\n6.225', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: 82<br>Formula Expression: Formula String: AVERAGE(A5:D5); Formula Values: AVERAGE([[7.0, 8.0, 0.9, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'},
{id: '83', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 83<br>Formula Expression: Formula String: DEFINE(E5, VALUE, D5, C5, B5, A5, VALUE); Formula Values: DEFINE(6.225, #, 9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@379614be'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'},
{from: '4', to: '5'},
{from: '5', to: '3'},
{from: '7', to: '8'},
{from: '8', to: '6'},
{from: '10', to: '11'},
{from: '11', to: '9'},
{from: '18', to: '19'},
{from: '17', to: '19'},
{from: '16', to: '19'},
{from: '15', to: '19'},
{from: '14', to: '19'},
{from: '19', to: '12'},
{from: '28', to: '29'},
{from: '27', to: '29'},
{from: '26', to: '29'},
{from: '25', to: '29'},
{from: '24', to: '29'},
{from: '23', to: '29'},
{from: '22', to: '29'},
{from: '29', to: '20'},
{from: '36', to: '37'},
{from: '35', to: '37'},
{from: '34', to: '37'},
{from: '33', to: '37'},
{from: '32', to: '37'},
{from: '37', to: '30'},
{from: '46', to: '47'},
{from: '45', to: '47'},
{from: '44', to: '47'},
{from: '43', to: '47'},
{from: '42', to: '47'},
{from: '41', to: '47'},
{from: '40', to: '47'},
{from: '47', to: '38'},
{from: '54', to: '55'},
{from: '53', to: '55'},
{from: '52', to: '55'},
{from: '51', to: '55'},
{from: '50', to: '55'},
{from: '55', to: '48'},
{from: '64', to: '65'},
{from: '63', to: '65'},
{from: '62', to: '65'},
{from: '61', to: '65'},
{from: '60', to: '65'},
{from: '59', to: '65'},
{from: '58', to: '65'},
{from: '65', to: '56'},
{from: '72', to: '73'},
{from: '71', to: '73'},
{from: '70', to: '73'},
{from: '69', to: '73'},
{from: '68', to: '73'},
{from: '73', to: '66'},
{from: '82', to: '83'},
{from: '81', to: '83'},
{from: '80', to: '83'},
{from: '79', to: '83'},
{from: '78', to: '83'},
{from: '77', to: '83'},
{from: '76', to: '83'},
{from: '83', to: '74'},
{from: '2', to: '28'},
{from: '5', to: '46'},
{from: '8', to: '64'},
{from: '11', to: '82'},
{from: '23', to: '1'},
{from: '15', to: '1'},
{from: '24', to: '1'},
{from: '16', to: '1'},
{from: '25', to: '1'},
{from: '17', to: '1'},
{from: '26', to: '1'},
{from: '18', to: '1'},
{from: '33', to: '4'},
{from: '41', to: '4'},
{from: '34', to: '4'},
{from: '42', to: '4'},
{from: '35', to: '4'},
{from: '43', to: '4'},
{from: '36', to: '4'},
{from: '44', to: '4'},
{from: '51', to: '7'},
{from: '59', to: '7'},
{from: '60', to: '7'},
{from: '52', to: '7'},
{from: '53', to: '7'},
{from: '61', to: '7'},
{from: '62', to: '7'},
{from: '54', to: '7'},
{from: '77', to: '10'},
{from: '69', to: '10'},
{from: '70', to: '10'},
{from: '78', to: '10'},
{from: '71', to: '10'},
{from: '79', to: '10'},
{from: '80', to: '10'},
{from: '72', to: '10'}
                            ]);