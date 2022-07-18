describe("E2e Testing Application production HMI (Card Daily)", () => {

  context("Team Leader (Supervisor) 4 Line 2", () => {
    const username = "LDR PRD 4";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.visit("/");
      cy.login(username, password);
    });

    //Filler
    //Card 1

    it("Check daily Filler dan lini card 1 Line 2 -> HMI", () => {
      cy.lini_card_daily1();
    });

    it("Check daily Filler dan lini card 1 Line 2 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 -> HMI", () => {
      cy.lini_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get('.ant-page-header-back-button > svg').click()
    });

    //Packer
    //Card 2

    it("Check daily Packer dan lini card 2 Line 2 -> HMI", () => {
      cy.lini_card_daily2();
    });

    it("Check daily Packer dan lini card 1 Line 2 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 -> HMI", () => {
      cy.lini_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 1 Line 2 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  //Line 7
  context("Team Leader 4 (Supervisor) Line 7", () => {
    const username = "LDR PRD 4";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.visit("/");
      cy.login(username, password);
    });

    //Filler//

    //Card 1
    it("Check daily Filler dan lini card 1 Line 7 -> (HMI)", () => {
      cy.masuk_line7();
      cy.lini_card_daily1();
    });

    it("Check daily Filler dan lini card 1 Line 7 -> (Mesin)", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 -> (HMI)", () => {
      cy.lini_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 -> (Mesin)", () => {
      cy.packer_card_shiftly();
    });

    it("Check daily Filler dan lini card 2 Line 7 -> (HMI)", () => {
      cy.lini_card_daily11();
    });

    it("Check daily Filler dan lini card 2 Line 7 -> (Mesin)", () => {
      cy.packer_card_daily11();
    });

    it("Check shiftly Filler dan lini card 2 Line 7 -> (HMI)", () => {
      cy.lini_card_shiftly11();
    });

    it("Check shiftly Filler dan lini card 2 Line 7 -> (Mesin)", () => {
      cy.packer_card_shiftly11();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //Card 2

    it("Check daily Packer dan lini card 1 Line 7 -> (HMI)", () => {
      cy.masuk_line7();
      cy.masuk_packer_card();
    });

    it("Check daily Packer dan lini card 1 Line 7 -> (Mesin)", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Packer dan lini card 1 Line 7 -> (HMI)", () => {
      cy.lini_card_shiftly1();
    });

    it("Check shiftly Packer dan lini card 1 Line 7 -> (Mesin)", () => {
      cy.packer_card_shiftly();
    });

    it("Check daily Packer dan lini card 2 Line 7 -> (HMI)", () => {
      cy.lini_card_daily11();
    });

    it("Check daily Packer dan lini card 2 Line 7 -> (Mesin)", () => {
      cy.packer_card_daily11();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 -> (HMI)", () => {
      cy.lini_card_shiftly11();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 -> (Mesin)", () => {
      cy.packer_card_shiftly11();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  
  context("Team Leader 1 (Supervisor) Line 1", () => {
    const username = "LDR PRD 1";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.visit("/");
      cy.login(username, password);
    });

    it("Check daily Filler dan lini card 1 Line 1 -> HMI", () => {
      cy.lini_card_daily1();
    });

    it("Check daily Filler dan lini card 1 Line 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Filler dan lini card 1 Line 1 -> HMI", () => {
      cy.lini_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get('.ant-page-header-back-button > svg').click()
    });

    it("Check daily Packer dan lini card 2 Line 1 -> HMI", () => {
      cy.lini_card_daily2();
    });

    it("Check daily Packer dan lini card 1 Line 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Packer dan lini card 2 Line 1 -> HMI", () => {
      cy.lini_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 1 Line 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get('.ant-page-header-back-button > svg').click()
    });

    it("Logout", () => {
      cy.logout();
    });
  });
  
});
