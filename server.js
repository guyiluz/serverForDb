const express =require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

var port = process.env.PORT || 8080;
var uri = "mongodb://guyIluz:juaua123@cluster0-shard-00-00-vtrwd.mongodb.net:27017,cluster0-shard-00-01-vtrwd.mongodb.net:27017,cluster0-shard-00-02-vtrwd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"


mongoose.connect(uri)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api',require('./routes/api'))
app.get('/',(req,res)=>{

    res.send('please use the /api')
})




app.listen(port)
console.log("live")
