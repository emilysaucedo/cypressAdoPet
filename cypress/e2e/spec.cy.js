describe('Acesso ao site Adopet', () => {
  it('Sucesso ao realizar cadastro do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    //cy.contains('[data-testid="register-button"]').click();
    cy.get('input[name="nome"]').type('Emily Saucedo');
    cy.get('input[name="email"]').type('emily.saucedo@gmail.com');
    cy.get('input[name="password"]').type('Senha1234');
    cy.get('input[name="confirm_password"]').type('Senha1234');
    cy.contains('button', 'Cadastrar').click();
  });

  it.skip('Erro ao realizar cadastro do Adopet, senha fora do padrão', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.get('input[name="nome"]').type('Emily Saucedo');
    cy.get('input[name="email"]').type('emily.saucedo@gmail.com');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="confirm_password"]').type('123');
    cy.contains('button', 'Cadastrar').click();
  })

  it('Acesso a página de pets disponíveis', ()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis').click();
  })

  it('Acesso aos botões do header do Adopet', ()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click(); //acessa pela classe
    cy.get('.header__message').click();
  })

  it('Acesso a página de /login do Adopet', ()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Acesso a página de /home do Adopet', ()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="input-loginEmail"]').type('emily.saucedo@gmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha1234');
    cy.get('[data-test="submit-button"]').click();
  })

  it('Acesso a página de /home do Adopet e clica no botão "Falar com o responsável"', ()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="input-loginEmail"]').type('emily.saucedo@gmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha1234');
    cy.get('[data-test="submit-button"]').click();
    cy.wait(1000);
    cy.get('.header__message').click();
  })
  
})

/*
Visite a página de /login do Adopet;
Visite a página de /home do Adopet;
Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
*/
