const puppeteer = require('puppeteer');
const loginPage = require('../pages/LoginPage');
const dashboardPage = require('../pages/DashboardPage');
const boardPage = require('../pages/BoardPage');
const user = require('../constants/user');
const path = require('../constants/paths');
const namesConstants = require('../constants/names');

let browser;
describe('The user moves a task from To do status to COMPLETE status', async () => {
  jest.setTimeout(30000);
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
      {
        headless: true,
        args: ['--start-fullscreen']
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

  test('a task should be moved to COMPLETE status', async () => {
    await page.click(dashboardPage.addListButton);
    await page.waitFor(dashboardPage.newListIcon);
    await page.click(dashboardPage.newListIcon);
    await page.type(dashboardPage.listNameInput, namesConstants.LIST_NAME);
    await page.keyboard.press('Enter');
    await page.waitFor(boardPage.nameTaskByListTabInput);
    await page.click(boardPage.nameTaskByListTabInput);
    for (let i = 1; i < 4; i++) {
      await page.type(boardPage.nameTaskByListTabInput, namesConstants.ASSERT_TASK + " " + i);
      await page.keyboard.press('Enter');
    }
    await page.waitFor(boardPage.nameTask);
    const status = await page.$$(dashboardPage.boardTab);
    await (await (status))[1].click();
    await page.waitFor(boardPage.headerBoard);
    await page.waitFor(2000);
    await page.hover(boardPage.taskCard);
    await page.waitFor(boardPage.doneTaskIcon);
    await page.click(boardPage.doneTaskIcon);
    await page.waitFor(2000);
    const origin = await (await page.$$(boardPage.taskCard))[0];
    const destinationToDo = await (await page.$$(boardPage.taskCard))[1];
    const destinationComplete = await (await page.$$(boardPage.taskCard))[2];
    const boundingBoxOrigin = await origin.boundingBox();
    const boundingBoxDestinationToDo = await destinationToDo.boundingBox();
    const boundingBoxDestinationComplete = await destinationComplete.boundingBox();
    await page.mouse.move(boundingBoxOrigin.x + boundingBoxOrigin.width / 2, boundingBoxOrigin.y + boundingBoxOrigin.height / 2);
    await page.mouse.down();
    await page.mouse.move(boundingBoxDestinationToDo.x, boundingBoxDestinationToDo.y);
    await page.mouse.move(boundingBoxDestinationComplete.x, boundingBoxDestinationComplete.y);
    await page.mouse.up();
    await expect(await page.$eval(boardPage.taskCard, e => e.innerText)).toMatch(namesConstants.ASSERT_TASK + ' 3');
  });
  afterEach(async () => {
    await (await page.$(dashboardPage.taskFromSpace)).click({ button: 'right' });
    await page.click(dashboardPage.deleteTaskIcon);
    await page.waitFor(dashboardPage.deleteButton);
    await page.click(dashboardPage.deleteButton);
    await browser.close();
  });
});
