var  restful = require('node-restful')
var mongoose =restful.mongoose;

var qSchem = new  mongoose.Schema({
    category:String,
    text:String,
    aouther:String
    

})



module.exports = restful.model('q',qSchem)