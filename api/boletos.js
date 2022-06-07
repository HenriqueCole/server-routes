const express = require('express');
const people = require('./people');
const user = require('./users');
const router = express.Router();

boletoList = [
  {
    idBoleto: 1,
    value: 20,
    id_user: 1,
    id_person: 2,
    status: "ok",
    person_name: "Henrique"
  }
]

router.get('/', (req, res) =>{
  res.json(boletoList);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const boleto = boletoList.find(p => p.id == id);
  res.send(boleto);
})

function getByPeopleId(id){
  return boletoList.filter(p => p.id_person == id);
}

router.get('/person/:id', (req, res) => {
  const id = req.params.id;
  const boleto = boletoList.map(p => p.id_person == id);
  res.send(boleto);
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
    boleto.idBoleto = boletoList.length + 1;
    boletoList.push(boleto);
    res.send(boleto);
  }

})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const boletos = req.body;
  const index = boletoList.findIndex(p => p.id == id);
  boletoList[index] = boletos;
  res.json(boletos);
})


module.exports = {
  router
}