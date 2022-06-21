context("Supervisor", () => {
  const username = "SPV PRD 1";
  const password = "password";

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("secret");
  });

  it("Check untuk user login (Supervisor)", () => {
    cy.login(username, password);
  });

  it("Check card untuk packer", () => {
    cy.packer_card_daily();
  });

  it("Check card untuk packer", () => {
    cy.packer_card_shiftly();
  });
});
