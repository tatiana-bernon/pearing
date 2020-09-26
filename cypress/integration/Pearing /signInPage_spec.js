/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/* eslint-disable jest/valid-expect-in-promise */
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
    cy.visit('http://localhost:3000/#/signin')
    cy.get('.button').click()
    cy.get('#username').type('dhah')
    cy.get('#password').type('1g23')
    cy.get('.button').click()
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
      .should('have.length', 6)
      .and('contain', 'About')
      .and('contain', 'Contact')
      .and('contain', 'Profile')
      .and('contain', 'Subjects')
    })
    
  it('Links work and correct info showing', () => {
    cy.get('.columns')
      .should('have.attr', 'href').and('include', 'Help')
      .then((href) => {
        cy.visit(href)
      })
  })
})

// come back to this!
describe('Check and edit the user profile on profiles page', () => {
  it('Has the correct links', () => {
    cy.visit('http://localhost:3000/#/profile')
    cy.contains('About').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'About')

    cy.contains('Contact').click()
    cy.go('back')
    cy.location('pathname').should('not.include', 'Contact')
  })

  it('Checks the page layout and update info form', () => {
   
    cy.get('h1').contains('pearing')
    cy.get('h2').contains('Personal Information')
    cy.get('h3').contains('Username')
    cy.get('h3').contains('Email')
    cy.get('h3').contains('Info')
    cy.get('h2').contains('Personal Listing')
  })
})