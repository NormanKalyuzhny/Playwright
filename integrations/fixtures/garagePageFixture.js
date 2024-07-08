const base = require('@playwright/test')
const GaragePage = require('../pages/garagePage/GaragePage').default
const FuelExpensesPage = require('../pages/garagePage/components/FuelExpensesPage').default
const InstructionsPage = require('../pages/garagePage/components/InstructionsPage').default
const BasePage = require('../pages/basePage/BasePage').default
const SettingsPage = require('../pages/garagePage/components/SettingsPage').default
const ModalPageSignUp = require('../pages/basePage/components/ModalPageSignUp').default

exports.test = base.test.extend({
    basePage: async ({page},use) => {
        const basePage = new BasePage(page)
        await page.goto('/')
        await use(basePage);
    },
    modalPage: async ({page},use) => {
        const modalPage = new ModalPageSignUp(page)
        await use(modalPage);
    },
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
    },
    settingsPage:async ({page},use) => {
        const settingsPage = new SettingsPage(page)
        await use(settingsPage);
    },
})