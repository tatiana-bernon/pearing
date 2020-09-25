describe('Checking the sign in function', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Sign in scenario', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/#/signin')
    // eslint-disable-next-line no-undef
    cy.get('.button').click()
    // eslint-disable-next-line no-undef
    cy.get('#username').type('daryl')
    // eslint-disable-next-line no-undef
    cy.get('#password').type('tatiHash')
    // eslint-disable-next-line no-undef
    cy.get('.button').click()
    // eslint-disable-next-line no-undef
    cy.title().should('include', 'pearing')
  })
})
