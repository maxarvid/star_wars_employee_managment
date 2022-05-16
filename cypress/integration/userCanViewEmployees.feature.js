describe("User can view employees", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display 10 Star Wars characters", () => {
    cy.get("[data-cy=employee-list]").should("have.length", 10);
  });
});
