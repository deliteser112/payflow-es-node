const request = require('supertest')
const app = require('../infrastructure/server')

describe('Get Users', () => {
  it('should return all users', async () => {
    const res = await request(app.server)
      .get('/users')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual([])
  })
})
