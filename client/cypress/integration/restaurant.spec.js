describe("renders the restaurant page", () => {
    it("renders correctly", () => {
        cy.visit("http://localhost:3000/restaurant");
        cy.get("#restaurantlist").should("exist");
    });
});