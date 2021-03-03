/// <reference types="Cypress"/>
describe("Wikipedia home page teste",()=>{
    it("Navigate to English page",()=>{
        cy.visit("https://www.wikipedia.org");
        cy.get('#js-link-box-en').click();
        cy.get('#mp-topbanner').should("be.visible");   //top banner should be visible
        cy.get('.mw-wiki-logo').should("be.visible");   //logo should be visible
        cy.get('#mp-topbanner').should("contain","Welcome to Wikipedia");    //banner should contain Welcome to Wikipedia
    });
    it.only("Test search in main page",()=> {   //DEBUG!!!!!!! delete .only
        cy.visit("https://www.wikipedia.org");  
        cy.get('#searchInput').type("Testing");
        cy.get('.pure-button').click();
        cy.get('#firstHeading').should("contain","Testing");
    });
    it("Read from file",()=>{
      cy.readFile("testdata.json").then((temp)=>{
          console.log(temp.goodLogin[0].username);
      });        
      
    });
});