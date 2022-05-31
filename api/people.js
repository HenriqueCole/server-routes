const express = require('express');
const router = express.Router();

const peopleList = [
  {
    'id': 1,
    'name': 'Henrique',
    'cpf': '123.456.789-10',
  },

  {
    'id': 2,
    'name': 'Vinicius',
    'cpf': '987.654.321-09',
  },

  {
    'id': 3,
    'name': 'Thiago',
    'cpf': '111.222.333-44',
  },

];

function searchPeople(){
  return peopleList;
}

function searchPeopleById(id){
  return peopleList[id];
}

router.get('/', (req, res) => {
  res.send( searchPeople() );
})

router.get('/:id', (req, res) => {
  res.send( searchPeopleById(req.params.id) );
})

router.post('/', (req, res) => {
  const person = req.body;
  person.id = peopleList.length + 1;
  peopleList.push(person);
  res.json(person);
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const people = req.body;
  const index = peopleList.findIndex(p => p.id == id);
  peopleList[index] = people;
  res.json(people);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = peopleList.findIndex(p => p.id == id);
  peopleList.splice(index, 1);
  res.json(peopleList);
})

module.exports = {
  router,
  searchPeople,
  searchPeopleById
}