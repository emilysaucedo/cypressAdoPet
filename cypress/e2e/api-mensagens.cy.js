describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YTZjMjFkYy03YjcyLTQxZTItYTkxNC05ODQwZWU1NjBkY2YiLCJhZG9wdGVyTmFtZSI6IkVtaWx5IFNhdWNlZG8gUGlyZXMiLCJpYXQiOjE3NDM2ODcxODMsImV4cCI6MTc0Mzk0NjM4M30.IDYIifqLQuXE23qvWm5c1tygnKfzJw7mhcywYIl13yU`

    it('Mensangens da API', () => {
        cy.request({
            method:'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/5a6c21dc-7b72-41e2-a914-9840ee560dcf',
            headers: {
                authorization
            }
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})