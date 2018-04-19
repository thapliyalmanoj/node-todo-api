//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//mongodb://host:port/database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
if(err){
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

db.collection('Todos').findOneAndUpdate({
_id: new ObjectID('5acdde4386a7aa2b7048600a')
}, {
	$set: {
		completed: true
	} 
}, {
	returnOrignal: false
}).then((result) => {
	console.log(result);
});
//db.close();
});   