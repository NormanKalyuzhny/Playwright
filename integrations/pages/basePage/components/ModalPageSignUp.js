import BasePage from "../BasePage";
import {expect} from '@playwright/test';
import Tools from "../../../utils/tools";
const tools = new Tools()

export default class ModalPageSignUp extends BasePage{
    constructor(page){
        
        super(page)

        this.btnRegister = this.modalSignUP.locator('//button[@class="btn btn-primary"]')
        this.inputRegistrationName = this.modalSignUP.locator('//input[@id="signupName"]')
        this.inputRegistrationLastName = this.modalSignUP.locator('//input[@id="signupLastName"]')
        this.inputRegistrationEmail = this.modalSignUP.locator('//input[@id="signupEmail"]')
        this.inputRegistrationPassword = this.modalSignUP.locator('//input[@id="signupPassword"]')
        this.inputRegistrationRePassword = this.modalSignUP.locator('//input[@id="signupRepeatPassword"]')

        this.errorTextEmptyName = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Name required"]')
        this.errorTextEmptyLastName = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Last name required"]')
        this.errorTextEmptyEmail = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Email required"]')
        this.errorTextEmptyPassword = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Password required"]')
        this.errorTextEmptyRePassword = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Re-enter password required"]')

        this.errorTextShortName = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Name has to be from 2 to 20 characters long"]')
        this.errorTextShortLastName = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Last name has to be from 2 to 20 characters long"]')
        this.errorTextShortPassword = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"]')
        this.errorTextShortRePassword = this.modalSignUP.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[contains(@class, "invalid-feedback")]')

        this.errorTextInvalidEmail = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Email is incorrect"]')
        this.errorTextInvalidName = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Name is invalid"]')
        this.errorTextInvalidLastName = this.modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Last name is invalid"]')       
    }

    expRGB = async (loc,hex) => {
        let hexToRGB = tools.convertHexToRGB(hex)
        let rgbColor = `rgb(${hexToRGB.red}, ${hexToRGB.green}, ${hexToRGB.blue})`
        await expect(loc).toHaveCSS('border-color', `${rgbColor}`)
    }  
    expErrTextEmptyName = async () => {
        await expect(this.errorTextEmptyName).toHaveText('Name required')  
    }
    expErrTextEmptyLastName = async () => {
        await expect(this.errorTextEmptyLastName).toHaveText('Last name required')  
    }
    expErrTextEmptyEmail = async () => {
        await expect(this.errorTextEmptyEmail).toHaveText('Email required')  
    }
    expErrTextEmptyPassword = async () => {
        await expect(this.errorTextEmptyPassword).toHaveText('Password required')  
    }
    expErrTextEmptyRePassword = async () => {
        await expect(this.errorTextEmptyRePassword).toHaveText('Re-enter password required')  
    }
    expErrTextShortName = async () => {
        await expect(this.errorTextShortName).toHaveText('Name has to be from 2 to 20 characters long')  
    }
    expErrTextShortLastName = async () => {
        await expect(this.errorTextShortLastName).toHaveText('Last name has to be from 2 to 20 characters long')  
    }
    expErrTextInvalidEmail = async () => {
        await expect(this.errorTextInvalidEmail).toHaveText('Email is incorrect')
    }
    expErrTextShortPassword = async () => {
        await expect(this.errorTextShortPassword).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    }
    expErrTextShortRePassword = async () => {
        await expect(this.errorTextShortRePassword).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    }
    expErrTextTextInvalidName = async () => {
        await expect(this.errorTextInvalidName).toHaveText('Name is invalid')
    }
    expErrTextInvalidLastName = async () => {
        await expect(this.errorTextInvalidLastName).toHaveText('Last name is invalid')
    }
    expErrTextMissRePassword = async () => {
        await expect(this.errorTextShortRePassword).toHaveText('Passwords do not match')
    }
    expBtnRegisterDisabled = async () => {
        await expect(this.btnRegister).toBeDisabled()
    }
    expBtnRegisterDisabledColor = async () => {
        await expect(this.btnRegister).toHaveCSS('opacity', '0.65')
    }

}