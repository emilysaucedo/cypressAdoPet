describe('Acesso ao site Adopet, Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })

    it('Preencher o formulário com dados incompletos', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    });
  
    it.skip('Erro ao realizar cadastro do Adopet, senha fora do padrão', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="input-name"]').type('Emily Saucedo');
      cy.get('[data-test="input-email"]').type('emily.saucedo@gmail.com');
      cy.get('[data-test="input-password"]').type('Senha1234');
      cy.get('[data-test="input-confirm-password"]').type('Senha1234');
      cy.get('[data-test="submit-button"]').click();
    })
  
    
  })
  
  