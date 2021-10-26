import { When,Then} from "cypress-cucumber-preprocessor/steps";
import Login from "../../pageObjects/Login.js";

const loginPage = new Login();

When('user navigates to the page',()=>{
    loginPage.navigateToTheLoginPAge();
})
When ('user enters wrong {string} and wrong {string}', (login,password) =>{
    loginPage.login1(login,password);
})
Then ('user should be able to receive error {string}', (message) =>{
    loginPage.errorMessage(message)
})


