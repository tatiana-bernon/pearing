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
// describe('Check Slideshow', () => {
//   it('Checks the slideshow works', () => {
//     cy.visit('http://localhost:3000/#/')
//     cy.contains('svg').click()
//     // cy.get('svg').contains('...').click()
//     // cy.get('svg').contains('...').click()
//   })
// })

describe('Check Contact Page', () => {
  // it('Signs in', () => {
  //   cy.visit('http://localhost:3000/#/')
  //   cy.get('.button').contains('Sign In').click()
  //   cy.get('#username').type('dhah')
  //   cy.get('#password').type('1g23')
  //   cy.get('button').contains('Sign in').click()

  // })
  it('Checks the contact page form', () => {
    cy.visit('http://localhost:3000/#/')
    cy.viewport('macbook-11')
    cy.contains('Contact').click()
    cy.get('input[placeholder="Name"]')
      .type('Daryl Chen')
      .should('have.value', 'Daryl Chen')

    cy.get('input[placeholder="Username"]')
      .type('Daz 1982')
      .should('have.value', 'Daz 1982')

    cy.get('input[placeholder="Email"]')
      .type('Darylchen.w.h@gmail.com')
      .should('have.value', 'Darylchen.w.h@gmail.com')

    cy.get('textarea[placeholder="Please enter your message"]')
      .type('This is a test message')
      .should('have.value', 'This is a test message')
    cy.get('.button').contains('Cancel').click() // this needs to work
    cy.get('.navbar-item').contains('Home').click()
    // cy.get('.button').contains('Log out').click()
  })
})

describe('Checks sign in/Sign out and navbar', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Signs in', () => {
    cy.visit('http://localhost:3000/#/')
    cy.get('.button').contains('Sign In').click()
    cy.get('#username').type('dhah')
    cy.get('#password').type('1g23')
    cy.get('button').contains('Sign in').click()

  })

  it('Checks the navbar', () => {
    cy.viewport(1200, 960)
    cy.contains('About').click()
    cy.contains('Home').click()
    cy.contains('Contact').click()
    cy.contains('Home').click()
    cy.contains('Profile').click()
    cy.contains('Home').click()
    cy.contains('Contact').click()
    cy.contains('Home').click()
    cy.contains('Log out').click()
  })

  it('Checks the pages content', () => {

    cy.visit('http://localhost:3000/#/')
    cy.viewport(1200, 960)
    cy.get('.button').contains('Sign In').click()
    cy.get('#username').type('dhah')
    cy.get('#password').type('1g23')
    cy.get('button').contains('Sign in').click()

    cy.contains('Profile').click()
    // cy.get('h1').contains('pearing')
    cy.get('h2').contains('Personal Information')
    cy.get('.column').contains('Username')
    cy.get('.column').contains('Email')
    cy.get('.column').contains('Phone')
    cy.get('.column').contains('LinkedIn')
    cy.get('.column').contains('Discord')
    cy.get('.column').contains('Details')
    cy.contains('Home').click()
  })
})

  describe('Can update the user profile', () => {
    it('Signs in', () => {
      cy.visit('http://localhost:3000/#/')
      cy.viewport(1200, 960)
      cy.get('.button').contains('Sign In').click()
      cy.get('#username').type('dhah')
      cy.get('#password').type('1g23')
      cy.get('button').contains('Sign in').click()
    })

    it('Can update the user profile', () => {
      cy.viewport(1300, 1000)
      cy.contains('Profile').click()
      cy.contains('Edit').click()
      cy.get('input[name="email"]')
        .type('test@test.com')
        .should('have.value', 'test@test.com')

      cy.get('input[name="phone"]')
        .type('0220885949')
        .should('have.value', '0220885949')

      cy.get('input[name="linkedin"]')
        .type('https://www.linkedin.com/in/daryl-chen-25560418/')
        .should('have.value', 'https://www.linkedin.com/in/daryl-chen-25560418/')

      cy.get('input[name="discord"]')
        .type('Daryl #6733')
        .should('have.value', 'Daryl #6733')

      cy.get('textarea[name="info"]')
        .type('OMG this is so awesome!')
        .should('have.value', 'OMG this is so awesome!')

      cy.contains('Submit').click()
      // should take you back to profile
      cy.contains('Home').click()
      cy.contains('Profile').click()
      cy.contains('Home').click()
    })

  })

  describe('It can add a new invitation', () => {
    it('Signs in', () => {
      cy.visit('http://localhost:3000/#/')
      cy.get('.button').contains('Sign In').click()
      cy.get('#username').type('dhah')
      cy.get('#password').type('1g23')
      cy.get('button').contains('Sign in').click()

    })

    it('Create a new Pearing Invitation', () => {
      cy.viewport(1200, 960)
      cy.contains('Create new pearing invitation!').click()

      cy.get('form')
        .get('select')
        .select('redux')

      cy.get('input[type="text"]')
        .type('Daryl needs help with Redux')
        .should('have.value', 'Daryl needs help with Redux')

      cy.get('textarea[name="description"]')
        .type('Help! I really need help with Redux!')
        .should('have.value', 'Help! I really need help with Redux!')

      cy.contains('Back').click() // change this to Submit once delete button works
      cy.get('.title').contains('Back to basics.').click()
        cy.get('.button').contains('Interest').click()
        cy.get('.button').contains('Back').click()
        cy.get('.title').contains('Back to basics.').click()
        cy.get('.button').contains('Interest').click()
        cy.get('.button').contains('Back').click()
        cy.get('.button').contains('Log out').click()
    })
  })
