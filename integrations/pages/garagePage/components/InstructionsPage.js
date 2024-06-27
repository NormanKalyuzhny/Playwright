import { expect } from "@playwright/test";
import GaragePage from "../GaragePage";
import CarData from "./pageData/instructionsPageData";
const carData = new CarData()

export default class InstructionsPage extends GaragePage{
    constructor(page){
        super(page)
        this.panelPageContent = this.page.locator('//div[@class="panel-page_content"]')
        this.brandListDropdown = this.panelPageContent.locator('//li[contains(@class,"dropdown-item btn btn-link brand-select-dropdown_item")]')
        this.modelListDropdown = this.panelPageContent.locator('//li[contains(@class, "dropdown-item btn btn-link model-select-dropdown_item")]')
        this.btnSearch = this.panelPageContent.locator('//button[@class="instructions-search-controls_search btn btn-primary"]')
        this.instructionsList = this.panelPageContent.locator('//ul[@class="instructions_list instruction-list"]')
        this.btnBrandList = this.panelPageContent.locator('//button[@id="brandSelectDropdown"]')
        this.btnModelList = this.panelPageContent.locator('//button[@id="modelSelectDropdown"]')
    }

    clickBtnSearch = async () => {
        await this.btnSearch.click()
    }

    clickBrandSelector = async () => {
        await this.btnBrandList.click
    }
    clickModelSelector = async () => {
        await this.btnModelList.click
    }
    activeCarBrand = async ()=> {
        const activeCarBrandLoc = await this.panelPageContent.locator('//li[@class="dropdown-item btn btn-link brand-select-dropdown_item -active disabled"]')
        const activeCarBrandText = await activeCarBrandLoc.innerText()
        //console.log('Active car brand:', activeCarBrandText)
        return activeCarBrandText
    }
    expectBrandList = async () => {
        const elements = await this.brandListDropdown.all();
        const elementTexts = [];
    
        for (const element of elements) {
            const elementText = await element.innerText();
            elementTexts.push(elementText);
        }
    
        expect(elementTexts).toEqual(carData.carBrands)
    }
    expectModelList = async () => {
        const elements = await this.modelListDropdown.all();
        const elementTexts = [];
    
        for (const element of elements) {
            const elementText = await element.innerText();
            elementTexts.push(elementText);
        }
    
        expect(elementTexts).toEqual(carData.carModels.Audi)
    }
}