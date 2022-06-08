const express = require('express');
const people = require('./people');
const user = require('./users');
const router = express.Router();

boletoList = [
  {
    id: 1,
    value: 20,
    id_user: 1,
    id_person: 2,
    status: "ok",
    person_name: "Henrique"
  },
  {
    id: 2,
    value: 120,
    id_user: 3,
    id_person: 1,
    status: "ok",
    person_name: "John"
  }
]

function checkBoletos(id, type) {
  return type == 1 ? boletoList.find(p => p.id_person == id) : boletoList.find(p => p.id_user == id);
}

router.get('/', (req, res) =>{
  res.json(boletoList);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const boleto = boletoList.find(p => p.id == id);
  res.send(boleto);
})

router.get('/person/:id', (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < boletoList.length; i++) {
    if (boletoList[i].id_person == id) {
      res.send(boletoList[i]);
    }
  }
})

router.post('/', (req, res) => {
  const boleto = req.body;
  if (!people.searchPeopleById(boleto.id_person)) {
    res.status(400).send('Person not found');
  } else if (!user.searchUsersById(boleto.id_user)) {
    res.status(400).send('User not found');
  } else if (boleto.value <= 0) {
    res.status(400).send('Value must be greater than 0');
  } else {
    boleto.id = boletoList.length + 1;
    boletoList.push(boleto);
    res.send(boleto);
  }
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const boletos = req.body;
  const index = boletoList.findIndex(p => p.id == id);
  boletoList[index] = boletos;
  res.send(boletos);
})


module.exports = {
  router,
  checkBoletos
}