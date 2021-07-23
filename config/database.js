const mongoose = require('mongoose')
const chalk = require('chalk')

const dburl = require('./properties').DB

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

module.exports  = function(){
    mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connection.on('connected', function(){
        console.log(connected("Mongoose default connection is open to ", dburl))
    })

    mongoose.connection.on('error', (err)=>{
        console.log(error("Mongoose default connection has occured "+err+" error"))
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log(disconnected("Mongoose default connection is disconnected"))
    })

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        })
    })
}