describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YTZjMjFkYy03YjcyLTQxZTItYTkxNC05ODQwZWU1NjBkY2YiLCJhZG9wdGVyTmFtZSI6IkVtaWx5IFNhdWNlZG8gUGlyZXMiLCJpYXQiOjE3NDM2ODczNDMsImV4cCI6MTc0Mzk0NjU0M30.K8pwq46CoVFOMOhvw5LxEfDstEWQyIzQkgESbfJpLCI`

    it('Nome do usuário no perfil API', () => {
        cy.request({
            method:'GET',
            url:'https://adopet-api-i8qu.onrender.com/adotante/perfil/5a6c21dc-7b72-41e2-a914-9840ee560dcf',
            headers: {
                authorization
            }
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil).to.have.property('nome')
        })
    })
})