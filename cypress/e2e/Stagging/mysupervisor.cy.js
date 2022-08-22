context("Supervisor (Superuser) Line 1", () => {
    const username = "mysupervisor";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login (team leader)", () => {
      cy.login(username, password);
      cy.get(".ant-breadcrumb-link").click();
      cy.contains("Packaging Line 1 PSPD").click();
    });

    it("Check Parameter lini saat masuk", () => {
      cy.lini();
    });

    it("Check daily dan line packer Mesin", () => {
      cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-btn').click()
      cy.packer_card_daily();
    });

    it("Check Shiftly dan line packer Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check logout", () => {
      cy.logout();
    });
  });