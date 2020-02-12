const puppeteer = require('puppeteer');
const loginPage = require('../pages/LoginPage');
const dashboardPage = require('../pages/DashboardPage');
const user = require('../constants/user');
const path = require('../constants/paths');
const namesConstants = require('../constants/names');

let browser;
describe('The user creates a list from dashboard page', async () => {
  jest.setTimeout(30000);
  test('a list should be created', async () => {
    browser = await puppeteer.launch(
      {
        headless: true
      }
    );
    const page = await browser.newPage();
    await page.goto(path.APP);
    await page.type(loginPage.emailInput, user.USER_NAME);
    await page.click(loginPage.passwordInput);
    await page.type(loginPage.passwordInput, user.PASSWORD_USER);
    await page.click(loginPage.loginButton);;
    await page.waitFor(dashboardPage.addListButton);
    await page.click(dashboardPage.addListButton);
    await page.waitFor(dashboardPage.newListIcon);
    await page.click(dashboardPage.newListIcon);
    await page.type(dashboardPage.listNameInput, namesConstants.LIST_NAME);
    await page.keyboard.press('Enter');
    await page.waitFor(dashboardPage.checkName);
    await expect(await page.$eval(dashboardPage.checkName, e => e.innerText)).toMatch(namesConstants.LIST_NAME);
    await browser.close();
  });
});
