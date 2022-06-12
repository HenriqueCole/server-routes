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
  }
];

function searchPeople(){
  return peopleList;
}

function searchPeopleById(id){
  return peopleList[id];
}

module.exports = {
  searchPeople,
  searchPeopleById
}