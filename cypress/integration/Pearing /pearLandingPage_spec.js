describe('Landing page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  // eslint-disable-next-line jest/expect-expect
  it('Has the correct links', () => {
    cy.contains('About').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'About')

    cy.contains('Contact').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Contact')

    cy.contains('Sign in').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Sign in')

    cy.contains('Register').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Register')
  })

  it('has a nav section', () => {
    cy.get('div[class="columns"]').children()
      .should('have.length', 3)
      .and('contain', 'About')
      .and('contain', 'Contact')
      .and('contain', 'Sign in')
      .and('contain', 'Register')
    })
})
