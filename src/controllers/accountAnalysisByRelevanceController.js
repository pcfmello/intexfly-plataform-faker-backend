const express = require('express')

const router = express.Router();

router.get('/', async (req, res) => {

    return res.send({

        "chartData": [
            {"name": "14/01/2020", "good": 10, "regular": 20, "bad": 30},
            {"name": "15/02/2020", "good": 30, "regular": 15, "bad": 10},
            {"name": "13/03/2020", "good": 45, "regular": 25, "bad": 5},
            {"name": "17/04/2020", "good": 45, "regular": 15, "bad": 5},
            {"name": "15/05/2020", "good": 70, "regular": 10, "bad": 5},
            {"name": "16/06/2020", "good": 78, "regular": 15, "bad": 0},
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

        "employeeRelevance": {
            "labels": ["1.000 - 10.000", "250 - 500", "500 - 1000"],
            "datasets": [
                {
                    "label": "not_relevant",
                    "backgroundColor": ["#d92550", "#d92550", "#d92550"],
                    "data": [20, 7, 10]
                },
                {
                    "label": "neutral",
                    "backgroundColor": ["#f7b924", "#f7b924", "#f7b924"],
                    "data": [17, 3, 16]
                },
                {
                    "label": "relevant",
                    "backgroundColor": ["#3ac47d", "#3ac47d", "#3ac47d"],
                    "data": [2, 1, 1]
                }                
            ],
            "options": {
                "showLines": true
            }
        },

        "activityYearsRelevance": [
            {"name": "51-100", "not_relevant": 5, "neutral": 13, "relevant": 1},
            {"name": "11-20", "not_relevant": 7, "neutral": 5, "relevant": 1},
            {"name": "21-30", "not_relevant": 10, "neutral": 7, "relevant": 0},
            {"name": "31-40", "not_relevant": 6, "neutral": 7, "relevant": 1},
            {"name": "41-50", "not_relevant": 7, "neutral": 3, "relevant": 0},
            {"name": "5-10", "not_relevant": 2, "neutral": 1, "relevant": 1}
        ],

        "cnaeSegmentRelevance": {
            "labels": ["VAREJO, REP...", "INFORMAÇÃO E...", "SAÚDE HUMAN...", "ATIVIDADES FIN...", "INDÚSTRIAS DE..."],
            "datasets": [
                {
                    "label": "not_relevant",
                    "backgroundColor": ["#d92550", "#d92550", "#d92550", "#d92550"],
                    "data": [10, 18, 3, 5]
                },
                {
                    "label": "neutral",
                    "backgroundColor": ["#f7b924", "#f7b924", "#f7b924", "#f7b924"],
                    "data": [9, 8, 13, 6]
                },
                {
                    "label": "relevant",
                    "backgroundColor": ["#3ac47d", "#3ac47d", "#3ac47d", "#3ac47d"],
                    "data": [2, 1, 0, 1]
                }
            ]
        },

        "locations": {
            "latitude": -27.59598,
            "longitude": -48.60266
        },

        "shareCapitalRelevance": {
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

        "accountLegalClassificationRelevance": {
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

        "companySizeRelevance": {
            "labels": ["Demais"],
            "datasets": [
                {
                    "label": "not_relevant",
                    "backgroundColor": ["#d92550"],
                    "data": [37]
                },
                {
                    "label": "neutral",
                    "backgroundColor": ["#f7b924"],
                    "data": [36]
                },
                {
                    "label": "relevant",
                    "backgroundColor": ["#3ac47d"],
                    "data": [2]
                }
            ]
        },

        "wordsInName": [
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
        
        "biggestPositions": [
            { "value": "Administrador", "count": 10 },
            { "value": "CIO", "count": 20 },
            { "value": "Coordenador de marketing", "count": 15 },
            { "value": "CTO", "count": 10 },
            { "value": "Diretor de Relações Institucionais", "count": 17 },
            { "value": "Diretor de TI", "count": 15 },
            { "value": "Diretoria de Marketing", "count": 10 },
            { "value": "Ecommerce", "count": 10 },
            { "value": "Gerente de e-commerce", "count": 15 },
            { "value": "Gerente de E-commerce", "count": 10 },
            { "value": "Gerente de Logistica", "count": 10 },
            { "value": "Gerente de Marketing", "count": 17 },
            { "value": "Gerente de Projetos", "count": 10 },
            { "value": "Gerente Jurídico e de Relações Insti...", "count": 10 },
            { "value": "Public Affairs Manager", "count": 10 },
            { "value": "Relações Institucionais", "count": 15 },
            { "value": "Sócio-Administrador", "count": 20 },
            { "value": "Titular Pessoa Física Residente Ou D...", "count": 10 }
        ],
    })
})

module.exports = app => app.use('/account-analysis-by-relevance', router)