describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe.only('Inisiar sesion - Nutracademia', () => {
  it('Prueba nutracademia', () => {
    cy.viewport(1280, 720)


    cy.visit('https://nutracademia.com/')
    cy.get('a[class="dialog-close-button dialog-lightbox-close-button"]').click()
    

    cy.get('nav#site-navigation')
  .contains('Iniciar Sesión')
  .click()

  cy.get('input[id="user-84f7977"]').type('HolaAlixon')



  });
});