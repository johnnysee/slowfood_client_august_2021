describe("User can browser through the app", () => {
  beforeEach(() => {
    cy.intercept("**api/products", {
      fixture: "menuItems.json",
    });
    cy.visit("/");
  });
  it("is expected to display the name of the resturant", () => {
    cy.get("[data-cy=resturant-name]").should(
      "contain",
      "Too Gross For Comfort?"
    );
  });
  it("it is expected to display a header", () => {
    cy.get("[data-cy=header]").should("be.visible");
  });
  it("is expected to display a Home button", () => {
    cy.get("[data-cy=home]").should("be.visible");
  });
  it("is expected to display a Menu button", () => {
    cy.get("[data-cy=menu]").should("be.visible");
  });
  it("is expected to display a About button", () => {
    cy.get("[data-cy=about]").should("be.visible");
  });
  it("is expected to display a signup button", () => {
    cy.get("[data-cy=btn-signup]").should("be.visible");
  });

  it("is expected to display a login button", () => {
    cy.get("[data-cy=login-btn]").should("be.visible");
  });

  it("is expected to display a footer", () => {
    cy.get("[data-cy=footer]").should("contain", "Funny quip goes here");
  });
  it("is expected to display a menu page", () => {
    cy.get("[data-cy=menu]").click();
    cy.get("[data-cy=menu-section]").should("be.visible");
  });
  it("is expected to display a about page", () => {
    cy.get("[data-cy=about]").click();
    cy.get("[data-cy=about-section]").should("be.visible");
  });
});
