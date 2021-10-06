
describe('Login Page', () => {

it("Testing POST", () => {
    const item = {
      "User_Name":"name name",
      "User_Email":"name@gmail.com",
      "User_Password":"name123",
      "User_Password2":"name123",
  }
    cy.visit("http://localhost:3000/register")
    cy.request("POST", "http://localhost:3000/register", item )
    })

});




    
    
  