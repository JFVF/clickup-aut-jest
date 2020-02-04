
class loginPage {
  get emailInput() { return ('input#email-input'); }
  get passwordInput() { return ('input#password-input'); }
  get loginButton() { return ('button#login-submit'); }
 
}
module.exports = new loginPage();
