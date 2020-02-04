const puppeteer = require('puppeteer');
const loginPage = require('../pages/loginPage');
const user = require('../constants/user');
const path = require('../constants/paths');
const app = 'https://app.clickup.com/';
let browser;

test('The user should be logged', async () => {
  jest.setTimeout(30000);
  browser = await puppeteer.launch(
    {
      headless: false
    }
  );

  const page = await browser.newPage();
  await page.goto(app);
  await page.click(loginPage.emailInput);
  await page.type(loginPage.emailInput, user.USER_NAME);
  await page.click(loginPage.passwordInput);
  await page.type(loginPage.passwordInput, user.PASSWORD_USER);
  await page.click(loginPage.loginButton);
  await page.screenshot({path: path.SCREENSHOT_LOGIN});

  await browser.close();
});
