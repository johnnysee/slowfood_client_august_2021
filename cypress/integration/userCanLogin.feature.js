describe('User can enter user data and login', () => {
  
  beforeEach(() => {
    cy.intercept("**api/auth/**", {
      fixture: "userRegistrationResponse.json",
    });
    cy.visit("/");
    cy.get("[data-cy=login-btn]").click();
  });



});