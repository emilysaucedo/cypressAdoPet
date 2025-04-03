describe('Página de login do Adopet com login incorreto', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 401
        }).as('stubPost')
    })
    
    it('Verifica mensagem de erro ao realizar login com email incorreto', ()=> {      
      cy.login('emailemail', '123');
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Verifica mensagem de erro ao realizar login sem informar os dados', ()=> {      
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Insira sua senha').should('be.visible');
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
      cy.login('emilysaucedopires@gmail.com', 'Senha1234');
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })
  })
  
  