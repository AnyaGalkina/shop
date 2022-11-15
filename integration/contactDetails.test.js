/* eslint-disable */
describe('contactDetails', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.goto(
            'http://localhost:6006/iframe.html?args=&id=shop-cart-page-contact-details--contact-details-base-example&viewMode=story',
        );
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
