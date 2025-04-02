describe('Acesso ao site Adopet, Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve ter sucesso ao realizar cadastro do Adopet', () => {
    cy.cadastro('Emily Saucedo', 'emily.saucedo@gmail.com', 'Senha1234', 'Senha1234');
  });
  
})

