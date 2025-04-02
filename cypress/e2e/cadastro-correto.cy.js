describe('Acesso ao site Adopet, Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve ter sucesso ao realizar cadastro do Adopet', () => {
    cy.get('[data-test="input-name"]').type('Emily Saucedo');
    cy.get('[data-test="input-email"]').type('emily.saucedo@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha1234');
    cy.get('[data-test="input-confirm-password"]').type('Senha1234');
    cy.get('[data-test="submit-button"]').click();
  });
  
})

