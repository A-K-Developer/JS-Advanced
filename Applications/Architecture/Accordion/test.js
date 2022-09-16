
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page; // Declare reusable variables

describe('E2E tests', async function () {

  this.timeout(11000)

  before(async () => { browser = await chromium.launch({headless: false, slowMo: 500}); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 

  it('loads article titles',async () => {
    await page.goto('http://localhost:3000');
    
    await page.screenshot({path: 'site.png'});

    const content = await page.textContent('#main');

    await page.waitForSelector('.accordion')
    

    expect(content).to.contain('Scalable Vector Graphics');
    expect(content).to.contain('Open standard');
    expect(content).to.contain('Unix');
    expect(content).to.contain('ALGOL');
  });
  it('Press More Button and Load P', async () => {
    await page.goto('http://localhost:3000');
    await page.click('text=More');
    await page.waitForSelector('.accordion p')
    const visible = await page.isVisible('.accordion p');
    expect(visible).to.be.true;
  });
  it('Less Hide article', async () => {
    await page.goto('http://localhost:3000');
    await page.click('text=More');
    await page.waitForSelector('.accordion p')
    let visible = await page.isVisible('.accordion p');
    expect(visible).to.be.true;
    await page.click('text=Less');
    visible = await page.isVisible('.accordion p');
    expect(visible).to.be.false;
  });
  it('form Input wokring' , async () => {
    await page.goto('http://localhost:3000');

    await page.fill("[name='email']", 'peter@abc.bg');
  })
});
