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
    })
    
    it('Deve alterar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').type('l')
        cy.get('input[type="email"]').type('.com')
        cy.get('input[type="tel"]').type('90')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })

})