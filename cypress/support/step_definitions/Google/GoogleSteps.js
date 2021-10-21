import {When,And} from "cypress-cucumber-preprocessor/steps";

import GooglePage from "../../pageObjects/GooglePage.js";



When ('user uses google URL, user should be able to place on the main google page', () =>{
    GooglePage.navigateToTheGooglePAge();
})

And ('background color of the Google_Search btn should be_rgb_248_249_250', () => {
    cy.performanceReport()
    GooglePage.googleSearchBtnBackgroundColorVerification();
})

//I love USA