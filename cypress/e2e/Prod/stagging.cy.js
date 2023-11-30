describe("Testing Reason Staging", () => {
  context("Enggineering bagian reason", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login (team leader)", () => {
      cy.visit("/");
      cy.login(username, password);
      cy.wait(3000);
      cy.visit("/reason", { timeout: 50000 });
    });
    /*
    it("Check Reason", () => {
      cy.reason();
    });
    */
    it("Check pembuatan reason grup", () => {
      cy.add_reason_grup();
    });

    it("Check edit reason grup", () => {
      cy.edit_reason_grup();
    });

    it("Check pembuatan reason name", () => {
      cy.add_reason_name();
      cy.visit("/reason");
      cy.wait(5000);
    });

    it("Edit reason name", () => {
      cy.edit_reason_name();
    });

    it("Delete reason name", () => {
      cy.delete_reason_name();
    });

    it("Check delete reason grup", () => {
      cy.delete_reason_grup();
    });

    it("Logout", () => {
      cy.logout();
    });
  });
});
