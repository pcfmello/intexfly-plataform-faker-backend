const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/accountAnalysisController')(app)
require('./controllers/accountAnalysisByRelevanceController')(app)
require('./controllers/teamAnalysisController')(app)

app.listen(process.env.PORT || 3005)