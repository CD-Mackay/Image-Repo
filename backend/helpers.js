const getUserID = (name, users) => {
  return users.filter(user => name == user.name);
}

module.exports = { getUserID };