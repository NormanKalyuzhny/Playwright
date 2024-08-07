import {test,expect} from "@playwright/test";
import AccordionPage from "../../pages/commitQualityPage/components/AccordionPage";
test.describe('Accordions tests', ()=>{
    test('Accordion elements', async ({page})=>{
        const accordionPage = new AccordionPage(page);
        accordionPage.mainUrlLogin();
        await test.step('Buttons', async ()=>{
            await accordionPage.btnAccordion1.click();
            expect(accordionPage.btnContainer).toBeDefined();
            await accordionPage.btnClickMe.click();
            await expect(accordionPage.btnContainer).toContainText('Button clicked');
            await accordionPage.btnDbClickMe.dblclick();
            await expect(accordionPage.btnContainer).toContainText('Button double clicked');
            await accordionPage.btnRightClickMe.click({button: "right"});
            await expect(accordionPage.btnContainer).toContainText('Button right mouse clicked');
        })
        await test.step('Radio buttons', async ()=>{
            await accordionPage.btnAccordion2.click();
            expect(accordionPage.componentContainer).toBeDefined();
            await accordionPage.radioBtn1.click();
            await accordionPage.expRadioBtnText('option1 clicked');
            await accordionPage.radioBtn2.click();
            await accordionPage.expRadioBtnText('option2 clicked');
        })
        await test.step('Checkboxes', async () => {
            await accordionPage.btnAccordion3.click();
            expect(accordionPage.checkBoxContainer).toBeDefined();
            await accordionPage.checkBox1.click();
            await accordionPage.expCheckBoxText('Checkbox 1 checked');
            await accordionPage.checkBox2.click();
            await accordionPage.expCheckBoxText('Checkbox 2 checked');
            await accordionPage.checkBox3.click();
            await accordionPage.expCheckBoxText('Checkbox 3 checked');
            await page.close();
        })
    })
})