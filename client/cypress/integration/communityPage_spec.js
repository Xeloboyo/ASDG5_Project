/* eslint-disable no-undef */
describe("Community page", () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec(" npm start");
    // cy.exec("cd - ");
    cy.exec("cd -  && npm run server");
    // cy.exec("ls");
    // cy.exec("cd database/ ");
    // cy.exec("nodemon database/Server.js ");

    // cy.exec("cd client && npm start");
  });
  it("successfully loads", () => {
    cy.visit("http://localhost:3000"); // change URL to match your dev URL
  });
});
