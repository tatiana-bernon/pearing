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

test('userExists returns true if user exists', () => {
  return users.userExists('andras', testDb)
    .then(bool => {
      return expect(bool).toBe(true)
    })
})

test('userExists returns false if user does not exist', () => {
  return users.userExists('notandras', testDb)
    .then(bool => {
      return expect(bool).toBe(false)
    })
})

test('getUserById returns the correct user', () => {
  return users.getUserById(4, testDb)
    .then(user => {
      return expect(user.username).toBe('andras')
    })
})

test('getUserByName returns the correct user', () => {
  return users.getUserByName('andras', testDb)
    .then(user => {
      return expect(user.id).toBe(4)
    })
})