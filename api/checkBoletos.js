const boletos = require('./boletos');

const getBoletos = () => {
  return boletos.searchBoletos();
}

const getBoletoPerson = (id) => {
  const bill = getBoletos().find(b => b.id_person == id);
  return bill;
}

const getBoletoUser = (id) => {
  const bill = getBoletos().find(b => b.id_user == id);
  return bill;
}


function checkBoletos(id, type) {
  return type == 1 ? getBoletoPerson(id) : getBoletoUser(id);
}

module.exports = {checkBoletos};