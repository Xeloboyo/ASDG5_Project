describe("renders the add restaurant page", () => {
    it("renders correctly", () => {
        cy.visit("http://localhost:3000/restaurantadd");
        
    });

    it("the form can be filled", () => {
        cy.visit("http://localhost:3000/restaurantadd");
        cy.get("form");

        cy.get('input[name="restaurantname"]')       
            .type("Testing Restaurant")
            .should("have.value", "Testing Restaurant");
            
        cy.get('input[name="restaurantemail"]')       
            .type("TestingRestaurant@gmail.com")
            .should("have.value", "TestingRestaurant@gmail.com");
        
        cy.get('input[name="restaurantaddress"]')       
            .type("123 Testing Restaurant Street")
            .should("have.value", "123 Testing Restaurant Street");

        cy.get('input[name="restaurantnumber"]')       
            .type("012345678")
            .should("have.value", "012345678");           

        cy.get('input[name="restaurantrating"]')       
            .type("05")
            .should("have.value", "005");
        
        cy.get('input[name="restaurantcapacity"]')       
            .type("020")
            .should("have.value", "0020");

        cy.get("form").submit();
    })


});