describe('API Adopet', () => {
    it('Mensangens da API', () => {
        cy.request({
            method:'GET',
            url:`https://adopet-api-i8qu.onrender.com/mensagem/${Cypress.env('USER_ID')}`,
            headers: {
                authorization: `Bearer ${Cypress.env('AUTHORIZATION_TOKEN')}`
            }
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})