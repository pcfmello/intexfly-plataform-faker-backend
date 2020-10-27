const express = require('express');

const XLSX = require('xlsx');
const workbook = XLSX.readFile('public/lista_para_plataforma.xlsx');
const sheet_name_list = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

const router = express.Router();

router.get('/', async (req, res) => {

    return res.send({
        "deliveryDashboard": [
            {"name": "14/01/2020", "good": 50, "regular": 20, "bad": 30},
            {"name": "15/02/2020", "good": 75, "regular": 15, "bad": 10},
            {"name": "13/03/2020", "good": 70, "regular": 25, "bad": 5},
            {"name": "17/04/2020", "good": 80, "regular": 15, "bad": 5},
            {"name": "15/05/2020", "good": 85, "regular": 10, "bad": 5},
            {"name": "16/06/2020", "good": 85, "regular": 15, "bad": 0},
            {"name": "13/07/2020", "good": 90, "regular": 10, "bad": 0},
            {"name": "11/08/2020", "good": 95, "regular": 5, "bad": 0}
        ],
        "deliveryAnalysis": [
            {"id": 9, "name": "Nome da lista que será informada", "date": "15/07/2020", "accounts": 100, "positive": 50, "negative": 50},
            {"id": 8, "name": "Nome da outra lista", "date": "15/06/2020", "accounts": 30, "positive": 75, "negative": 25},
            {"id": 7, "name": "Esta é a lista mais antiga", "date": "15/05/2020", "accounts": 12, "positive": 38, "negative": 62},
            {"id": 6, "name": "Nome da lista que será informada", "date": "15/07/2020", "accounts": 100, "positive": 50, "negative": 50},
            {"id": 5, "name": "Nome da outra lista", "date": "15/06/2020", "accounts": 30, "positive": 75, "negative": 25},
            {"id": 4, "name": "Esta é a lista mais antiga", "date": "15/05/2020", "accounts": 12, "positive": 38, "negative": 62},
            {"id": 3, "name": "Nome da lista que será informada", "date": "15/07/2020", "accounts": 100, "positive": 50, "negative": 50},
            {"id": 2, "name": "Nome da outra lista", "date": "15/06/2020", "accounts": 30, "positive": 75, "negative": 25},
            {"id": 1, "name": "Esta é a lista mais antiga", "date": "15/05/2020", "accounts": 12, "positive": 38, "negative": 62}        
        ],
        "anosDeAtividade": {
            "labels": [
                "5-10%",
                "11-20%",
                "21-30%",
                "31-40%",
                "41-50%",
                "51-100%"
            ],
            "datasets": [{
                "data": [
                    7.04, 
                    24.25, 
                    23.25,
                    14.34,
                    14.09,
                    16.46
                ],
                "backgroundColor": [
                    "#33ae81",
                    "#4a8ddc",
                    "#4c5d8a",
                    "#f3c911",
                    "#dc5b57",
                    "#95c8f0"
    
                ]
            }]
        },

        "segmentoDosCnaes": {
            "option": {
                "chart": {
                    "id": "apexchart-example-3"
                },
                "dataLabels": {
                    "enabled": false
                },
                "plotOptions": {
                    "bar": {
                        "horizontal": true
                    }
                },
                "xaxis": {
                    "categories": [
                        "COMÉRCIO, REPAR... ",
                        "INDUSTRIAS DE TR...", 
                        "INFORMAÇÃO E C...", 
                        "VAREJO",
                        "ATIVIDADES FINA...", 
                        "SAÚDE HUMANA ...", 
                        "ATIVIDADES ADMI...",
                        "CONSTRUÇÃO",
                        "ATIVIDADES PROFI...",
                        "AGRICULTURA, PE...",
                        "ELETRICIDADE E G...",
                        "TRANSPORTE, AR..."                        
                    ]
                }
            },            
            "series": [{
                "data": [
                    26.68, 
                    17.52, 
                    17.02, 
                    15.27, 
                    9.73, 
                    7.86, 
                    4, 
                    3.75, 
                    3, 
                    2.5, 
                    2, 
                    1
                ]
            }]
        },

        "locations": {
            "latitude": -27.59598,
            "longitude": -48.60266
        },

        "porteDasEmpresas": {
            "labels": ["too_much", "small", "micro_enterprise"],
            "datasets": [
                {
                    "label": [],
                    "backgroundColor": ["#4a8ddc", "#e47b78", "#54b192"],
                    "data": [35, 45, 20]
                }
            ]
        },

        "jointStock": {
            "labels": ["too_much", "small", "micro_enterprise"],
            "datasets": [
                {
                    "label": [],
                    "backgroundColor": ["#4a8ddc", "#e47b78", "#54b192"],
                    "data": [55, 27, 18]
                }
            ]
        },

        "numeroDeFuncionarios": {
            "labels": [
                "0-1",
                "10-20",
                "50-100",
                "100-250",
                "250-50",
                "500-1000",
                "1000-10.000"
            ],
            "datasets": [{
                "data": [
                    19, 
                    0.19, 
                    6.92,
                    30.42,
                    19.58,
                    16.77,
                    25.56
                ],
                "backgroundColor": [
                    "#f3c911",
                    "#dd915f",
                    "#6ea4e3",
                    "#dc5b57",
                    "#9a64a0",
                    "#f3c911",
                    "#dc5b57"
    
                ]
            }]
        },

        "palavrasNoNomeFantasia": [
            { "value": "cargo", "count": 15 },
            { "value": "responsável", "count": 10 },
            { "value": "departamento", "count": 20 },
            { "value": "relevância", "count": 12 },
            { "value": "varejo", "count": 17 },
            { "value": "segmento", "count": 15 },
            { "value": "porte", "count": 10 },
            { "value": "numero", "count": 20 },
            { "value": "site", "count": 12 },
            { "value": "lead", "count": 17 },
            { "value": "prospecção", "count": 15 },
            { "value": "qualificar", "count": 10 },
            { "value": "informação", "count": 20 },
            { "value": "conta", "count": 12 },
            { "value": "ecommerce", "count": 17 },
            { "value": "funcionario", "count": 15 },
            { "value": "administracao", "count": 10 },
            { "value": "cio", "count": 20 },
            { "value": "marketing", "count": 12 },
            { "value": "instituição", "count": 15 },
            { "value": "cto", "count": 10 },
            { "value": "ti", "count": 20 },
            { "value": "gerente", "count": 12 },
            { "value": "logistica", "count": 17 },
            { "value": "projetos", "count": 15 },
            { "value": "juridico", "count": 10 }
        ],

        "capitalSocial": [],

        "justificationsForAccounts": [
            { "value": "100 funcionários", "count": 10, "color": "lightgrey" },
            { "value": "É ecommerce", "count": 20, "color": "green" },
            { "value": "Conta de interesse...", "count": 10, "color": "rgb(255, 193, 7)" },
            { "value": "Conta de interesse...", "count": 15, "color": "rgb(255, 193, 7)" },
            { "value": "Informações insufici...", "count": 13, "color": "rgb(255, 193, 7)" },
            { "value": "Já prospectamos", "count": 10, "color": "rgb(255, 193, 7)" },
            { "value": "Lead nada qualificad...", "count": 10, "color": "red" },
            { "value": "Não tem site", "count": 10, "color": "rgb(255, 193, 7)" },
            { "value": "Número é corresponde...", "count": 10, "color": "rgb(99, 194, 222)" },
            { "value": "Porte apropriado", "count": 10, "color": "lightgrey" },
            { "value": "Segmento apropriado", "count": 17, "color": "grelightgreyy" },
            { "value": "Segmento inapropriado", "count": 17, "color": "lightgrey" },
            { "value": "Varejo", "count": 10, "color": "green" }
        ],

        "justificationsForContacts": [
            { "value": "Número é correspondente a inf...", "count": 15, "color": "rgb(99, 194, 222)" },
            { "value": "Cargo não relevante", "count": 10, "color": "rgb(248, 108, 107)" },
            { "value": "Cargo ou departamento relevante", "count": 20, "color": "rgb(99, 194, 222)" },
            { "value": "Não é o responsável pela cont...", "count": 12, "color": "rgb(248, 108, 107)" },
            { "value": "Cargo relevante", "count": 17, "color": "lightgrey" }
        ],

        "tagsDistribuition": [
            { "value": "cargo", "count": 15 },
            { "value": "responsável", "count": 10 },
            { "value": "departamento", "count": 20 },
            { "value": "relevância", "count": 12 },
            { "value": "varejo", "count": 17 },
            { "value": "segmento", "count": 15 },
            { "value": "porte", "count": 10 },
            { "value": "numero", "count": 20 },
            { "value": "site", "count": 12 },
            { "value": "lead", "count": 17 },
            { "value": "prospecção", "count": 15 },
            { "value": "qualificar", "count": 10 },
            { "value": "informação", "count": 20 },
            { "value": "conta", "count": 12 },
            { "value": "ecommerce", "count": 17 },
            { "value": "funcionario", "count": 15 },
            { "value": "administracao", "count": 10 },
            { "value": "cio", "count": 20 },
            { "value": "marketing", "count": 12 },
            { "value": "instituição", "count": 15 },
            { "value": "cto", "count": 10 },
            { "value": "ti", "count": 20 },
            { "value": "gerente", "count": 12 },
            { "value": "logistica", "count": 17 },
            { "value": "projetos", "count": 15 },
            { "value": "juridico", "count": 10 }
          ]
    })
});

router.get('/getMapData', (req, res) => {
    const locals = xlData.map(data => ({name: data.dsc_nome, position: [parseFloat(data.dsc_latitude), parseFloat(data.dsc_longitude)] }));

    res.send(locals);
});

module.exports = app => app.use('/account-analysis', router)