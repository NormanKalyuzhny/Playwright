const base = require('@playwright/test')
const GaragePage = require('../pages/garagePage/GaragePage').default

exports.test = base.test.extend({
    garagePage: async ({page},use) => {
        const garagePage = new GaragePage(page)
        await page.goto('panel/garage')

        await use(garagePage);
    }
})