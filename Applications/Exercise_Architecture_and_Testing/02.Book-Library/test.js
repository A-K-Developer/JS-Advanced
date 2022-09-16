const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

const host = 'http://localhost:5500'

describe('Tests', async function(){
    this.timeout(6000);

    let browser,page;
    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    })
    beforeEach(async () => {
        page = await browser.newPage();
    })
    afterEach(async () =>{
        page.close();
    })

    it('loads all books',async () =>{
        // navigate to page
        await page.route('**/jsonstore/collections/books', (route,request) =>{
            route.fulfill({
                body: JSON.stringify(mochData),
                status: 200,
                headers: {
                    'Access-Control-Allow-Orgin':'*',
                    'Content-Type': 'application/json'
                }
            })
        })
        await page.goto(host);
        //find and click load button
        await page.click('text=Load all books');
        await page.waitForSelector('text=Harry Potter');
        // check that books are displayed

        const rowData = await page.$$eval('tbody tr', rows => rows.map(r =>r.textContent));

        expect(rowData[0]).to.contains('Harry Potter');
        expect(rowData[0]).to.contains('Rowling');
        expect(rowData[1]).to.contains('C# Fundamentals');
        expect(rowData[1]).to.contains('Nakov');
    })

    it('creates book', async () => {
        //navigate to page
        await page.goto(host)
        // find form
        //fill input fields
        await page.fill('input[name = title]','title');
        await page.fill('input[name=author]','author');
        //click submit

        const[request] = await Promise.all([
            page.waitForRequest((request)=> request.methood() == 'POST'),
            page.click('text=Submit'),
        ])

        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');
    })
})