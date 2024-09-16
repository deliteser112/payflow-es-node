const getUsers = (userRepository) => {
  return async (req, res) => {
    res.send(userRepository.findAllUsers())
  }
}

module.exports = getUsers;