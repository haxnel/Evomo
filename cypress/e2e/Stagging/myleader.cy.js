context("Team Leader (Stagging)", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.visit("/");
      cy.login(username, password);
    });

    it("Check daily dan lini card 1 -> HMI", () => {
      cy.get(':nth-child(1) > .ant-row > :nth-child(2) > [data-testid="machine"]', {timeout: 50000}).first().click();
      cy.wait(5000)
      cy.get(':nth-child(3) > .Button__StyledButton-sc-1s4bp2x-0', {timeout: 50000}).click();
      cy.wait(5000);
      cy.get('.ant-page-header-back-button > svg > path', {timeout: 50000}).click()
      cy.wait(5000);
    });

    it("Check daily dan lini card 2 -> HMI", () => {
      cy.get(':nth-child(2) > .ant-row > :nth-child(2) > [data-testid="machine"]', {timeout: 50000}).first().click();
      cy.wait(5000)
      cy.get(':nth-child(3) > .Button__StyledButton-sc-1s4bp2x-0', {timeout: 50000}).click();
      cy.wait(5000);
      cy.get('.ant-page-header-back-button > svg > path', {timeout: 50000}).click()
      cy.wait(5000);
    });
    
    it("Logout", () => {
      cy.logout();
    });
  });
