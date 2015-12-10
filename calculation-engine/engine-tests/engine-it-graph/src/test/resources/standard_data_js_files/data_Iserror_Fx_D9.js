var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aa1943d6-61e8-407b-a090-5468c1c7545a', label: 'SUM\n81.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 81.0<br>Type: FUNCTION<br>Id: aa1943d6-61e8-407b-a090-5468c1c7545a<br>Formula Expression: Formula String: SUM(VALUE, A1); Formula Values: SUM(76.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: '1e9062ec-3c67-40fd-9497-80a2d6ab6cec', label: 'SUM\n93.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 93.0<br>Type: FUNCTION<br>Id: 1e9062ec-3c67-40fd-9497-80a2d6ab6cec<br>Formula Expression: Formula String: SUM(SUM(VALUE, A1), C2, C1); Formula Values: SUM(SUM(76.0, 5.0), 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: '1a7ac4d7-69e5-4dbe-bb20-37328bb40196', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 1a7ac4d7-69e5-4dbe-bb20-37328bb40196<br>Formula Expression: Formula String: ISERROR(SUM(SUM(VALUE, A1), C2, C1)); Formula Values: ISERROR(SUM(SUM(76.0, 5.0), 5.0, 7.0)); Formula Ptg: 76.0, 5.0 SUM , 5.0, 7.0 SUM  ISERROR ; Ptgs: VALUE, A1 SUM , C2, C1 SUM  ISERROR  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: 'c3524a55-f897-4dfc-828f-12c0bc5ca7b5', label: 'C1\n7.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: c3524a55-f897-4dfc-828f-12c0bc5ca7b5<br>Formula Expression: Formula String: C1; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: '555c853b-99eb-4db0-b65e-7e462cd7d5fd', label: 'VALUE\n76.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 76.0<br>Type: CONSTANT_VALUE<br>Id: 555c853b-99eb-4db0-b65e-7e462cd7d5fd<br>Formula Expression: Formula String: VALUE; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: '31f2aae6-6436-40b3-b679-adabfee21e5f', label: 'C2\n5.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 31f2aae6-6436-40b3-b679-adabfee21e5f<br>Formula Expression: Formula String: C2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: '71eff9f8-4cf4-44dc-a0df-b939e663528c', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 71eff9f8-4cf4-44dc-a0df-b939e663528c<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: '0bd83379-7783-4491-b37f-d9b25da0047b', label: 'D1\n93.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 93.0<br>Type: CELL_WITH_FORMULA<br>Id: 0bd83379-7783-4491-b37f-d9b25da0047b<br>Formula Expression: Formula String: SUM(SUM(VALUE, A1), C2, C1); Formula Values: SUM(SUM(76.0, 5.0), 5.0, 7.0); Formula Ptg: 76.0, 5.0 SUM , 5.0, 7.0 SUM ; Ptgs: VALUE, A1 SUM , C2, C1 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: 'd5c7c3b0-d11a-433f-8da1-7435ef1a507c', label: 'D3\n81.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 81.0<br>Type: CELL_WITH_FORMULA<br>Id: d5c7c3b0-d11a-433f-8da1-7435ef1a507c<br>Formula Expression: Formula String: SUM(VALUE, A1); Formula Values: SUM(76.0, 5.0); Formula Ptg: 76.0, 5.0 SUM ; Ptgs: VALUE, A1 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'},
{id: '8ad6e3a7-a58d-4078-b75c-a6af3eac8a43', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 8ad6e3a7-a58d-4078-b75c-a6af3eac8a43<br>Formula Expression: Formula String: ISERROR(SUM(SUM(VALUE, A1), C2, C1)); Formula Values: ISERROR(SUM(SUM(76.0, 5.0), 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9225652'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd5c7c3b0-d11a-433f-8da1-7435ef1a507c', to: '1e9062ec-3c67-40fd-9497-80a2d6ab6cec'},
{from: '71eff9f8-4cf4-44dc-a0df-b939e663528c', to: 'aa1943d6-61e8-407b-a090-5468c1c7545a'},
{from: '31f2aae6-6436-40b3-b679-adabfee21e5f', to: '1e9062ec-3c67-40fd-9497-80a2d6ab6cec'},
{from: 'c3524a55-f897-4dfc-828f-12c0bc5ca7b5', to: '1e9062ec-3c67-40fd-9497-80a2d6ab6cec'},
{from: '8ad6e3a7-a58d-4078-b75c-a6af3eac8a43', to: '1a7ac4d7-69e5-4dbe-bb20-37328bb40196'},
{from: '555c853b-99eb-4db0-b65e-7e462cd7d5fd', to: 'aa1943d6-61e8-407b-a090-5468c1c7545a'},
{from: '1e9062ec-3c67-40fd-9497-80a2d6ab6cec', to: '0bd83379-7783-4491-b37f-d9b25da0047b'},
{from: '0bd83379-7783-4491-b37f-d9b25da0047b', to: '8ad6e3a7-a58d-4078-b75c-a6af3eac8a43'},
{from: 'aa1943d6-61e8-407b-a090-5468c1c7545a', to: 'd5c7c3b0-d11a-433f-8da1-7435ef1a507c'}
                            ]);