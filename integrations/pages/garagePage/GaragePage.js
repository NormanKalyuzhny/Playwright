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
    
    async function clickSettingsTab(){
        await this.settingsTab.click();
    }
}}