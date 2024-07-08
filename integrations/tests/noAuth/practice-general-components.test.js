import { test,expect } from "@playwright/test";
import GeneralComponents from "../../pages/commitQualityPage/components/GeneralComponents";
test.describe('Basic actions', ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto('https://commitquality.com/practice-general-components');
    })
    test('Buttons', async ({page})=>{
        const generalComponents = new GeneralComponents(page)
        await test.step('Single click', async () => { 
            await generalComponents.clickMeBtn.click();
            await generalComponents.btnClick()
        })
        await test.step('Double click', async () => {
            await generalComponents.doubleClickBtn.dblclick();
            await generalComponents.dblClick()
        })
        await test.step('Right mouse click', async () => {
            await generalComponents.rightClickBtn.click( { button: "right" });
            await generalComponents.rightMouseClick()
        })
    })
    test('Radio buttons', async ({page}) => {
        const generalComponents = new GeneralComponents(page)
        await test.step('Radio button 1', async() => {
            await generalComponents.radioBtn1.click()  
            await generalComponents.clickRadioBtn1()
        })
        await test.step('Radio button 2', async() => {
            await generalComponents.radioBtn2.click()
            await generalComponents.clickRadioBtn2()
        })
    })
    test('Options', async ({page}) => {
        const generalComponents = new GeneralComponents(page)
        await test.step('Option 1', async() => {
            await generalComponents.dropdownContainer.selectOption('option1');
        })     
        await test.step('Option 1', async() => {
            await generalComponents.dropdownContainer.selectOption('option2');
        })     
        await test.step('Option 1', async() => {
            await generalComponents.dropdownContainer.selectOption('option3');
        })     
        await test.step('Default option', async() => {
            await generalComponents.dropdownContainer.selectOption('Select an option');
        })   
    })
    test('Checkboxes', async ({page}) => {
        const generalComponents = new GeneralComponents(page)
        await test.step('Option 1', async() => {
            await generalComponents.checkBox1.click();
            await generalComponents.expCheckBox1()
        })     
        await test.step('Option 2', async() => {
            await generalComponents.checkBox2.click();
            await generalComponents.expCheckBox2()
        })     
        await test.step('Option 3', async() => {
            await generalComponents.checkBox3.click();
            await generalComponents.expCheckBox3()
        })     
    })
    test('Links', async ({page}) => {
        const generalComponents = new GeneralComponents(page)
        await test.step('YouTube', async() => {
            await generalComponents.clickYouTubeLink() 
            await generalComponents.expYouTubeLink()
        })      
    })
    test('NewTab', async ({page,context}) => {
        const generalComponents = new GeneralComponents(page)

        const initialTabCount = context.pages().length;

        await generalComponents.youTubeNewTab.click();

        const newTab = await context.waitForEvent('page');
        const finalTabCount = context.pages().length;
        const newTabUrl = newTab.url();

        expect(finalTabCount).toEqual(initialTabCount + 1);
        expect(newTabUrl).toBe('https://www.youtube.com/@commitquality');
        
        await newTab.close();
        await page.close()
    })
})