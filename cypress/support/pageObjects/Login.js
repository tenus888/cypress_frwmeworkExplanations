class Login {
     navigateToTheLoginPAge() {
        cy.visit('https://www.tkctraining.com/login/index.php')
    }
   
 login1 (login, password){
    const userField = cy.get('input[name="username"').type(login);
    const passwordField = cy.get('input[name="password"').type(password);
    const loginBut = cy.get('button[type="submit"]').click();
    
}
 errorMessage(message){
    const errorMessage = cy.contains ('Invalid login, please try again');
    errorMessage.should('contain',message)
}
}
export default Login;
