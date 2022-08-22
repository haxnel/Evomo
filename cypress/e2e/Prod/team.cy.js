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
      cy.get(".ant-page-header-back-button > svg").click();
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
});

describe("E2e Testing Application production HMI (Shiftly)", () => {
  context("Team Leader (Supervisor) 4 Line 2", () => {
    const username = "LDR PRD 4";
    const password = "password";

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

    it("Check daily Filler dan lini card 1 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 4 Line 7", () => {
    const username = "LDR PRD 4";
    const password = "password";

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
    const username = "LDR PRD 5";
    const password = "password";

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

    it("Check daily Filler dan lini card 1 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 5 Line 7", () => {
    const username = "LDR PRD 5";
    const password = "password";

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
    const username = "LDR PRD 6";
    const password = "password";

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

    it("Check daily Filler dan lini card 1 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly1();
    });

    it("Check shiftly Filler dan lini card 1 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    //CARD 2

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_daily2();
    });

    it("Check daily Packer dan lini card 2 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_daily();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> HMI", () => {
      cy.lini_shiftly_card_shiftly2();
    });

    it("Check shiftly Packer dan lini card 2 Line 2 pada Card 1 -> Mesin", () => {
      cy.packer_card_shiftly();
      cy.get(".ant-page-header-back-button > svg > path").click();
    });

    it("Logout", () => {
      cy.logout();
    });
  });

  context("Team Leader (Supervisor) 6 Line 7", () => {
    const username = "LDR PRD 6";
    const password = "password";

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
