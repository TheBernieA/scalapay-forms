describe("Multi-Step Form E2E", () => {
  it("completes the form successfully", () => {
    cy.visit("/form");

    // Step 1
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="firstName"]').type("Mario");
    cy.get('input[name="lastName"]').type("Rossi");
    cy.get('input[name="dateOfBirth"]').type("2001-01-01");
    cy.get('input[name="fiscalCode"]').type("ABCDEF85S14F112Y");

    cy.get('form[role="form"]').submit();

    // Step 2
    cy.get('input[name="street"]').should("be.visible").type("Via Roma");
    cy.get('input[name="number"]').type("10");
    cy.get('input[name="postalCode"]').type("00100");
    cy.get('input[name="province"]').type("RM");
    cy.get('input[name="city"]').type("Roma");

    cy.get('select[name="country"]').select("IT");

    cy.get('input[name="currentlyLiveHere"]');
    cy.get('input[name="isPEP"]').check({ force: true });

    cy.get('button[type="submit"]').click();

    // MOCKINNG POST REQ. TO AVOID ACTUAL NETWORK CALLS
    cy.intercept("POST", "/submit", {
      statusCode: 200,
      body: {},
    });

    // Check success behavior
    // cy.on("window:alert", (txt) => {
    //   expect(txt).to.contains("Dati inviati con successo");
    // });

    // cy.url().should("include", "/form-success");
  });
});
