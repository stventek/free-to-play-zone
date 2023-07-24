describe('Game detail Route Tests', () => {
  it('should display game details', () => {
    const gameId = 57;
    cy.visit(`/game/${gameId}`);
    cy.get('[data-cy=game-title]').should('contain', 'Fortnite');
  });
});
