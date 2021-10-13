import {When} from "cypress-cucumber-preprocessor/steps";

import GooglePage from "../../pageObjects/GooglePage.js";

When ('user uses google URL, user should be able to place on the main google page', () =>{
    GooglePage.navigateToTheGooglePAge();
})