const puppeteer = require('puppeteer');
const loginPage = require('../pages/LoginPage');
const dashboardPage = require('../pages/DashboardPage');
const boardPage = require('../pages/BoardPage');
const user = require('../constants/user');
const path = require('../constants/paths');
const namesConstants = require('../constants/names');

let browser;
describe('The user creates a task', async () => {
  jest.setTimeout(30000);
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
      {
        headless: false,
        args: ['--start-fullscreen'],
        slowMo: 40
      }
    );
    page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(path.APP);
    await page.keyboard.type(user.USER_NAME);
    await page.click(loginPage.passwordInput);
    await page.type(loginPage.passwordInput, user.PASSWORD_USER);
    await page.click(loginPage.loginButton);
    await page.waitFor(dashboardPage.addListButton);
  })

  test('a task should be created', async () => {
    await page.click(dashboardPage.addListButton);
    await page.waitFor(dashboardPage.newListIcon);
    await page.click(dashboardPage.newListIcon);
    await page.type(dashboardPage.listNameInput, namesConstants.LIST_NAME);
    await page.keyboard.press('Enter');
    await page.waitFor(dashboardPage.checkName);
    await page.waitFor(3000);
    await page.click(boardPage.nameTaskByListTabInput);
    await page.type(boardPage.nameTaskByListTabInput, namesConstants.ASSERT_TASK);
    await page.keyboard.press('Enter');
    await page.waitFor(boardPage.nameTask);
    await expect(await page.$eval(boardPage.nameTask, e => e.innerText)).toMatch(namesConstants.ASSERT_TASK);
  });

  afterEach(async () => {
    await (await page.$(dashboardPage.taskFromSpace)).click({ button: 'right' });
    await page.click(dashboardPage.deleteTaskIcon);
    await page.click(dashboardPage.deleteButton);
    await browser.close();
  });
});
