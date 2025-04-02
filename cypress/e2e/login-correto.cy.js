describe('Página de login do Adopet', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    
    it('Deve acessar a página de /home do Adopet por meio de login correto', ()=> {      
      cy.get('[data-test="input-loginEmail"]').type('emily.saucedo@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha1234');
      cy.get('[data-test="submit-button"]').click();
    })
  
    it.skip('Deve acessar a página de /home do Adopet e clica no botão "Falar com o responsável"', ()=> {
      cy.get('[data-test="input-loginEmail"]').type('emily.saucedo@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha1234');
      cy.get('[data-test="submit-button"]').click();
      cy.wait(1000);
      cy.get('.header__message').click();
    })

    describe('Deve acessar a página de login por meio do botão', ()=>{
        it('Deve acessar a página de login por meio do botão', ()=>{
            cy.get('.header__message').click();
            cy.get('[data-test="input-loginEmail"]').type('emily.saucedo@gmail.com');
            cy.get('[data-test="input-loginPassword"]').type('Senha1234');
            cy.get('[data-test="submit-button"]').click();
        })
    })
    
  })

  