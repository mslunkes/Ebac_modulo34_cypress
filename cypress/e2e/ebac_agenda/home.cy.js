/// <reference types="cypress" />

describe('Ir até a pagina de agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato', ()=> {
        cy.get('input[type="text"]').type('matias lunkes')
        cy.get('input[type="email"]').type('matias@teste.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click() 
        cy.wait(5000)
    })
    
    it('Deve alterar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').type('_edit')
        cy.get('input[type="email"]').type('.br')
        cy.get('input[type="tel"]').type('90')
        cy.get('.alterar').click()
        cy.wait(5000)
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })

})