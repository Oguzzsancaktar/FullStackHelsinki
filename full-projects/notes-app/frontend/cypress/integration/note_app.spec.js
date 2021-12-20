/* eslint-disable no-undef */
describe('Note app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Oguz Sancaktar',
      username: 'oguzzsancaktar',
      password: '123456Aa'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
  })

  it('login form can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('login').click()
    cy.get('input#username').type('oguzzsancaktar')
    cy.get('input#password').type('123456Aa')
    cy.get('button#loginButton').click()

    cy.contains('Oguz Sancaktar logged-in')
  })


  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('login').click()
      cy.get('input#username').type('oguzzsancaktar')
      cy.get('input#password').type('123456Aa')
      cy.get('button#loginButton').click()
    })

    it('a new note can be created', function() {
      cy.contains('add note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('show all').click()
      cy.contains('a note created by cypress')
    })

    describe('and a note exists', function () {
      beforeEach(function () {
        cy.contains('add note').click()
        cy.get('input').type('another note cypress')
        cy.contains('show all').click()
        cy.contains('save').click()
      })

      it('it can be made important', function () {
        cy.contains('another note cypress')
          .contains('make important')
          .click()

        cy.contains('another note cypress')
          .contains('make not important')
      })
    })
  })



  it.only('login fails with wrong password', function() {
    cy.contains('login').click()
    cy.get('#username').type('oguzzsancaktar')
    cy.get('#password').type('wrong')
    cy.get('#loginButton').click()

    cy.contains('wrong credentials')
  })

  it('login fails with wrong password', function() {
  // ...

    cy.get('.error').should('contain', 'wrong credentials')
  })



})