var MongoClient = require('mongodb').MongoClient;
var cc = (c)=>{
    console.log(c)
}

var uri = "mongodb://guyIluz:juaua123@cluster0-shard-00-00-vtrwd.mongodb.net:27017,cluster0-shard-00-01-vtrwd.mongodb.net:27017,cluster0-shard-00-02-vtrwd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

MongoClient.connect(uri, function(err, db) {
     
    db.collection('Persons', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
    
// db.createCollection('test', {w:1}, function(err, collection) {});
});

