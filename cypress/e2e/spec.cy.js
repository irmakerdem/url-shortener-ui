describe('URL Shortener', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', { fixture: "getMockData.json" })
    cy.visit('http://localhost:3000/');
    cy.contains('URL Shortener');
  })

  it('Should display two url cards on page load', () => {

  })

  it('Should display two inputs and a button', () => {

  })

  it('Should allow user to submit form and see new url card', () => {

  })
})