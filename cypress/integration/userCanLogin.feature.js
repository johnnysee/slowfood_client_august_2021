describe("User can enter user data and login", () => {
  beforeEach(() => {
    cy.intercept("POST, **api/auth/sign_in", {
      fixture: "loginFixture.json",
    }).as("loginResponse");
    cy.visit("/");
    cy.get("[data-cy=login-btn]").click();
  });

  it("is expected to have two input fields and a submit button", () => {
    cy.get("form").children().should("have.length", 3);
  });

  describe("", () => {
    before(() => {
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=submission-login]").click();
    });
    it("is expected that the response includes a success status", () => {
      cy.wait("@loginResponse").its("response.statusCode").should("eq", 200);
    });
    it("is expected to bring you to the Menu Page", () => {
      cy.get("[data-cy=starter-tab]").should("be.visible");
    });
  });
});
