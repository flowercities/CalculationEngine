var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'A4\n1.5707963267948966', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ACOS(A2); Formula Values: ACOS(0.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '2', label: 'ACOS\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ACOS<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ACOS(A2); Formula Values: ACOS(0.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '5', label: 'ACOS\n1.0471975511965979', color: '#f0ad4e', title: 'Name: ACOS<br>Alias: null<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ACOS(B2); Formula Values: ACOS(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '6', label: 'B5\nDEFINE', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: DEFINE(ACOS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ACOS(0.0), #, 0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '8', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 8<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '9', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '10', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 10<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '12', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: DEFINE(ACOS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ACOS(0.0), #, 0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '13', label: 'C5\n1.5707963267948966', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 13<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '15', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 15<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '17', label: 'FUNCEXEC\n1.5707963267948966', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 17<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '18', label: 'B6\nDEFINE', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 18<br>Formula Expression: Formula String: DEFINE(ACOS(B2), VALUE, B2, VALUE); Formula Values: DEFINE(ACOS(0.5), #, 0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '20', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 20<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '21', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: 21<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '22', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 22<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '23', label: 'B4\n1.0471975511965979', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: 23<br>Formula Expression: Formula String: ACOS(B2); Formula Values: ACOS(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '24', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 24<br>Formula Expression: Formula String: DEFINE(ACOS(B2), VALUE, B2, VALUE); Formula Values: DEFINE(ACOS(0.5), #, 0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '25', label: 'C6\n1.0471975511965979', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: 25<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '27', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 27<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'},
{id: '29', label: 'FUNCEXEC\n1.0471975511965979', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 29<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d80e1b3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '23', to: '24'},
{from: '10', to: '12'},
{from: '15', to: '17'},
{from: '22', to: '24'},
{from: '27', to: '29'},
{from: '9', to: '12'},
{from: '21', to: '24'},
{from: '8', to: '12'},
{from: '20', to: '24'},
{from: '21', to: '29'},
{from: '9', to: '17'},
{from: '0', to: '12'},
{from: '21', to: '5'},
{from: '5', to: '23'},
{from: '9', to: '2'},
{from: '12', to: '6'},
{from: '24', to: '18'},
{from: '17', to: '13'},
{from: '29', to: '25'},
{from: '2', to: '0'}
                            ]);