import Cadastro from "../support/pages/cadastro/pagina-cadastro";

describr('Página de cadastro', () => {
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-iota.vercel.app/');
    })

    it('Deve preencher os campos do formulário corretamente', () => {
        Cadastro.acessarPaginaDeCadastro();
        Cadastro.preencherFormulario();
        Cadastro.submeterCadastro();
    })
})
