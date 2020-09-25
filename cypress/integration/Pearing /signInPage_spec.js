describe('Checking the sign in function', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Sign in scenario', () => {
    cy.visit('http://localhost:3000/#/signin')
    cy.get('.button').click()
    cy.get('#username').type('daryl')
    cy.get('#password').type('test1@test.com')
    cy.get('.button').click()
    cy.title().should('include', 'pearing')
  })
})
