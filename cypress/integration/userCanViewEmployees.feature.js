describe("User can view employees", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/people", { fixture: "people.json" });
    cy.visit("/");
  });

  it("is expected to display 10 Star Wars characters", () => {
    cy.get("[data-cy=employee-list]").children().should("have.length", 10);
  });
});
