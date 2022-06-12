const express = require('express');
const router = express.Router();
const { checkBoletos } = require('./Lists/boletoList');
const { searchUsers, searchUsersById } = require('./Lists/userList');

router.get('/', (req, res) => {
  res.send( searchUsers() );
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = searchUsers().find(p => p.id == id);
  res.json(user)
})

router.post('/', (req, res) => {
  const user = req.body;
  user.id = searchUsers().length + 1;
  { !user.name || !user.passwd ? res.status(400).send('You need to inform the name and the password') 
  :  searchUsers().push(user), res.send(user) }
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const users = req.body;
  const index = searchUsers().findIndex(p => p.id == id);
  searchUsers()[index] = users;
  res.json(users);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = searchUsers().findIndex(p => p.id == id);
  if (checkBoletos(id, 2)) {
    res.status(400).send('You can not delete this user because he has a boleto');
  } else {
    searchUsers().splice(index, 1);
    res.json(searchUsers());
  }
})

module.exports = {
  router,
  searchUsers,
  searchUsersById
}