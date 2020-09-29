/* eslint-disable jest/expect-expect */
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000/#/')
  })
})