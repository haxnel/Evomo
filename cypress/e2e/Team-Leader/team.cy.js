describe("E2e Testing Application production HMI (Shiftly)", () => {
  context("Team Leader sesuai UAT", () => {
    const username = "team_leader";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.visit("/");
      cy.login(username, password);
    });

    it("Cek Daily HMI", () => {
      cy.wait(3000);
      cy.get('[data-testid="machine"]').click();
    });

    it("Cek Icon ascending descending Daily HMI", () => {
      cy.wait(4000);
      cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0").click();
      cy.wait(3000);
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Cek Shiftly HMI", () => {
      cy.wait(3000);
      cy.get('[data-testid="shiftly-btn"]').click();
      cy.wait(1500);
      cy.get('[data-testid="machine"]').click();
    });

    it("Cek Icon ascending descending Shiftly HMI", () => {
      cy.wait(4000);
      cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0").click();
      cy.wait(3000);
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });
});
