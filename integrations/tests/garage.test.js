import { test } from '../fixtures/garagePageFixture';
import {expect} from '@playwright/test'

test.describe('Garage page tests', ()=>{
    test('User is loged', async ({garagePage}) => {  
        expect(await garagePage.btnLogOut.isVisible()).toBeTruthy();
    });
    test('tier III', async({garagePage})=>{
        await test.step('Fuel expanse tab', async()=>{
            expect(await garagePage.fuelExpensesTab.isVisible()).toBeTruthy();
            await garagePage.fuelExpensesTab.click()
        })
        await test.step('Instructions tab', async()=>{
            expect(await garagePage.instructionsTab.isVisible()).toBeTruthy();
            await garagePage.instructionsTab.click()
        })
        await test.step('Profile tab', async()=>{
            expect(await garagePage.profileTab.isVisible()).toBeTruthy();
            await garagePage.profileTab.click()
        })
        await test.step('Settings tab', async()=>{
            expect(await garagePage.settingsTab.isVisible()).toBeTruthy();
            await garagePage.settingsTab.click()
        })
        await test.step('Garage tab', async()=>{
            expect(await garagePage.garageTab.isVisible()).toBeTruthy();
            await garagePage.garageTab.click()
        })

    })
})

