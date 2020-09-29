const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const users = require('./users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('createUser creates a new user', () => {
  const user = {
    username: 'testuser',
    password: 'goodpassword'
  }
  return users.createUser(user, testDb)
    .then(user => {
      return expect(user).toEqual([5])
    })
})