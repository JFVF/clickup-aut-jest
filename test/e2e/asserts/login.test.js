const puppeteer = require('puppeteer');
const loginPage = require('../pages/loginPage');
const user = require('../constants/user');
const path = require('../constants/paths');
const nameElements = require('../constants/names');
const dashboardPage = require('../pages/DashboardPage');
let browser;

test('The user should be logged', async () => {
  jest.setTimeout(30000);
  browser = await puppeteer.launch(
    {
      headless: false
    }
  );

  const page = await browser.newPage();
  await page.goto(path.APP);
  await page.type(loginPage.emailInput, user.USER_NAME);
  await page.click(loginPage.passwordInput);
  await page.type(loginPage.passwordInput, user.PASSWORD_USER);
  await page.click(loginPage.loginButton);
  await page.waitFor(dashboardPage.addListButton);
  await expect(page.title()).resolves.toMatch(nameElements.ASSERT_DASHBOARD);
  await browser.close();
});
