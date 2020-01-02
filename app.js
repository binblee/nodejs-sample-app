'use strict'
const express = require('express')
const port = process.env.PORT || 3000 
const app = express()

app.get('/', function(req,res){
    res.send('Hello container!\n')
})

app.listen(port)
console.log('listening on port: ' + port)
