var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '64', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 64<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@10163d6'},
{id: '62', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 62<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@10163d6'},
{id: '63', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 63<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@10163d6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '63', to: '64'},
{from: '64', to: '62'}
                            ]);