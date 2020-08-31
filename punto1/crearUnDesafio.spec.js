context('Login Tests', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
	cy.wait(1000);

        cy.get('#usernameInput').type('j.barbosaj@uniandes.edu.co').should('have.value', 'j.barbosaj@uniandes.edu.co');
        cy.get('#passwordInput').type('12345678');

        cy.get('.btn-info[type="submit"]').click();

	cy.get(':nth-child(7) > .nav-link').click();
	cy.get('.header-row > .col-md-4 > .btn').click();
	cy.get('#__BVID__246').type('un desafio de prueba');
	cy.get('#__BVID__247').type('prueba');
	cy.get('.summary-textarea').type('es una prueba');
	cy.get('.description-textarea').type('estoy probando e2e, ingore esto si lo esta leyendo');		
	cy.get(':nth-child(5) > .form-control').select('Desafíos públicos');	
	cy.get('.category-select').click().click();
	cy.get(':nth-child(1) > .custom-control > .custom-control-label').click();
	cy.get('.category-box > .btn').click();
	cy.get('.alert').should('have.class','alert'); 
      })
});