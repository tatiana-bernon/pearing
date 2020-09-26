/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable no-unused-expressions */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
describe('Checking the sign in function', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Sign in scenario', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/#/signin')
    // eslint-disable-next-line no-undef
    cy.get('.button').click()
    // eslint-disable-next-line no-undef
    cy.get('#username').type('dhah')
    // eslint-disable-next-line no-undef
    cy.get('#password').type('1g23')
    // eslint-disable-next-line no-undef
    cy.get('.button').click()
    // eslint-disable-next-line no-undef
    // cy.title().should('include', 'pearing')
  })
})
describe('Authenticated Home page tests', () => {
  // eslint-disable-next-line jest/expect-expect
  
  it('Has the correct links', () => {
    cy.contains('About').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'About')

    cy.contains('Contact').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Contact')

    cy.contains('Profile').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Profile')

    cy.contains('Subjects').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Subjects')
  })

  it('has a nav section', () => {
    cy.get('div[class="columns"]').children()
      .should('have.length', 2)
      .and('contain', 'About')
      .and('contain', 'Contact')
      .and('contain', 'Profile')
      .and('contain', 'Subjects')
    })
})

describe('Check and edit the user profile', () => {
  it('Has the correct links', () => {
    cy.contains('About').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'About')

    cy.contains('Contact').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Contact')
  })

  it('Checks the page layout and update info form', () => {
    cy.visit('http://localhost:3000/#/profile')
    cy.get('h1').contains('pearing')
    cy.get('h2').contains('Personal Information')
  })
})