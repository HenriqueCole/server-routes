const express = require('express');
const router = express.Router();
const { searchPeopleById } = require('./Lists/peopleList');
const { searchUsersById } = require('./Lists/userList');
const { searchBoletos } = require('./Lists/boletoList');

router.get('/', (req, res) =>{
  res.json(searchBoletos());
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const boleto = searchBoletos().find(p => p.id == id);
  res.send(boleto);
})

router.get('/person/:id', (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < searchBoletos().length; i++) {
    if (searchBoletos()[i].id_person == id) {
      res.send(searchBoletos()[i]);
    }
  }
})

router.post('/', (req, res) => {
  const boleto = req.body;
  if(!searchPeopleById(boleto.id_person)){
    res.status(400).send('Person not found');
  } else 
  if(!searchUsersById(boleto.id_user)){
    res.status(400).send('User not found');
  } else 
  if(boleto.value <= 0){
    res.status(400).send('Value must be greater than 0');
  } else {
    boleto.id = searchBoletos().length + 1;
    searchBoletos().push(boleto);
    res.send(boleto);
  }
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const boletos = req.body;
  const index = searchBoletos().findIndex(p => p.id == id);
  searchBoletos()[index] = boletos;
  res.send(boletos);
})


module.exports = {
  router,
  searchBoletos
}