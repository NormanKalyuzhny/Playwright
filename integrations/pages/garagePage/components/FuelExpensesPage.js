import GaragePage from "../GaragePage";

export default class FuelExpensesPage extends GaragePage{
    constructor(page){
        super(page)
        this.fuelExpanseMainWrapper = this.page.locator('//div[@class="col-lg-9 main-wrapper"]')
        this.btnAddAnExpense = this.fuelExpanseMainWrapper.locator('//button[@class="btn btn-primary"]')
        this.linkGaragePage = this.fuelExpanseMainWrapper.locator('//a[@routerlink="/panel/garage"]')
    }

    checkBtnAddAnExpense = async ()=>{
        await this.btnAddAnExpense.click()
    }
    clickLinkGaragePage = async ()=>{
        await this.linkGaragePage.click()
    }

}