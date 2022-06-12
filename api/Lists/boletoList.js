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

function searchBoletos() {
  return boletoList;
}

const getBoletoPerson = (id) => {
  const boleto = searchBoletos().find(b => b.id_person == id);
  return boleto;
}

const getBoletoUser = (id) => {
  const boleto = searchBoletos().find(b => b.id_user == id);
  return boleto;
}

function checkBoletos(id, type) {
  return type == 1 ? getBoletoPerson(id) : getBoletoUser(id);
}

module.exports = {
  checkBoletos,
  getBoletoPerson,
  getBoletoUser,
  searchBoletos
};