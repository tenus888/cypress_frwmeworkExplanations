class GooglePage {
     navigateToTheGooglePAge() {
        cy.visit('https://www.google.com/')
    }
   
    googleSearchBtnBackgroundColorVerification(){
        //const searchBtn = cy.contains('Google Search')
        const searchBtn = cy.get('input[name="btnK"]')
        searchBtn.should('have.css', 'background-color', 'rgb(248, 249, 250)')
    }
}

export default GooglePage;