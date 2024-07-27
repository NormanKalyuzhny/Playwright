import { expect } from "@playwright/test";

export default class AccordionPage{
    constructor(page){
        this.page = page
        this.mainUrl = 'https://commitquality.com/practice-accordions'
        this.btnAccordion1 = this.page.locator('//button[text()="Accordion 1"]');
        this.btnContainer = this.page.locator('//div[@class="button-container"]');
        this.btnClickMe = this.btnContainer.locator('//button[@data-testid="basic-click"]');
        this.btnDbClickMe = this.btnContainer.locator('//button[@data-testid="double-click"]');
        this.btnRightClickMe = this.btnContainer.locator('//button[@data-testid="right-click"]');
        this.btnAccordion2 = this.page.locator('//button[text()="Accordion 2"]');
        this.radioBtn1 = this.page.locator('//input[@data-testid="option1"]')
        this.radioBtn2 = this.page.locator('//input[@data-testid="option2"]')
        this.componentContainer = this.page.locator('//div[@class="component-container"]')
        this.btnAccordion3 = this.page.locator('//button[text()="Accordion 3"]');
        this.checkBox1 = this.page.locator('//input[@data-testid="checkbox1"]')
        this.checkBox2 = this.page.locator('//input[@data-testid="checkbox2"]')
        this.checkBox3 = this.page.locator('//input[@data-testid="checkbox3"]')
        this.checkBoxContainer = this.page.locator('//div[@class="checkbox-container"]')
    }
    mainUrlLogin = async () => {
        await this.page.goto(this.mainUrl)
    }
    expRadioBtn1Text = async () => {
        let radioBtn1Text;
        const elements = await this.componentContainer.all();
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = await element.innerText();
            if (text.includes('option1 clicked')) {
                 radioBtn1Text = true;
            } else { radioBtn1Text = false}
        }
        expect(radioBtn1Text).toBeTruthy()
    }
    expRadioBtn2Text = async () => {
        let radioBtn2Text;
        const elements = await this.componentContainer.all();
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = await element.innerText();
            if (text.includes('option2 clicked')) {
                radioBtn2Text = true;
            } else { radioBtn2Text = false}
        }
        expect(radioBtn2Text).toBeTruthy()
    }
    expCheckBox1Text = async () => {
        let checkBox1Exp;
        const elements = await this.checkBoxContainer.all()
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = await element.innerText(); 
            if (text.includes('Checkbox 1 checked')) {
                checkBox1Exp = true;
                break; 
            }
        }
        expect(checkBox1Exp).toBeTruthy()
    }
    expCheckBox2Text = async () => {
        let checkBox2Exp;
        const elements = await this.checkBoxContainer.all()
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = await element.innerText(); 
            if (text.includes('Checkbox 2 checked')) {
                checkBox2Exp = true;
                break; 
            }
        }
        expect(checkBox2Exp).toBeTruthy()
    }
    expCheckBox3Text = async () => {
        let checkBox3Exp;
        const elements = await this.checkBoxContainer.all()
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = await element.innerText(); 
            if (text.includes('Checkbox 2 checked')) {
                checkBox3Exp = true;
                break; 
            }
        }
        expect(checkBox3Exp).toBeTruthy()
    }
    
}