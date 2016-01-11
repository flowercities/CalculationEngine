var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '120d9cd3-2d33-5429-7239-cdacc12ddcfd', label: 'A3\n55.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 55.0<br>Type: CELL_WITH_FORMULA<br>Id: 120d9cd3-2d33-5429-7239-cdacc12ddcfd<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '8cd0662f-5ca7-14c5-8b8b-97b5ce6eb507', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 8cd0662f-5ca7-14c5-8b8b-97b5ce6eb507<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: 'f6e39f96-53a3-e363-bc62-5bc9c830c7c7', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 50.0<br>Type: OPERATOR<br>Id: f6e39f96-53a3-e363-bc62-5bc9c830c7c7<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '7fe35144-cc4d-6eb3-e6a3-968901791ac3', label: '+\n#REF!', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: #REF!<br>Type: OPERATOR<br>Id: 7fe35144-cc4d-6eb3-e6a3-968901791ac3<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '9b1208e6-087e-cf64-6114-68785c2779ed', label: 'C3\n10.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: 9b1208e6-087e-cf64-6114-68785c2779ed<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '68c21f98-47bc-d4fb-768e-08cd091e3b96', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 68c21f98-47bc-d4fb-768e-08cd091e3b96<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '0455b6b4-063e-7c15-1839-89d918f4a71f', label: 'B3\n505.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 505.0<br>Type: CELL_WITH_FORMULA<br>Id: 0455b6b4-063e-7c15-1839-89d918f4a71f<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '28c6965c-aca4-5b5d-ce1a-9822570c6589', label: 'Sheet2!$B$1\n#REF!', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 28c6965c-aca4-5b5d-ce1a-9822570c6589<br>Formula Expression: Formula String: Sheet2!B1; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '4302b2cd-59e1-b0c1-cd19-7a889f9b9ef5', label: '+\n505.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 505.0<br>Type: OPERATOR<br>Id: 4302b2cd-59e1-b0c1-cd19-7a889f9b9ef5<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '61f22153-0f06-1ebe-1e2b-43666e75e722', label: 'B1\n200.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 200.0<br>Type: CELL_WITH_VALUE<br>Id: 61f22153-0f06-1ebe-1e2b-43666e75e722<br>Formula Expression: Formula String: B1; Formula Values: 200.0; Formula Ptg: 200.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '878ecbbe-babe-62e5-b98c-7fb778924be0', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 878ecbbe-babe-62e5-b98c-7fb778924be0<br>Formula Expression: Formula String: C1 + C2; Formula Values: 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: 'fefbf137-7732-b5ff-2d2f-edbbea120775', label: 'A4\n#REF!', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: fefbf137-7732-b5ff-2d2f-edbbea120775<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: 'f483c88c-3324-40a0-6856-ff0e885eda79', label: '+\n55.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 55.0<br>Type: OPERATOR<br>Id: f483c88c-3324-40a0-6856-ff0e885eda79<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: 'a2f3bc88-f333-29fa-6b48-97bf694475ce', label: '+\n10.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 10.0<br>Type: OPERATOR<br>Id: a2f3bc88-f333-29fa-6b48-97bf694475ce<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '90014d28-147d-4ee2-df04-7cb48c0eb4c4', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 90014d28-147d-4ee2-df04-7cb48c0eb4c4<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '927305a4-6dac-d185-9a9a-083250652680', label: '+\n500.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 500.0<br>Type: OPERATOR<br>Id: 927305a4-6dac-d185-9a9a-083250652680<br>Formula Expression: Formula String: B1 + B2; Formula Values: 200.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: 'b6aa93f5-923f-8a09-f5f1-68c1fa665f64', label: 'B2\n300.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: b6aa93f5-923f-8a09-f5f1-68c1fa665f64<br>Formula Expression: Formula String: B2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '756dcef6-6e91-f28e-fe8b-707af5d9255e', label: 'C2\n', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 756dcef6-6e91-f28e-fe8b-707af5d9255e<br>Formula Expression: Formula String: C2; Formula Values: ; Formula Ptg: ; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'},
{id: '4bf22c4f-de0c-48fe-a3c0-c5b3cf3ecad8', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: 4bf22c4f-de0c-48fe-a3c0-c5b3cf3ecad8<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e171cd7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4302b2cd-59e1-b0c1-cd19-7a889f9b9ef5', to: '0455b6b4-063e-7c15-1839-89d918f4a71f'},
{from: '7fe35144-cc4d-6eb3-e6a3-968901791ac3', to: 'fefbf137-7732-b5ff-2d2f-edbbea120775'},
{from: '90014d28-147d-4ee2-df04-7cb48c0eb4c4', to: 'f6e39f96-53a3-e363-bc62-5bc9c830c7c7'},
{from: '8cd0662f-5ca7-14c5-8b8b-97b5ce6eb507', to: '878ecbbe-babe-62e5-b98c-7fb778924be0'},
{from: '878ecbbe-babe-62e5-b98c-7fb778924be0', to: 'a2f3bc88-f333-29fa-6b48-97bf694475ce'},
{from: 'f483c88c-3324-40a0-6856-ff0e885eda79', to: '120d9cd3-2d33-5429-7239-cdacc12ddcfd'},
{from: 'a2f3bc88-f333-29fa-6b48-97bf694475ce', to: '9b1208e6-087e-cf64-6114-68785c2779ed'},
{from: '927305a4-6dac-d185-9a9a-083250652680', to: '4302b2cd-59e1-b0c1-cd19-7a889f9b9ef5'},
{from: '8cd0662f-5ca7-14c5-8b8b-97b5ce6eb507', to: '4302b2cd-59e1-b0c1-cd19-7a889f9b9ef5'},
{from: '4bf22c4f-de0c-48fe-a3c0-c5b3cf3ecad8', to: '7fe35144-cc4d-6eb3-e6a3-968901791ac3'},
{from: '61f22153-0f06-1ebe-1e2b-43666e75e722', to: '927305a4-6dac-d185-9a9a-083250652680'},
{from: 'b6aa93f5-923f-8a09-f5f1-68c1fa665f64', to: '927305a4-6dac-d185-9a9a-083250652680'},
{from: '68c21f98-47bc-d4fb-768e-08cd091e3b96', to: 'f6e39f96-53a3-e363-bc62-5bc9c830c7c7'},
{from: '28c6965c-aca4-5b5d-ce1a-9822570c6589', to: '7fe35144-cc4d-6eb3-e6a3-968901791ac3'},
{from: '756dcef6-6e91-f28e-fe8b-707af5d9255e', to: '878ecbbe-babe-62e5-b98c-7fb778924be0'},
{from: '8cd0662f-5ca7-14c5-8b8b-97b5ce6eb507', to: '4bf22c4f-de0c-48fe-a3c0-c5b3cf3ecad8'},
{from: '90014d28-147d-4ee2-df04-7cb48c0eb4c4', to: '4bf22c4f-de0c-48fe-a3c0-c5b3cf3ecad8'},
{from: '8cd0662f-5ca7-14c5-8b8b-97b5ce6eb507', to: 'f483c88c-3324-40a0-6856-ff0e885eda79'},
{from: 'f6e39f96-53a3-e363-bc62-5bc9c830c7c7', to: 'f483c88c-3324-40a0-6856-ff0e885eda79'},
{from: '8cd0662f-5ca7-14c5-8b8b-97b5ce6eb507', to: 'a2f3bc88-f333-29fa-6b48-97bf694475ce'}
                            ]);