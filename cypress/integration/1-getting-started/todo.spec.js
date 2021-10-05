// /// <reference types="cypress" />



// describe('Register Page', () => {
//   beforeEach(() => {
//     // Cypress starts out with a blank slate for each test
//     // so we must tell it to visit our website with the `cy.visit()` command.
//     // Since we want to visit the same URL at the start of all our tests,
//     // we include it in our beforeEach function so that it runs before each test
//     // cy.visit('https://http://localhost:3000/register')
//   })

//   it("Testing empty input", () => {
//     cy.visit("https://http://localhost:3000/register"); // change URL to match your dev URL

//     cy.get("input[id=formTitle]").type("Top 10 apple");
//     cy.get("button[type=submit]").click();
//     cy.get("div[name=messageDatabase]").should((elem) => {
//       // Expect the element's text to exactly equal the
//       // string, not just contain it
//       expect(elem.text()).to.equal("Empty input fields!");
//     });
//   });


 
