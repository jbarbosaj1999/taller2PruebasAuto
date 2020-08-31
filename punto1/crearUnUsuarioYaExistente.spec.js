context('Login Tests', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com/static/home');        
	cy.wait(300);
        cy.get('#usernameInput').type('jbarbosaj').should('have.value', 'jbarbosaj');
	cy.get('.form-control[type="email"]').type('j.barbosaj@uniandes.edu.co').should('have.value', 'j.barbosaj@uniandes.edu.co');
	cy.get('[placeholder="Contraseña"]').type('12345678');
	cy.get('[placeholder="Confirma contraseña"]').type('12345678');

        cy.get('.form > .btn').should('have.disabled', 'disabled');
      })
});