var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D1\n#NAME?', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(#NAME?, 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '1', label: 'C1\n7.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: C1; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '2', label: 'C2\n5.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: C2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '3', label: 'D3\n#NAME?', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: 3<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: null; Ptgs: null Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '4', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 4<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '5', label: 'SUM\n#NAME?', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: #NAME?<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(#NAME?, 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '6', label: 'E1\n#DIV/0!', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '7', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 7<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '8', label: 'B7\n', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 8<br>Formula Expression: Formula String: B7; Formula Values: ; Formula Ptg: ; Ptgs: B7 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '9', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 9<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '10', label: 'D2\n#REF!', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 10<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '11', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 11<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '12', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 12<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '13', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: #REF!<br>Type: FUNCTION<br>Id: 13<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '14', label: 'E2\n20.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 14<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[2.0], [6.0], [5.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '15', label: 'A2:A5\n[[2.0], [6.0], [5.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[2.0], [6.0], [5.0], [7.0]]<br>Type: RANGE<br>Id: 15<br>Formula Expression: Formula String: A2:A5; Formula Values: [[2.0], [6.0], [5.0], [7.0]]; Formula Ptg: [[2.0], [6.0], [5.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '16', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 16<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[2.0], [6.0], [5.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '17', label: 'E3\n#VALUE!', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: 17<br>Formula Expression: Formula String: A1:D11; Formula Values: [[5.0, 67.0, 7.0, #NAME?], [2.0, 6.0, 5.0, #REF!], [6.0, 7.0, 989.0, #NAME?], [5.0, 8.0, 52.0, ], [7.0, 91.0, 7.0, ], [, , , FALSE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , FALSE]]; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '18', label: 'A1:D11\n...', color: '#31b0d5', title: 'Name: A1:D11<br>Alias: null<br>Value: [[5.0, 67.0, 7.0, #NAME?], [2.0, 6.0, 5.0, #REF!], [6.0, 7.0, 989.0, #NAME?], [5.0, 8.0, 52.0, ], [7.0, 91.0, 7.0, ], [, , , FALSE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , FALSE]]<br>Type: RANGE<br>Id: 18<br>Formula Expression: Formula String: A1:D11; Formula Values: [[5.0, 67.0, 7.0, #NAME?], [2.0, 6.0, 5.0, #REF!], [6.0, 7.0, 989.0, #NAME?], [5.0, 8.0, 52.0, ], [7.0, 91.0, 7.0, ], [, , , FALSE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , FALSE]]; Formula Ptg: [[5.0, 67.0, 7.0, #NAME?], [2.0, 6.0, 5.0, #REF!], [6.0, 7.0, 989.0, #NAME?], [5.0, 8.0, 52.0, ], [7.0, 91.0, 7.0, ], [, , , FALSE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , FALSE]]; Ptgs: A1:D11 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '19', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 19<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '20', label: 'C3\n989.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 989.0<br>Type: CELL_WITH_VALUE<br>Id: 20<br>Formula Expression: Formula String: C3; Formula Values: 989.0; Formula Ptg: 989.0; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '21', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 21<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '22', label: 'D7\nTRUE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 22<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '23', label: 'D2\n#REF!', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 23<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '24', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 24<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '25', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 25<br>Formula Expression: Formula String: ISERROR(VALUE); Formula Values: ISERROR(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '26', label: 'D3\n#NAME?', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: 26<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '27', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 27<br>Formula Expression: Formula String: ISERROR(VALUE); Formula Values: ISERROR(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '28', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 28<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(#NAME?, 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '29', label: 'D1\n#NAME?', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 29<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(#NAME?, 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '30', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 30<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(#NAME?, 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '31', label: 'D10\nTRUE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 31<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '32', label: 'E1\n#DIV/0!', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 32<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '33', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 33<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '34', label: 'D11\nFALSE', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 34<br>Formula Expression: Formula String: ISERROR(SUM(A2:A5)); Formula Values: ISERROR(SUM([[2.0], [6.0], [5.0], [7.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '35', label: 'E2\n20.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 35<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM([[2.0], [6.0], [5.0], [7.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '36', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 36<br>Formula Expression: Formula String: ISERROR(SUM(A2:A5)); Formula Values: ISERROR(SUM([[2.0], [6.0], [5.0], [7.0]])); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '37', label: 'D12\nTRUE', color: '#31b0d5', title: 'Name: D12<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 37<br>Formula Expression: Formula String: ISERROR(A1:D11); Formula Values: ISERROR([[5.0, 67.0, 7.0, #NAME?], [2.0, 6.0, 5.0, #REF!], [6.0, 7.0, 989.0, #NAME?], [5.0, 8.0, 52.0, ], [7.0, 91.0, 7.0, ], [, , , FALSE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , FALSE]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '38', label: 'E3\n#VALUE!', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: 38<br>Formula Expression: Formula String: A1:D11; Formula Values: [[5.0, 67.0, 7.0, #NAME?], [2.0, 6.0, 5.0, #REF!], [6.0, 7.0, 989.0, #NAME?], [5.0, 8.0, 52.0, ], [7.0, 91.0, 7.0, ], [, , , FALSE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , FALSE]]; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'},
{id: '39', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 39<br>Formula Expression: Formula String: ISERROR(A1:D11); Formula Values: ISERROR([[5.0, 67.0, 7.0, #NAME?], [2.0, 6.0, 5.0, #REF!], [6.0, 7.0, 989.0, #NAME?], [5.0, 8.0, 52.0, ], [7.0, 91.0, 7.0, ], [, , , FALSE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , TRUE], [, , , FALSE]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@290222c1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '18', to: '17'},
{from: '26', to: '27'},
{from: '38', to: '39'},
{from: '2', to: '5'},
{from: '10', to: '18'},
{from: '2', to: '18'},
{from: '31', to: '18'},
{from: '18', to: '38'},
{from: '23', to: '18'},
{from: '27', to: '25'},
{from: '39', to: '37'},
{from: '19', to: '18'},
{from: '15', to: '16'},
{from: '23', to: '24'},
{from: '35', to: '36'},
{from: '3', to: '5'},
{from: '7', to: '9'},
{from: '11', to: '13'},
{from: '7', to: '18'},
{from: '3', to: '18'},
{from: '28', to: '18'},
{from: '16', to: '14'},
{from: '24', to: '22'},
{from: '36', to: '34'},
{from: '20', to: '18'},
{from: '4', to: '3'},
{from: '8', to: '9'},
{from: '12', to: '13'},
{from: '20', to: '21'},
{from: '32', to: '33'},
{from: '12', to: '18'},
{from: '8', to: '18'},
{from: '0', to: '18'},
{from: '16', to: '35'},
{from: '29', to: '18'},
{from: '4', to: '26'},
{from: '25', to: '18'},
{from: '5', to: '0'},
{from: '9', to: '6'},
{from: '13', to: '10'},
{from: '21', to: '19'},
{from: '33', to: '31'},
{from: '29', to: '30'},
{from: '1', to: '5'},
{from: '13', to: '23'},
{from: '34', to: '18'},
{from: '1', to: '18'},
{from: '9', to: '32'},
{from: '26', to: '18'},
{from: '5', to: '29'},
{from: '22', to: '18'},
{from: '30', to: '28'}
                            ]);