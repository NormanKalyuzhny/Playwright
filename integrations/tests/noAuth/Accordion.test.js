import {test,expect} from "@playwright/test";

test.describe('Accordions tests', ()=>{
    test('Accordion elements', async ({page})=>{
        await page.goto('https://commitquality.com/practice-accordions');

        await test.step('Buttons', async ()=>{
            let Accordion1 = page.locator('//button[text()="Accordion 1"]');
            let btnContainer = page.locator('//div[@class="button-container"]');
            let clickMe = btnContainer.locator('//button[@data-testid="basic-click"]');
            let dbClickMe = btnContainer.locator('//button[@data-testid="double-click"]');
            let rightClickMe = btnContainer.locator('//button[@data-testid="right-click"]');

            await Accordion1.click();
            expect(btnContainer).toBeDefined();
            await clickMe.click();
            await expect(btnContainer).toContainText('Button clicked');
            await dbClickMe.dblclick();
            await expect(btnContainer).toContainText('Button double clicked');
            await rightClickMe.click({button: "right"});
            await expect(btnContainer).toContainText('Button right mouse clicked');
        })
        await test.step('Radio buttons', async ()=>{
            let Accordion2 = page.locator('//button[text()="Accordion 2"]');
            let radioBtn1 = page.locator('//input[@data-testid="option1"]')
            let radioBtn2 = page.locator('//input[@data-testid="option2"]')
            await Accordion2.click();
            await radioBtn1.click()
            let radioBtn1Text;
            const elements = await page.locator('.component-container').all();
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const text = await element.innerText();
                if (text.includes('option1 clicked')) {
                     radioBtn1Text = true;
                } else { radioBtn1Text = false}
            }
            expect(radioBtn1Text).toBeTruthy()

            await radioBtn2.click()
            let radioBtn2Text;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const text = await element.innerText();
                if (text.includes('option2 clicked')) {
                    radioBtn2Text = true;
                } else { radioBtn2Text = false}
            }
            expect(radioBtn2Text).toBeTruthy()

        })
        await test.step('Checkboxes', async () => {
            let Accordion3 = page.locator('//button[text()="Accordion 3"]');
            let checkBox1 = page.locator('//input[@data-testid="checkbox1"]')
            let checkBox2 = page.locator('//input[@data-testid="checkbox2"]')
            let checkBox3 = page.locator('//input[@data-testid="checkbox3"]')
            let checkBoxContainer = page.locator('//div[@class="checkbox-container"]')
            await Accordion3.click();

            await checkBox1.click()
            let checkBox1Exp;
            const elements = await checkBoxContainer.all()
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const text = await element.innerText(); 
                if (text.includes('Checkbox 1 checked')) {
                    checkBox1Exp = true;
                    break; 
                }
            }
            expect(checkBox1Exp).toBeTruthy()
            
            await checkBox2.click()
            let checkBox2Exp;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const text = await element.innerText(); 
                if (text.includes('Checkbox 2 checked')) {
                    checkBox2Exp = true;
                    break; 
                }
            }
            expect(checkBox2Exp).toBeTruthy()
            
            await checkBox3.click()
            let checkBox3Exp;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const text = await element.innerText(); 
                if (text.includes('Checkbox 2 checked')) {
                    checkBox3Exp = true;
                    break; 
                }
            }
            expect(checkBox3Exp).toBeTruthy()

            await page.close()

        })
    })
})