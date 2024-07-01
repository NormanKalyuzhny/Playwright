import { test,expect } from "@playwright/test"  
import { url } from "node:inspector"
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
        const radioContainer = page.locator('//div[@class="radio-buttons-container container-outline"]')
        const radioBtn1 = radioContainer.locator('//input[@data-testid="option1"]')
        const radioBtn2 = radioContainer.locator('//input[@data-testid="option2"]')

        await test.step('Radio button 1', async() => {
            await radioBtn1.click()  
            expect(await radioContainer.innerText()).toContain('option1', 'clicked')
        })
        await test.step('Radio button 2', async() => {
            await radioBtn2.click()
            expect(await radioContainer.innerText()).toContain('option2', 'clicked')
        })
    })
    test('Options', async ({page}) => {
        const dropdownContainer = page.locator('//select')
  
        await test.step('Option 1', async() => {
            await dropdownContainer.selectOption('option1')
        })     
        await test.step('Option 1', async() => {
            await dropdownContainer.selectOption('option2')
        })     
        await test.step('Option 1', async() => {
            await dropdownContainer.selectOption('option3')
        })     
        await test.step('Default option', async() => {
            await dropdownContainer.selectOption('Select an option')
        })   
    })
    test('Checkboxes', async ({page}) => {
        const checkBoxContainer = page.locator('//div[@class="checkbox-container container-outline"]')
        const checkBox1 = checkBoxContainer.locator('//input[@data-testid="checkbox1"]')
        const checkBox2 = checkBoxContainer.locator('//input[@data-testid="checkbox2"]')
        const checkBox3 = checkBoxContainer.locator('//input[@data-testid="checkbox3"]')
  
        await test.step('Option 1', async() => {
            await checkBox1.click()
            expect(await checkBoxContainer.innerText()).toContain('Checkbox 1 checked')
        })     
        await test.step('Option 2', async() => {
            await checkBox2.click()
            expect(await checkBoxContainer.innerText()).toContain('Checkbox 2 checked')
        })     
        await test.step('Option 3', async() => {
            await checkBox3.click()
            expect(await checkBoxContainer.innerText()).toContain('Checkbox 3 checked')
        })     
 
    })
    test('Links', async ({page}) => {
        const linkContainer = page.locator('//div[@class="links-container container-outline"]')
        const youTube = linkContainer.locator('//a[@data-testid="link-same-tab"]')
        const youTubeNewTab = linkContainer.locator('//a[@data-testid="link-newtab"]')
        const practicePage = linkContainer.locator('//a[@data-testid="link-newtab-practice"]')

        await test.step('YouTube', async() => {  
            await youTube.click()
            const url = page.url()
            await page.waitForURL()
            expect(url).toEqual('https://www.youtube.com/@commitquality')
        })      
    })
    

})