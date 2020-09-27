/* eslint-disable no-undef */
describe('header test', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Has the correct headers', () => {
    cy.visit('http://localhost:3000/#/register')
    cy.get('h1').contains('pearing')
    cy.get('h1').contains('Register')
  })

  describe('form test', () => {
    // eslint-disable-next-line jest/expect-expect
    it('can fill the form', () => {
      cy.visit('http://localhost:3000/#/register')
      // cy.get('div')

      cy.get('input[type="username"]')
        .type('test user')
        .should('have.value', 'test user')

      cy.get('input[type="password"]')
        .type('test password')
        .should('have.value', 'test password')
    })

    // eslint-disable-next-line jest/expect-expect
    it('can submit the form', () => {
      cy.server()
      cy.route({
        url: 'http://localhost:3000/#/home',
        method: 'POST',
        response: { status: 'Registered', code: 201 }
      })
      cy.get('div')
      cy.get('.button').click()
      // cy.visit('http://localhost:3000/#/home')
    })

    // cy.get('form').within(($form) => {
    //   // you have access to the found form via
    //   // the jQuery object $form if you need it

    //   // cy.get() will only search for elements within form,
    //   // not within the entire document
    //   cy.get('input[type="username"]').type('testuser')
    //   cy.get('input[type="password"]').type('testpassword')
    //   cy.root().submit()
    // })
  })
})
