const getUserID = (name, database) => {
  // console.log(name, users);
  // return users.filter(user => user.name === name);
    for (const user in database) {
      if (database[user].name === name) {
        return database[user].id;
      }
    }
}

module.exports = { getUserID };