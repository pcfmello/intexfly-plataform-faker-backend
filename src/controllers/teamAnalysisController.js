const express = require('express')

const router = express.Router();

router.get('/', async (req, res) => {

    return res.send({
        "overallPerformance": [
            {"name": "intexfy_gustavo", "classified": 85, "not_classified": 0},
            {"name": "intexfy_paulo", "classified": 60, "not_classified": 0},
            {"name": "intexfy_roberto", "classified": 63, "not_classified": 0},
            {"name": "intexfy_ricardo", "classified": 55, "not_classified": 0},
            {"name": "Sem consultor/vendedor", "classified": 264, "not_classified": 3}
            
        ], 
        "performanceRelevanceAccount": [
            
            {
                "employee": "intexfy_gustavo",
                "data": {
                    "labels": [
                        "not_relevant",
                        "neutral",
                        "relevant"
                    ],
                    "datasets": [{
                        "data": [130, 120, 65],
                        "backgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ],
                        "hoverBackgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ]
                    }]
                }                
            },
            {
                "employee": "intexfy_paulo",
                "data": {
                    "labels": [
                        "not_relevant",
                        "neutral",
                        "relevant"
                    ],
                    "datasets": [{
                        "data": [205, 80, 55],
                        "backgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ],
                        "hoverBackgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ]
                    }]
                }                
            }
        ],
        "performanceRelevanceContracts": [
            
            {
                "employee": "intexfy_gustavo",
                "data": {
                    "labels": [
                        "not_relevant",
                        "neutral",
                        "relevant"
                    ],
                    "datasets": [{
                        "data": [130, 120, 65],
                        "backgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ],
                        "hoverBackgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ]
                    }]
                }                
            },
            {
                "employee": "intexfy_paulo",
                "data": {
                    "labels": [
                        "not_relevant",
                        "neutral",
                        "relevant"
                    ],
                    "datasets": [{
                        "data": [205, 80, 55],
                        "backgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ],
                        "hoverBackgroundColor": [
                            "#d92550",
                            "#f7b924",
                            "#3ac47d"
                        ]
                    }]
                }                
            }
        ]
    })
})

module.exports = app => app.use('/team-analysis', router)