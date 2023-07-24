describe('Main Route Tests', () => {
  it('should search for a game by title', () => {
    cy.visit('/');
    cy.get('[data-cy=search-input]').type('Fortnite');
    cy.get('[data-cy=search-button]').click();
    cy.get('[data-cy=game-card]').should('contain', 'Fortnite');
  });

  it('should filter games by category and platform', () => {
    cy.visit('/');
    cy.get('[data-cy=category-input]').type('shooter');
    cy.get('[data-cy=platform-select]').select('browser');
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy=game-card]').should('contain', 'Dark Orbit');
  });
});
