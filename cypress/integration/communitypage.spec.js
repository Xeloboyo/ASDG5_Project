/* eslint-disable no-undef */
describe("Community page", () => {
  // run server and database on pipeline
  beforeEach(() => {
    // reset and seed the database prior to every test
    // cy.exec("npm run start-server");
  });

  it("Testing empty input", () => {
    cy.visit("http://localhost:3000/communitypageform"); // change URL to match your dev URL

    cy.get("input[id=formTitle]").type("Top 10 apple");
    cy.get("button[type=submit]").click();
    cy.get("div[name=messageDatabase]").should((elem) => {
      // Expect the element's text to exactly equal the
      // string, not just contain it
      expect(elem.text()).to.equal("Empty input fields!");
    });
  });

  it("Testing edit community page", () => {
    cy.visit("http://localhost:3000/communitypageedit"); // change URL to match your dev URL

    cy.get("a[name=buttonContainer]").eq(0).click({ force: true });

    cy.get("input[id='formTitle']").should("not.be.empty");
    cy.get("input[id='floatingSelectGrid']").should("not.be.empty");
    cy.get("input[id='exampleForm.ControlTextarea1']").should("not.be.empty");

    cy.get("input[id=formTitle]").clear();
    cy.get("button[type=submit]").click();
    cy.get("div[name=messageDatabase]").should((elem) => {
      // Expect the element's text to exactly equal the
      // string, not just contain it
      expect(elem.text()).to.equal("Empty input fields!");
    });
  });
});
