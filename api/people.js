const express = require('express');
const router = express.Router();
const { checkBoletos } = require('./Lists/boletoList');
const { searchPeople } = require('./Lists/peopleList');

router.get('/', (req, res) => {
  res.send( searchPeople() );
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const person = searchPeople().find(p => p.id == id);
  res.json(person)
})

router.post('/', (req, res) => {
  const person = req.body;
  person.id = searchPeople().length + 1;
  { !person.name || !person.cpf ? res.status(400).send('You need to inform the name and cpf') 
  :  searchPeople().push(person), res.send(person) }
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const people = req.body;
  const index = searchPeople().findIndex(p => p.id == id);
  searchPeople()[index] = people;
  res.json(people);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = searchPeople().findIndex(p => p.id == id);
  if (checkBoletos(id, 1)) {
    res.status(400).send('You can not delete this person because he has a boleto');
  } else {
    searchPeople().splice(index, 1);
    res.json(searchPeople());
  }
})

module.exports = {
  router
}