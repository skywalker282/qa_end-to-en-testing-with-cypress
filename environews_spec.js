describe("Web app connectivity test", () => {
  // it("test api routes", () => {
  //   cy.visit();
  // });
  it("open the environews website", () => {
    cy.visit("https://www.environews-rdc.org/");
    cy.visit("https://www.environews-rdc.org/article/conservation");
    cy.visit("https://www.environews-rdc.org/article/sante");
    cy.visit("https://www.environews-rdc.org/article/foret");
    cy.visit("https://www.environews-rdc.org/article/environnement");
    cy.visit("https://www.environews-rdc.org/article/biodiversite");
    cy.visit("https://www.environews-rdc.org/article/climat");
    cy.visit("https://www.environews-rdc.org/article/autres");
    cy.visit("https://www.environews-rdc.org/redaction");
    cy.visit("https://www.environews-rdc.org/infographie");
    cy.visit("https://www.environews-rdc.org/notre-chaine-tele");
    cy.visit("https://www.environews-rdc.org/documentaire");
    cy.visit("https://www.environews-rdc.org/emissions");
    cy.visit("https://www.environews-rdc.org/motion-design");
    cy.visit("https://www.environews-rdc.org/spot-publicitaire");
    cy.visit("https://www.environews-rdc.org/contact");
  });
});
