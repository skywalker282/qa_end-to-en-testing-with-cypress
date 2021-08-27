const { rejects } = require("assert");
const { url } = require("inspector");
const { get } = require("react-hook-form");

describe("Connectivity test", () => {
  it('finds the content "permissivness" ', () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Connexion").then((submit) => {
      cy.url().should("include", "local");
      cy.get("input")
        .each((elt, index, list) => {
          if (index !== 4) {
            cy.wrap(elt).type("just nothing");
          }
        })
        .then((result) => {
          submit.click();
          cy.on("uncaught:exception", (err, runnable, promise) => {
            if (promise) {
              return false;
            }
          });
          cy.contains("settings").click();
          cy.contains("compte").click();
          cy.get("div").each((elt, index, elts) => {
            if (index === 0) {
              cy.wrap(elt).click();
              cy.get("input")
                .each((elt, index, elts) => {
                  if (index !== 3) {
                    cy.wrap(elt).type("just nothing");
                  }
                  cy.wrap(elt).click();
                })
                .then(() => {
                  cy.contains("Supprimer").each((elt, index, elts) => {
                    if (index === 0) {
                      cy.wrap(elt).click();
                      cy.get("input").each((elt, index, elts) => {
                        if (index !== 3) {
                          cy.wrap(elt).type("just nothing");
                        } else {
                          async function fillForm() {
                            await cy.wrap(elt).click();
                          }
                          fillForm().then(() => {
                            cy.contains("Oui").click({ force: true });
                            cy.contains("OK").click({ force: true });
                          });
                        }
                      });
                    }
                  });
                });
            }
          });
        });
    });
  });
});
