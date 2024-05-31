import GaragePage from "../GaragePage";

export default class SettingsPage extends GaragePage{
    constructor(page){
        super(page)
        this.settingSection = this.page.locator('//div[@class="col-lg-9 main-wrapper"]')
        this.btnRemoveMyAcc = this.settingSection.locator('//button[@class="btn btn-danger-bg"]')
        this.modalRemoveAcc = this.page.locator('//div[@class="modal-content"]')
        this.btnModalCancel = this.modalRemoveAcc.locator('//button[@class="btn btn-secondary"]')
        this.btnModalRemove = this.modalRemoveAcc.locator('//button[@class="btn btn-danger"]')
    }

    deleteAccount = async () => {
       await this.btnRemoveMyAcc.click()
       await this.btnModalRemove.click()
    }
}