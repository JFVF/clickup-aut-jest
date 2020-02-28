class DashboardPage {

  get addListButton() { return ('div[class = "sidebar-section__plus-icon icon cu-dropdown__toggle"]'); }

  get newListIcon() { return ('div[class = "cu-dropdown-list-item__icon cu-dropdown-list-item__icon_new-list icon ng-star-inserted"]'); }

  get listNameInput() { return ('input[class = "nav-section-maker__input ng-untouched ng-pristine ng-valid"]'); }

  get passwordInput() { return ('input#password-input'); }

  get loginButton() { return ('button#login-submit'); }

  get checkName() { return ('a[class = "nav-section__name"]'); }

  get subHeaderTitle() { return ('div[class = "sidebar-section__subheader-title"]'); }

  get boardTab() { return ('cu-data-view-item > a > div > cu-editable'); }

  get taskFromSpace() { return ('a[class = nav-section__name]'); }

  get deleteTaskIcon() { return ('a[cutooltip = Delete]'); }

  get deleteButton() { return ('button[class = "cu-btn cu-btn_danger"]'); }
}

module.exports = new DashboardPage();
