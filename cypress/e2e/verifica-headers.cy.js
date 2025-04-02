describe('Página Inicial do Adopet', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
  
    it('Deve verificar o botão e acessar a página de pets disponíveis', ()=> {
      cy.contains('a', 'Ver pets disponíveis').should('be.visible');
      cy.contains('a', 'Ver pets disponíveis').click();
      cy.wait(1000);
    })
  
    it.skip('Deve acessar os botões do header do Adopet', ()=> {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('.header__home').click(); //acessa pela classe
      cy.get('.header__message').click();
    })
    
    
  })

  