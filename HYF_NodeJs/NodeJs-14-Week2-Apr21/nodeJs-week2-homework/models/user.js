let shortid = require('shortid');
let lodash = require('lodash');


const users = [
  { id: 1, name: 'John Doe', email: 'john@hyf.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@hyf.com' }
]

const getUserById = (id) => {
  let res = lodash.findIndex(users, ["id", id.id]);
  if (res !== -1) {
    return users[res];
  } else {
    return 404;
  }
};

const deleteUser = (id) => {
  let res = lodash.findIndex(users, ["id", id]);
  if (res !== -1) {
    users.splice(res, 1);
    return users;
  } else {
    return 404;
  }
};

const createUser = data => {
  let res = lodash.find(users, ["email", data.email]);
  if (typeof (res) !== 'undefined') {
    return 403;
  }
  else {
    data["id"] = shortid.generate();
    console.log(shortid.generate());
    users.push(data);
    return users;
  }
}


const updateUser = (id, data) => {
  const index = users.findIndex(user => user.id === id);
  if (typeof (res) !== 'undefined') {
    return 403;
  } else {
    users[index].name = data.name;
    users[index].email = data.email;
    return users;
  }
}

module.exports = {
  users,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
  
}