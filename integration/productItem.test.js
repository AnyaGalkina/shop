/* eslint-disable */
describe('productItem', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.goto(
            'http://localhost:6006/iframe.html?args=&id=shop-product-page-productitem-component--product-item-base-example&viewMode=story',
        );
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
