import { test,expect } from "@playwright/test"  
import { before, beforeEach } from "node:test"

test.describe('Basic actions', ()=>{
    test.beforeEach('', async ({page})=>{
        await page.goto('https://commitquality.com/practice-general-components')
    })
    test('Buttons', async ({page})=>{
        
        const btnContainer = page.locator('//div[@class="button-container"]')
        const clickMeBtn = btnContainer.locator('//button[@data-testid="basic-click"]')
        const doubleClickBtn = btnContainer.locator('//button[@data-testid="double-click"]')
        const rightClickBtn = btnContainer.locator('//button[@data-testid="right-click"]')

        await test.step('Single click', async () => { 
            await clickMeBtn.click()
            expect(await btnContainer.innerText()).toContain('Button clicked')
        })
        await test.step('Double click', async () => {
            await doubleClickBtn.dblclick()
            expect(await btnContainer.innerText()).toContain('Button double clicked')
        })
        await test.step('Right mouse click', async () => {
            await rightClickBtn.click( { button: "right" })
            expect(await btnContainer.innerText()).toContain('Button right mouse clicked')
        })
    })
    test('Radio buttons', async ({page}) => {
        const compContainer = page.locator('//div[@class="radio-buttons-container container-outline"]')
        const radioBtn1 = compContainer.locator('//input[@data-testid="option1"]')
        const radioBtn2 = compContainer.locator('//input[@data-testid="option2"]')

        await test.step('Radio button 1', async() => {
            await radioBtn1.click()  
            expect(await compContainer.innerText()).toContain('option1', 'clicked')
        })
        await test.step('Radio button 2', async() => {
            await radioBtn2.click()
            expect(await compContainer.innerText()).toContain('option2', 'clicked')
        })
    })
    test('Options', async ({page}) => {
        const dropdownSection = page.locator('//select')
  
        await test.step('Option 1', async() => {
            await dropdownSection.selectOption('option1')
        })     
        await test.step('Option 1', async() => {
            await dropdownSection.selectOption('option2')
        })     
        await test.step('Option 1', async() => {
            await dropdownSection.selectOption('option3')
        })     
        await test.step('Default option', async() => {
            await dropdownSection.selectOption('Select an option')
        })   
    })
})