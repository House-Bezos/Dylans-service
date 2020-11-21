const puppeteer = require('puppeteer');
const compURL = 'http://localhost:3003/';

// if using enzyme (good for testing react) use react 16

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless:false,
    slowMo: 80,
    args: [`--window-size=${width}, ${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('My first jest test', () => {

  beforeEach( async () => {
    await page.goto(compURL, {waitUntil: 'networkidle2'});
  });

  //tests go here
  test('component title is as expected', async () => {
    let div = '.title';
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 1 of 3 | Start over');
  });
});

describe('Unit Tests', () => {

  beforeEach( async () => {
    await page.goto(compURL, {waitUntil: 'networkidle2'});
  });

  test('Right button goes to next page', async () => {
    // go to page 2
    await page.click('#right');
    const title = await page.$eval('.title', e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 2 of 3 | Start over');
  });

  test('Left button goes to previous page', async () => {
    await page.click('#right');
    await page.click('#left')
    const title = await page.$eval('.title', e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 1 of 3 | Start over');
  });

  test('Start button goes to page 1', async () => {
    await page.click('#right');
    await page.click('.startOver')
    const title = await page.$eval('.title', e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 1 of 3 | Start over');
  });
});

describe('Integration Tests for API and db', () => {

//   beforeEach( async () => {
//     await page.goto(compURL, {waitUntil: 'networkidle2'});
//   });

//   const superRequest = require('supertest');
//   let request = superRequest(compURL);

// // null means a good request, 404 will still pass but will console an err
//   test('Get to /relatedProducts/all returns data', async () => {
//     request.get('relatedProducts/all').expect(200, (err) => {
//       console.log(err);
//     });
//   });
 });

describe('End-to-end Tests for UI', () => {

  beforeEach( async () => {
    await page.goto(compURL, {waitUntil: 'networkidle2'});
  });

  test('All buttons work as expected', async () => {
    await page.click('#right');
    let title = await page.$eval('.title', e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 2 of 3 | Start over');
    await page.click('#right');
    title = await page.$eval('.title', e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 3 of 3 | Start over');
    await page.click('#left')
    title = await page.$eval('.title', e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 2 of 3 | Start over');
    await page.click('.startOver')
    title = await page.$eval('.title', e => e.textContent);
    expect(title).toEqual('Products related to this itemPage 1 of 3 | Start over');
  });

  // test('Products click => console.log', async () => {
  //   await page.click('.aProduct');
  //   await page.on('console', consoleObj => console.log(consoleObj.text()));
  // });

});
// get Code Coverage reports for unit tests via $ npx jest --coverage
