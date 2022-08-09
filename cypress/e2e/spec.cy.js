describe('URL Shortener', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', { fixture: "getMockData.json" })
    cy.visit('http://localhost:3000/');
    cy.contains('URL Shortener');
  })

  it('Should display two url cards (3 elements in each) on page load', () => {
    cy.get('.url').should('be.visible')
    cy.get('.url').children().should('have.length', 6)

    cy.get('section > :nth-child(1)').contains('sleepy kitten')
    cy.get(':nth-child(1) > a').contains('http://localhost:3001/useshorturl/1')
    cy.get(':nth-child(1) > p').contains('https://www.pexels.com/photo/close-up-photo-of-cute-sleeping-cat-416160/')

    cy.get('section > :nth-child(2)').contains('twinsies')
    cy.get(':nth-child(2) > a').contains('http://localhost:3001/useshorturl/2')
    cy.get(':nth-child(2) > p').contains('https://www.pexels.com/photo/black-and-white-tabby-cats-sleeping-on-red-textile-96428/')

  })

  it('Should display two inputs and a button', () => {
    cy.get('[placeholder="Title..."]').should('be.visible')
    cy.get('[placeholder="URL to Shorten..."]').should('be.visible')
    cy.get('button').should('be.visible')
    cy.get('button').contains('Shorten Please!')
  })

  it('Should allow user to submit form and display new url card', () => {
    cy.get('[placeholder="Title..."]').type('green eyed cat')
    cy.get('[placeholder="URL to Shorten..."]').type('https://www.pexels.com/photo/brown-cat-with-green-eyes-617278/')
    
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', { fixture: "postMockData.json" })
    cy.get('button').click()

    cy.get('.url').children().should('have.length', 9)
    cy.get('section > :nth-child(3)').contains('green eyed cat')
    cy.get(':nth-child(3) > a').contains('http://localhost:3001/useshorturl/3')
    cy.get(':nth-child(3) > p').contains('https://www.pexels.com/photo/brown-cat-with-green-eyes-617278/')
  })
  
})