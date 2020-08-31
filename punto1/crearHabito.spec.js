context('Login Tests', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
	cy.wait(300);

        cy.get('#usernameInput').type('j.barbosaj@uniandes.edu.co').should('have.value', 'j.barbosaj@uniandes.edu.co');
        cy.get('#passwordInput').type('12345678');

        cy.get('.btn-info[type="submit"]').click();
	cy.get('.habit > .tasks-list > .quick-add').click().type('Un habito de prueba{enter}');
      })
});