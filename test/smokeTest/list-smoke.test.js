//const puppeteer = require('puppeteer');
require('module-alias/register');
const puppeteer = require('puppeteer-ie');
const loginPage = require('../e2e/pages/loginPage');
const dashboardPage = require('../e2e/pages/DashboardPage');
const user = require('../e2e/constants/user');
const path = require('../e2e/constants/paths');
const namesConstants = require('../e2e/constants/names');

let browser;
describe('The user creates a list from dashboard page', () => {
  jest.setTimeout(30000);
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
      {
        headless: false,
        args: ['--start-fullscreen']
      }
    );
    page = await browser.newPage();
    //await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(path.APP);
    await page.click(loginPage.emailInput);
    await page.type(loginPage.emailInput,user.USER_NAME);
    await page.click(loginPage.passwordInput);
    await page.type(loginPage.passwordInput, user.PASSWORD_USER);
   
  });

  test('a list should be created', async () => {

    await page.click(loginPage.loginButton);
    await page.waitFor(dashboardPage.addListButton);

    
    await page.click(dashboardPage.addListButton);
    await page.waitFor(dashboardPage.newListIcon);
    await page.click(dashboardPage.newListIcon);
    await page.type(dashboardPage.listNameInput, namesConstants.LIST_NAME);
    await page.keyboard.press('Enter');
    await page.waitFor(dashboardPage.checkName);
    await expect(await page.$eval(dashboardPage.subHeaderTitle, e => e.innerText)).toMatch(namesConstants.ASSERT_DASHBOARD);
  });

  afterEach(async () => {
    await (await page.$(dashboardPage.taskFromSpace)).click({ button: 'right' });
    await page.click(dashboardPage.deleteTaskIcon);
    await page.waitFor(dashboardPage.deleteButton);
    await page.click(dashboardPage.deleteButton);
    await browser.close();
  });
});
