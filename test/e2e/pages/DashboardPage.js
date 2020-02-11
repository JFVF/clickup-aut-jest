class DashboardPage {
  get addListButton() { return ('div[class = "sidebar-section__plus-icon icon cu-dropdown__toggle"]'); }
  get newListIcon() { return ('div[class = "cu-dropdown-list-item__icon cu-dropdown-list-item__icon_new-list icon ng-star-inserted"]'); }
  get listNameInput() { return ('input[class = "nav-section-maker__input ng-untouched ng-pristine ng-valid"]'); }
  get passwordInput() { return ('input#password-input'); }
  get loginButton() { return ('button#login-submit'); }

  get nameList() { return ('cu-folderless > div > cu-nav-section'); }  
  get nameListX() { return ('cu-folderless > div > cu-nav-section'); }
  get checkName() { return ('div[class = "cu-list-group__name"]'); }

  
}
module.exports = new DashboardPage();
