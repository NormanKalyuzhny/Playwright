import BasePage from '../basePage/BasePage';

export default class GaragePage extends BasePage{
    constructor(page){
        super(page)
        this.settingsTab = this.page.locator('//a[contains(@class,"btn btn-white btn-sidebar sidebar_btn") and contains(@routerlink, "settings")]')
    }

    mainUrl = "https://qauto2.forstudy.space/panel/garage";
    
    clickSettingsTab = async () => {
        await this.settingsTab.click()
    }
}
