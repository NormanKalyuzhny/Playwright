import { test } from '../../fixtures/garagePageFixture';
import { expect } from '@playwright/test'

test.describe('Garage page tests', ()=>{
    test('User is loged', async ({garagePage}) => {  
        expect(await garagePage.btnLogOut.isVisible()).toBeTruthy();
    });
    test('Left panel buttons check', async({garagePage})=>{
        await test.step('Fuel expanse tab', async()=>{
            expect(await garagePage.fuelExpensesTab.isVisible()).toBeTruthy();      
        })
        await test.step('Instructions tab', async()=>{
            expect(await garagePage.instructionsTab.isVisible()).toBeTruthy();
        })
        await test.step('Profile tab', async()=>{
            expect(await garagePage.profileTab.isVisible()).toBeTruthy();
        })
        await test.step('Settings tab', async()=>{
            expect(await garagePage.settingsTab.isVisible()).toBeTruthy();
        })
        await test.step('Garage tab', async()=>{
            expect(await garagePage.garageTab.isVisible()).toBeTruthy();
        })
    })
    test('Tab containing elements check', async({garagePage,fuelExpensesPage})=>{
        await test.step('Fuel expanse tab',async ()=>{
            await garagePage.clickFuelExpensesTab() 
            expect(await fuelExpensesPage.btnAddAnExpense.isVisible()).toBeTruthy();
        })
        await test.step('Profile tab',async ()=>{
            await garagePage.clickProfileTab()
        })
        await test.step('Settings tab',async ()=>{
            await garagePage.clickSettingsTab()
        })
        await test.step('Garage tab',async ()=>{
            await garagePage.clickGarageTab()
        })
    })

    test('Instructions tab elements check', async({garagePage,instructionsPage})=>{
        await test.step('Instructions tab',async ()=>{
            await garagePage.clickInstructionsTab()
            expect(await instructionsPage.btnSearch.isVisible()).toBeTruthy();
        
            await test.step('Car brands list in dropdown',async ()=>{
                await instructionsPage.clickBrandSelector()
                await instructionsPage.expectBrandList()
                await instructionsPage.clickEachCarBrand()
            })
            await test.step('Car models list in dropdown',async ()=>{
                await instructionsPage.clickModelSelector()
                await instructionsPage.expectModelList()
                await instructionsPage.clickEachCModelBrand()
            })
        })
    })

})

