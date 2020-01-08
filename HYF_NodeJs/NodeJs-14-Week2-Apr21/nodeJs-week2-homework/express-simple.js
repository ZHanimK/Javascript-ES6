const express = require('express')
const lodash = require('lodash')
const app = express()
const bodyParser = require('body-parser')
const {users,createUser, updateUser, getUserById, deleteUser,} = require('./models/user.js')
const port = 3000


app.use(bodyParser.json());

app.get('/users', (req, res) => {
  res.send(users)
});

app.get('/users/:id', (req, res) => {
  const getres = getUserById(req.params);
  if(getres === 404){
    res.status(getres).send('it is not correct');
  }else{
    res.send(getres);
  }  
});

app.post('/users', (req, res) => {
  const users = createUser(req.body)
  res.send(users)
});


app.put('/users/:id', (req, res) => {
  const users = updateUser(req.params.id, req.body)
  if(result === 403)
  {
    res.status(403).send("this mail already is created!!")
  }
  else{
    res.send(users)
  }
});

app.delete('/users/:id', (req, res) => {
  const deleteR = deleteUser(req.params.id);
  if(delresult === 404){
    res.status(deleteR).send("it is not correct");
  }else{
    res.send(deleteR);
  }  
});

app.listen(port, () => console.log(`Server started on port ${port}!`))