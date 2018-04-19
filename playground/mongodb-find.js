//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//mongodb://host:port/database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
if(err){
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').find({
// 	_id: new ObjectID('5ace3ff115577b272c2626e7')
// }).toArray().then( (docs) => {
// 	console.log('Todos');
// 	console.log(JSON.stringify(docs, undefined, 2));
// }, (err) =>{
// console.log('Unable to featch todos', err);
// });

// db.collection('Todos').find().count().then( (count) => {
// 	console.log(`Todos count: ${count}`);
// }, (err) =>{
// console.log('Unable to featch count', err);
// });
db.collection('Users').find({name: 'Manoj thapliyal'}).toArray().then((docs)=>{
console.log(JSON.stringify(docs, undefined, 2));
});



//db.close();
});  