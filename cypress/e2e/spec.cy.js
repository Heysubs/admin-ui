describe("User Authentication", () => {
  it("successfully logs in with valid student credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214684@mhs.dinus.ac.id")
      .should("have.value", "111202214684@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");
    cy.get("header");
  });
 
  it("displays validation error for missing @ symbol in student email", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214684mhs.dinus.ac.id")
      .should("have.value", "111202214684mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();
    cy.get("div").contains("Invalid email address format");
  });

  it("displays validation error for missing domain in student email", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214684@")
      .should("have.value", "111202214684@");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();
    cy.get("div").contains("Invalid email address format");
  });

  it("displays validation error for missing dot in student email", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214684@mhsdinusacid")
      .should("have.value", "111202214684@mhsdinusacid");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();
    cy.get("div").contains("Invalid email address format");
  });
});

describe("Dashboard Features", () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://jwt-auth-eight-neon.vercel.app/login').as('loginRequest');
    cy.intercept('GET', 'https://jwt-auth-eight-neon.vercel.app/bills').as('getBills');
    cy.intercept('GET', 'https://jwt-auth-eight-neon.vercel.app/goals').as('getGoals');

    cy.visit("http://localhost:5173/login");

    cy.get("input#email")
      .should("be.visible")
      .type("111202214684@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .type("123456");

    cy.get("button").contains("Login").click();

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.wait(['@getBills', '@getGoals']);
    cy.location('pathname', { timeout: 10000 }).should('eq', '/');
  });

  it("renders all essential dashboard components", () => {
    cy.get("nav").should("be.visible");
    cy.get("header").should("be.visible");
    cy.get("main").should("be.visible");

    cy.contains("Total Balance").should("exist");
    cy.contains("Goals").should("exist");
    cy.contains("Bills").should("exist");
    cy.contains("Recent Transaction").should("exist");
    cy.contains("Statistics").should("exist");
    cy.contains("Expenses Breakdown").should("exist");
  });

  it("shows accurate balance information", () => {
    cy.contains("Total Balance").parent().within(() => {
      cy.get("a").contains("All account").should("be.visible");
      cy.contains("Account Type").should("be.visible");
      cy.get(".text-2xl.font-bold").should("be.visible");
    });
  });

  it("displays goals with proper formatting and data", () => {
    cy.wait('@getGoals');
    
    cy.contains("div", "Goals")
      .parents(".bg-special-mainBg")
      .within(() => {
        cy.get("span.text-2xl.font-bold").should("exist");
        cy.get("span.text-gray-02").contains("Target Achieved").should("exist");
        cy.get("span.text-gray-02").contains("This Month Target").should("exist");
        cy.get("div.bg-gray-05").should("exist");
      });
  });

  it("renders bills section with complete information", () => {
    cy.wait('@getBills');
    
    cy.contains("div", "Bills")
      .parents(".bg-special-mainBg")
      .first()
      .within(() => {
        cy.get("div.lg\\:flex").each(($billItem) => {
          cy.wrap($billItem).within(() => {
            cy.get("div.bg-special-bg").should("exist");
            cy.get("span.text-xs").should("exist");
            cy.get("span.font-bold").should("exist");
            cy.get("span.p-2.border.rounded-lg").should("exist");
          });
        });

        cy.get("img").should("exist");
        cy.contains("Last Charge").should("exist");
      });
  });

  it("supports transaction filtering functionality", () => {
    cy.contains("Recent Transaction").parent().within(() => {
      cy.contains("button", "All").click().should("have.class", "border-primary");
      cy.contains("button", "Revenue").click().should("have.class", "border-primary");
      cy.contains("button", "Expense").click().should("have.class", "border-primary");
    });
  });

  it("renders statistics chart correctly", () => {
    cy.contains("Statistics").parent().within(() => {
      cy.get("select").should("have.value", "Weekly Comparison");
      cy.get(".h-72").should("be.visible");
    });
  });

  it("presents expenses breakdown with proper formatting", () => {
    cy.contains("Expenses Breakdown").parent().within(() => {
      cy.get(".bg-special-bg").should("be.visible");
      cy.get(".text-gray-02").should("be.visible");
      cy.get(".font-bold.text-lg").should("be.visible");
    });
  });
});