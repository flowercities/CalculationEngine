var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '16', label: 'C6\n1.0471975511965979', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: 16<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@368f2016'},
{id: '18', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 18<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@368f2016'},
{id: '19', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: 19<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@368f2016'},
{id: '20', label: 'FUNCEXEC\n1.0471975511965979', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 20<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@368f2016'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '19', to: '20'},
{from: '18', to: '20'},
{from: '20', to: '16'}
                            ]);