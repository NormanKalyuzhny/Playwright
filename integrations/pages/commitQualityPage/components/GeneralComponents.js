import CommitQualityPage from '../CommitQualityPage'
import { expect } from '@playwright/test'

export default class GeneralComponents extends CommitQualityPage{
    constructor(page){
        super(page)
        this.page = page
        this.mainUrl = 'https://commitquality.com/practice-general-components'
        this.btnContainer = this.page.locator('//div[@class="button-container"]');
        this.clickMeBtn = this.btnContainer.locator('//button[@data-testid="basic-click"]');
        this.doubleClickBtn = this.btnContainer.locator('//button[@data-testid="double-click"]');
        this.rightClickBtn = this.btnContainer.locator('//button[@data-testid="right-click"]');
        this.radioContainer = this.page.locator('//div[@class="radio-buttons-container container-outline"]');
        this.radioBtn1 = this.radioContainer.locator('//input[@data-testid="option1"]');
        this.radioBtn2 = this.radioContainer.locator('//input[@data-testid="option2"]');
        this.dropdownContainer = this.page.locator('//select');
        this.checkBoxContainer = this.page.locator('//div[@class="checkbox-container container-outline"]');
        this.checkBox1 = this.checkBoxContainer.locator('//input[@data-testid="checkbox1"]');
        this.checkBox2 = this.checkBoxContainer.locator('//input[@data-testid="checkbox2"]');
        this.checkBox3 = this.checkBoxContainer.locator('//input[@data-testid="checkbox3"]');
        this.linkContainer = this.page.locator('//div[@class="links-container container-outline"]');
        this.youTube = this.linkContainer.locator('//a[@data-testid="link-same-tab"]');
        this.practicePage = this.linkContainer.locator('//a[@data-testid="link-newtab-practice"]');
        this.linkContainer = this.page.locator('//div[@class="links-container container-outline"]');
        this.youTubeNewTab = this.linkContainer.locator('//a[@data-testid="link-newtab"]');
    }
    
    btnClick = async () => {
        expect(await this.btnContainer.innerText()).toContain('Button clicked');
    }
    dblClick = async () => {
        expect(await this.btnContainer.innerText()).toContain('Button double clicked');
    }
    rightMouseClick = async () => {
        expect(await this.btnContainer.innerText()).toContain('Button right mouse clicked');
    }
    clickRadioBtn1 = async () => {
        expect(await this.radioContainer.innerText()).toContain('option1', 'clicked');
    }
    clickRadioBtn2 = async () => {
        expect(await this.radioContainer.innerText()).toContain('option2', 'clicked');
    }
    expCheckBox1 = async () => {  
        expect(await this.checkBoxContainer.innerText()).toContain('Checkbox 1 checked');  
    }
    expCheckBox2 = async () => {
        expect(await this.checkBoxContainer.innerText()).toContain('Checkbox 2 checked');
    }
    expCheckBox3 = async () => {
        expect(await this.checkBoxContainer.innerText()).toContain('Checkbox 3 checked');
    }
    clickYouTubeLink = async () => {
        await this.youTube.click();
    }
    expYouTubeLink = async () => {
        const url = this.page.url();
        await this.page.waitForURL();
        expect(url).toEqual('https://www.youtube.com/@commitquality');
        await this.page.close()
    }
}