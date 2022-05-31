const express = require('express');
const router = express.Router();

const usersList = [
  {
    'id': 1,
    'name': 'User 1',
    'passwd': '123',
  },

  {
    'id': 2,
    'name': 'User 2',
    'passwd': '312',
  },

  {
    'id': 3,
    'name': 'User 3',
    'passwd': '456',
  },

];

function searchUsers(){
  return usersList;
}

function searchUsersById(id){
  return usersList[id];
}

router.get('/', (req, res) => {
  res.send( searchUsers() );
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = usersList.find(p => p.id == id);
  res.json(user)
})

router.post('/', (req, res) => {
  const user = req.body;
  user.id = usersList.length + 1;
  { !user.name || !user.passwd ? res.status(400).send('You need to inform the name and the password') 
  :  usersList.push(user), res.send(user) }
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const users = req.body;
  const index = usersList.findIndex(p => p.id == id);
  usersList[index] = users;
  res.json(users);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = usersList.findIndex(p => p.id == id);
  usersList.splice(index, 1);
  res.json(usersList);
})

module.exports = {
  router,
  searchUsers,
  searchUsersById
}