it('loads search page', () => {
  cy.visit('https://www.google.com');
});

it('google `wikipedia`', () => {
  cy.get('input[name="q"]').type('wikipedia{enter}');
});
