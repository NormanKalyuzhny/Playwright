import { expect } from "@playwright/test"

export default class GaragePage{
    constructor(page){
        this.page = page
        this.garageSidePanel = this.page.locator('//div[@class="col-3 d-none d-lg-block sidebar-wrapper"]')
        this.garageTab = this.garageSidePanel.locator('//a[@routerlink="garage"]')
        this.fuelExpensesTab = this.garageSidePanel.locator('//a[@routerlink="expenses"]')
        this.instructionsTab = this.garageSidePanel.locator('//a[@routerlink="instructions"]')
        this.profileTab = this.garageSidePanel.locator('//a[@routerlink="profile"]')
        this.settingsTab = this.garageSidePanel.locator('//a[@routerlink="settings"]');
        this.btnLogOut = this.page.locator('//a[@class="btn btn-link text-danger btn-sidebar sidebar_btn"]');
    }

    clickGarageTab = async ()=>{
     await this.garageTab.click()
    }

    clickFuelExpensesTab = async ()=>{
        await this.fuelExpensesTab.click()
        await this.page.waitForLoadState('networkidle');
        await expect(this.fuelExpensesTab).toHaveCSS('box-shadow','rgb(2, 117, 216) 0px 0px 0px 2px') //dark blue "focus outline" around a button
    }
   
    clickInstructionsTab = async ()=>{
        await this.instructionsTab.click()
        await expect(this.instructionsTab).toHaveCSS('box-shadow','rgb(2, 117, 216) 0px 0px 0px 2px') 
    }

    clickProfileTab = async ()=>{
        await this.profileTab.click()
        await expect(this.profileTab).toHaveCSS('box-shadow','rgb(2, 117, 216) 0px 0px 0px 2px')
    }

    clickSettingsTab = async ()=> {
     await this.settingsTab.click();
     await expect(this.settingsTab).toHaveCSS('box-shadow','rgb(2, 117, 216) 0px 0px 0px 2px')
    }   
}

