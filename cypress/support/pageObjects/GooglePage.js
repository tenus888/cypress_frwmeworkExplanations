class GooglePage {
    static navigateToTheGooglePAge() {
        cy.visit('https://www.google.com/')
    }
   
    static googleSearchBtnBackgroundColorVerification(){
        //const searchBtn = cy.contains('Google Search')
        const searchBtn = cy.get('input[name="btnK"]')
        searchBtn.should('have.css', 'background-color', 'rgb(248, 249, 250)')
    }
}

export default GooglePage;