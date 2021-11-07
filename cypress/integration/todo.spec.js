describe("TODOS page", () => {
  it("should add a new TODO", () => {
    cy.visit("todo")
      .get("input")
      .type("new TODO")
      .get("button[type=submit]")
      .click()
      .get(".list-group > .list-group-item:first > p")
      .first()
      .should("contain", "1. new TODO");
  });

  it("should toogle a previous TODO", () => {
    cy.visit("/todo")
      .get("input")
      .type("new TODO")
      .get("button[type=submit]")
      .click()
      .get(".list-group > .list-group-item:first > p")
      .first()
      .click()
      .should("have.class", "complete");
  });
  it("removes todo item", () => {
    cy.visit("/todo")
      .get("input")
      .type("new TODO")
      .get("button[type=submit]")
      .click();
    cy.contains("Borrar").click();
    cy.get(".list-group").find("li").should("have.length", 0);
  });
});
