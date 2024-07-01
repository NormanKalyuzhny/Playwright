import { test,expect } from "@playwright/test"  

test.describe('Basic actions', ()=>{
    test('Buttons', async ({page})=>{
        await page.goto('https://commitquality.com/practice-general-components')
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
})