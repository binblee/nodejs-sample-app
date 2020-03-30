'use strict'
const express = require('express')
const port = process.env.PORT || 3000 
const app = express()

app.get('/', function(req,res){
    res.send('Hello World from Github (build with action) and ACK!\n')
})

app.listen(port)
console.log('listening on port: ' + port)
