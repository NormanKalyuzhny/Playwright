import playwrightConfig from '../playwright.config';
import {test} from "@playwright/test"
import BasePage from './pages/basePage/BasePage';
import ApiUtils from './api/apiUtils';
import ModalPageSignIn from './pages/basePage/components/ModalPageSignIn';

test('Auth', async({page})=>{
    const basePage = new BasePage(page)
    const modalPageSignIn = new ModalPageSignIn(page)
    const apiUtils = new ApiUtils()
    const baseUrl = process.env.BASE_URL
    const storageStatePath = playwrightConfig.projects.find(project => project.name === 'chromium').use.storageState;

    await apiUtils.apiGenAcc()
    await page.goto(baseUrl)
    await basePage.btnSignIn.click()
    await modalPageSignIn.inputSignInEmail.fill(apiUtils.postData.email)
    await modalPageSignIn.inputSignInPassword.fill(apiUtils.postData.password)
    await modalPageSignIn.btnLogin.click()
    await page.waitForLoadState('networkidle'); // this fixes issue with 'no auth for next tests'
    await page.context().storageState({path: storageStatePath})
})