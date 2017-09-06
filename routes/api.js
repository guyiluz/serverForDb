var express =require('express')
var router = express.Router()


var q = require('../models/q.js')




q.methods(['get', 'post'])
q.register(router,'/')

module.exports=router
