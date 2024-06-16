import {expect} from '@playwright/test';

export default class BasePage {
    constructor(page){
        this.page = page;
        this.btnSignUP = page.locator('//button[@class="hero-descriptor_btn btn btn-primary"]');
        this.modalSignUP = page.locator('//div[@class="modal-dialog modal-dialog-centered"]');
        this.btnSignIn = page.locator('//button[@class="btn btn-outline-white header_signin"]')
    }

    mainUrl = async () => await this.page.goto('/', res => res.fulfill({status: 200}))
    
    btnSignUPClick = async () => {
        await this.btnSignUP.click()
        await expect(this.modalSignUP).toBeVisible()
    }

    btnSignUPVisible = async () =>{
        await expect(this.btnSignUP).toBeVisible()
    }
}