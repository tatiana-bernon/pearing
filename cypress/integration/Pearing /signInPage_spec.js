/* eslint-disable jest/no-commented-out-tests */
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

describe('Checks sign in/Sign out and navbar', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Signs in', () => {
    cy.visit('localhost:3000/#/')
    // cy.get('.navbar').contains('About').click()
    cy.get('.button').contains('Sign In').click()
    cy.get('#username').type('dhah')
    cy.get('#password').type('1g23')
    cy.get('button').contains('Sign in').click()

  })

  // it('Checks the navbar', () => {
    
  //   cy.get('navbar').contains('About').click()
  //   cy.contains('Home').click()
  //   cy.contains('Contact').click()
  //   cy.contains('Home').click()
  //   cy.contains('Profile').click()
  //   cy.contains('Home').click()
  //   // cy.contains('Subjects').click()
  //   // cy.contains('Home').click()
  //   cy.contains('Log out').click()
  // })

  // it('Checks the pages content', () => {

  //   cy.visit('http://localhost:3000/#/')
  //   cy.get('.button').contains('Sign In').click()
  //   cy.get('#username').type('dhah')
  //   cy.get('#password').type('1g23')
  //   cy.get('button').contains('Sign in').click()

  //   cy.contains('Profile').click()
  //   // cy.get('h1').contains('pearing')
  //   cy.get('h2').contains('Personal Information')
  //   cy.get('h3').contains('Username')
  //   cy.get('h3').contains('Email')
  //   cy.get('h3').contains('Info')
  //   cy.get('h2').contains('Personal Listing')
  //   cy.contains('Home').click()
  // })

  // describe('Can update the user profile', () => {
  //   it('Signs in', () => {
  //     cy.visit('http://localhost:3000/#/')
  //     cy.get('.button').contains('Sign In').click()
  //     cy.get('#username').type('dhah')
  //     cy.get('#password').type('1g23')
  //     cy.get('button').contains('Sign in').click()
  //   })

  //   it('Can update the user profile', () => {
  //     cy.contains('Profile').click()
  //     cy.contains('Edit').click()
  //     cy.get('input[type="text"]')
  //       .type('test@test.com')
  //       .should('have.value', 'test@test.com')

  //     cy.get('textarea[type="text"]')
  //       .type('this is a test')
  //       .should('have.value', 'this is a test')

  //     cy.contains('Submit').click()
  //     // should take you back to profile
  //     cy.contains('Home').click()
  //     cy.contains('Profile').click()
  //     cy.contains('Home').click()
  //   })

  // })

  // describe('It can add a new listing', () => {

  //   it('Adds a new listing and verifies it', () => {
  //     cy.get('.button').contains('Add New Listing').click()
  //     cy.get('form')
  //       .get('select')
  //       .select('redux')

  //     cy.get('input[type="text"]')
  //       .type('Daryl needs help with Redux')
  //       .should('have.value', 'Daryl needs help with Redux')

  //     cy.get('textarea[name="description"]')
  //       .type('Help! I really need help with Redux!')
  //       .should('have.value', 'Help! I really need help with Redux!')

  //     cy.contains('Back').click() // change this to Submit once delete button works

  //   })

  //   it('Can show interest', () => {
  //     cy.get('h3').contains('Daryl').click()
  //     cy.get('.button').contains('Show Interest').click()
  //     cy.get('.button').contains('Remove Interest').click()
  //     cy.get('.button').contains('Back').click()
  //   })
  // })
  // come back to this!
  // describe('Check and edit the user profile on profiles page', () => {
  // eslint-disable-next-line jest/no-commented-out-tests
  //   it('Has the correct links', () => {
  //     cy.visit('http://localhost:3000/#/profile')
  //     cy.contains('About').click()
  //     cy.go('back')
  //     cy.location('pathname').should('not.include', 'About')

  //     cy.contains('Contact').click()
  //     cy.go('back')
  //     cy.location('pathname').should('not.include', 'Contact')
  //   })

  //   it('Checks the page layout and update info form', () => {

  //     
  //   })
  //   it('Checks the cancel button works', () => {

  //     cy.contains('Edit').click()
  //     cy.contains('Cancel').click()
  //   })

  //   it('Can update profile information', () => {

  //       cy.contains('Profile').click()

  //   })
})
