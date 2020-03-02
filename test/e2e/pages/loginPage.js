
class LoginPage {
  get emailInput() { return ('input#email-input'); }

  get passwordInput() { return ('input#password-input'); }

  get loginButton() { return ('#login-submit'); }
}

module.exports = new LoginPage();
