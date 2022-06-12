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

module.exports = {
  searchUsers,
  searchUsersById
}