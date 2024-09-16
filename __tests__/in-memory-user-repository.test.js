const InMemoryUserRepository = require('../infrastructure/in-memory-user.repository')

describe('In-Memory User Repository', () => {
  const userRepository = new InMemoryUserRepository()
  const testUser = {
    userName: 'Payflow',
    externalId: 'test1234',
    externalSource: 'payflow',
    email: 'test@payflow.es'
  }

  const invalidUser = {
    login: 'Payflow',
    externalId: 'test1234',
    externalSource: 'payflow'
  }

  it('should allow me to add a valid user', () => {
    const success = userRepository.addUser(testUser)
    expect(success).toBe(true)
  })


  it('should not allow me to add an invalid user', () => {
    try {
      userRepository.addUser(invalidUser)
    } catch (e) {
      expect(e).toBeDefined()
    }
  })

  it('should return added users', () => {
    const allUsers = userRepository.findAllUsers()
    expect(allUsers.length).toBe(1)
    expect(allUsers[0]).toStrictEqual(testUser)
  })

  it('should allow me to update a user', () => {
    const updateUser = {
      userName: 'Payflow',
      email: 'tech@payflow.es'
    }

    userRepository.updateUser(updateUser)
    const user = userRepository.findByUserName(updateUser.userName)

    expect(user).toStrictEqual({
      userName: 'Payflow',
      externalId: 'test1234',
      externalSource: 'payflow',
      email: 'tech@payflow.es'
    })
  })

  it('should allow me to delete a user', () => {
    userRepository.deleteUserByUserName('Payflow')

    const allUsers = userRepository.findAllUsers()

    expect(allUsers.length).toBe(0)
  })
})
