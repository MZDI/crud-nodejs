var express = require('express');
var log = require('morgan')('dev');
var bodyparser = require('body-parser');


const properties = require('./config/properties')
const db = require('./config/database')
const herosRoutes = require('./heros/heros.routes')

const app = express()

const bodyParserJson = bodyparser.json()
var badoParserURLencoded = bodyparser.urlencoded({extended : true})

db()

var router = express.Router();

app.use(log);
app.use(bodyParserJson);
app.use(badoParserURLencoded);

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

 app.use('/api',router);
 herosRoutes(router);

app.listen(5000, ()=>console.log('server is listening on port 5000...'))