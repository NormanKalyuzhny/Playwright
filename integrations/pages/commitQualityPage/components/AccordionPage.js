import { expect } from "@playwright/test";

export default class AccordionPage{
    constructor(page){
        this.page = page;
        this.mainUrl = 'https://commitquality.com/practice-accordions';
        this.btnAccordion1 = this.page.locator('//button[text()="Accordion 1"]');
        this.btnContainer = this.page.locator('//div[@class="button-container"]');
        this.btnClickMe = this.btnContainer.locator('//button[@data-testid="basic-click"]');
        this.btnDbClickMe = this.btnContainer.locator('//button[@data-testid="double-click"]');
        this.btnRightClickMe = this.btnContainer.locator('//button[@data-testid="right-click"]');
        this.btnAccordion2 = this.page.locator('//button[text()="Accordion 2"]');
        this.radioBtn1 = this.page.locator('//input[@data-testid="option1"]');
        this.radioBtn2 = this.page.locator('//input[@data-testid="option2"]');
        this.componentContainer = this.page.locator('//div[@class="component-container"]');
        this.btnAccordion3 = this.page.locator('//button[text()="Accordion 3"]');
        this.checkBox1 = this.page.locator('//input[@data-testid="checkbox1"]');
        this.checkBox2 = this.page.locator('//input[@data-testid="checkbox2"]');
        this.checkBox3 = this.page.locator('//input[@data-testid="checkbox3"]');
        this.checkBoxContainer = this.page.locator('//div[@class="checkbox-container"]');
    }
    mainUrlLogin = async () => {
        await this.page.goto(this.mainUrl);
    }
    expRadioBtnText = async (expText) => {
        let checExpText;
        const elements = await this.componentContainer.all();
        for (const element of elements){
            const text = await element.innerText();
            if (text.includes(expText)) {
                checExpText = true;
                break;
            }
        }
        expect(checExpText).toBeTruthy();
    }
    expCheckBoxText = async (expText) => {
        let checExpText;
        const elements = await this.checkBoxContainer.all();
        for (const element of elements){
            const text = await element.innerText(); 
            if (text.includes(expText)) {
                checExpText = true;
                break; 
            }
        }
        expect(checExpText).toBeTruthy();
    }
    
}