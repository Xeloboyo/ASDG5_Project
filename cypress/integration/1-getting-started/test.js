
describe('Login Page', () => {

  it("Testing GET", () => {
    cy.visit("http://localhost:3000/login")
    cy.request("GET", "http://localhost:3000/login").then((response) => {
      expect(response).to.have.property("status", 200)
      expect(response.body).to.not.be.null
    }) 

    
    });
  });


 
