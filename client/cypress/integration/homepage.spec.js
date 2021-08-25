describe('Homepage Works', () => {
    beforeEach(() => {
        cy.visit('https://asd-g5project.herokuapp.com/')
    })

    it('displays the homepage', () => {
        cy.get('#root h1')
        .should('have.text', 'Hello World!');
    });
});