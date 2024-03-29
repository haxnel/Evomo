describe("E2e Testing Application production HMI (Shiftly)", () => {
  context("Team Leader (Supervisor) 1 Line 1", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily1();
    });

    it("Check shiftly Filler dan lini card 1 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 2 Line 1", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily1();
    });

    it("Check shiftly Filler dan lini card 1 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 3 Line 1", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily1();
    });

    it("Check shiftly Filler dan lini card 1 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 1 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 4 Line 2", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily1();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 4 Line 7", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 7 pada Card 1 -> HMI", () => {
      cy.masuk_line7();
      cy.lini_shiftly_card_daily1();
    });
    it("Check daily Filler dan lini card 1 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_daily1_1();
    });

    it("Check daily Filler dan lini card 1 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check daily Filler dan lini card 1 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_daily2();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_shiftly2();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1_1();
    });

    //CARD 2
    it("Check daily Packer dan lini card 2 Line 7 pada Card 1 -> HMI", () => {
      cy.masuk_line7();
      cy.lini_shiftly_card_daily2();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_daily2_2();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2_2();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 5 Line 2", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily1();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 5 Line 7", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 7 pada Card 1 -> HMI", () => {
      cy.masuk_line7();
      cy.lini_shiftly_card_daily1();
    });
    it("Check daily Filler dan lini card 1 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_daily1_1();
    });

    it("Check daily Filler dan lini card 1 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check daily Filler dan lini card 1 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_daily2();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_shiftly2();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1_1();
    });

    //CARD 2
    it("Check daily Packer dan lini card 2 Line 7 pada Card 1 -> HMI", () => {
      cy.masuk_line7();
      cy.lini_shiftly_card_daily2();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_daily2_2();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2_2();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 6 Line 2", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily1();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 6 Line 7", () => {
    const username = "";
    const password = "";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login", () => {
      cy.login(username, password);
    });

    //CARD 1
    it("Check daily Filler dan lini card 1 Line 7 pada Card 1 -> HMI", () => {
      cy.masuk_line7();
      cy.lini_shiftly_card_daily1();
    });
    it("Check daily Filler dan lini card 1 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_daily1_1();
    });

    it("Check daily Filler dan lini card 1 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check daily Filler dan lini card 1 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_daily2();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_shiftly2();
    });

    it("Check shiftly Filler dan lini card 1 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1_1();
    });

    //CARD 2
    it("Check daily Packer dan lini card 2 Line 7 pada Card 1 -> HMI", () => {
      cy.masuk_line7();
      cy.lini_shiftly_card_daily2();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_daily2_2();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check daily Packer dan lini card 2 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_daily2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 2 -> Mesin", () => {
      cy.packer_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 7 pada Card 2 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2_2();
    });

    it("Logout", () => {
      cy.logout();
    });
  });
});
