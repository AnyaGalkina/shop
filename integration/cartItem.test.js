/* eslint-disable */
describe('cartItem', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.goto(
            'http://localhost:6006/iframe.html?id=shop-cart-page-cartitem--cart-item-base-example&viewMode=story',
        );
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
