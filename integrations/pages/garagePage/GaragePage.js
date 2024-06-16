export default class GaragePage{
    constructor(page){
        this.page = page
        this.settingsTab = this.page.locator('//a[contains(@class,"btn btn-white btn-sidebar sidebar_btn") and contains(@routerlink, "settings")]');
        this.btnLogOut = this.page.locator('//a[@class="btn btn-link text-danger btn-sidebar sidebar_btn"]');
    
    async function clickSettingsTab(){
        await this.settingsTab.click();
    }
}}