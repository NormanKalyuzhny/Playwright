const base = require('@playwright/test')
const GaragePage = require('../pages/garagePage/GaragePage').default
const FuelExpensesPage = require('../pages/garagePage/components/FuelExpensesPage').default
const InstructionsPage = require('../pages/garagePage/components/InstructionsPage').default

exports.test = base.test.extend({
    garagePage: async ({page},use) => {
        const garagePage = new GaragePage(page)
        await page.goto('panel/garage')
        await use(garagePage);
    },

    fuelExpensesPage:async ({page},use) => {
        const fuelExpensesPage = new FuelExpensesPage(page)
        await use(fuelExpensesPage);
    },

    instructionsPage:async ({page},use) => {
        const instructionsPage = new InstructionsPage(page)
        await use(instructionsPage);
    }
})