var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');
var {ObjectID} = require('mongodb');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

var todo = new Todo({
	text: req.body.text
});

todo.save().then((doc) => {
res.send(doc);
}, (e) => {
res.status(400). send(e);
});

});

app.get('/todos',(req, res) => {
	Todo.find().then( (todos) =>{
      res.send({todos});
	}, (e) =>{
      res.status(400).send(e);
	})
});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
var id = req.params.id;
//valid id isValid
if(!ObjectID.isValid(id) ){
	 //404 -send back empty send
	res.status(404).send();
}
 //findById
 Todo.findById(id).then( (todo) =>{
	if(!todo){
	//if no todo - send back 404 with empty body
		res.status(404).send();
	}
	//success //if todo - send it back
	res.send({todo});
 }).catch( (e) => {
 	//error//400 - and send empty body back
 		res.status(400).send();
 });
   
});

app.listen(3000, () => {
console.log('started on port 3000');
});

module.exports = {app}; 