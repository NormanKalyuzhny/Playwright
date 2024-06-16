import {test} from '@playwright/test';
import BasePage from '../pages/basePage/BasePage';
import ModalPageSignUp from '../pages/basePage/components/ModalPageSignUp';
import { genAccount } from '../pages/basePage/components/genAccount';
import GaragePage from '../pages/garagePage/GaragePage';
import SettingsPage from '../pages/garagePage/components/SettingsPage';

test.describe('test', ()=>{

    test.beforeEach('base url loaded', async ({page})=>{
        const basePage = new BasePage(page)
        await basePage.mainUrl()
    })

    test('Sign UP negative test', async ({page})=>{
        const basePage = new BasePage(page)
        const modalPage = new ModalPageSignUp(page)
        const garagePage = new GaragePage(page)
        const settingsPage = new SettingsPage(page)

        await test.step('Click Sign UP button', async() => {    
            await basePage.btnSignUP.click()
            await basePage.btnSignUPVisible()
        })
        await test.step('Empty Name', async() => {   
            await modalPage.inputRegistrationName.focus()
            await modalPage.inputRegistrationName.blur()
            await modalPage.expErrTextEmptyName()
            await modalPage.expRGB(modalPage.inputRegistrationName,"#dc3545")
        })
        await test.step('Empty Last name', async() => {
            await modalPage.inputRegistrationLastName.focus()
            await modalPage.inputRegistrationLastName.blur()
            await modalPage.expErrTextEmptyLastName()
            await modalPage.expRGB(modalPage.inputRegistrationLastName,"#dc3545")
        })
        await test.step('Empty Email', async() => {
           await modalPage.inputRegistrationEmail.focus()
           await modalPage.inputRegistrationEmail.blur()
           await modalPage.expErrTextEmptyEmail()
           await modalPage.expRGB(modalPage.inputRegistrationEmail,"#dc3545")
        })
        await test.step('Empty Password', async() => {
           await modalPage.inputRegistrationPassword.focus()
           await modalPage.inputRegistrationPassword.blur()
           await modalPage.expErrTextEmptyPassword()
           await modalPage.expRGB(modalPage.inputRegistrationPassword,"#dc3545")
        })
        await test.step('Empty Re-enter password', async() => {
           await modalPage.inputRegistrationRePassword.focus()
           await modalPage.inputRegistrationRePassword.blur()
           await modalPage.expErrTextEmptyRePassword()
           await modalPage.expRGB(modalPage.inputRegistrationRePassword,"#dc3545")
        })
        await test.step('Short Name', async() => {
            await modalPage.inputRegistrationName.fill('a')
            await modalPage.expErrTextShortName()
            await modalPage.expRGB(modalPage.inputRegistrationName,"#dc3545")
        })
        await test.step('Short Last Name', async() => {
            await modalPage.inputRegistrationLastName.fill('a')
            await modalPage.expErrTextShortLastName()
            await modalPage.expRGB(modalPage.inputRegistrationLastName,"#dc3545")
        })
        await test.step('Invalid Email', async() => {
            await modalPage.inputRegistrationEmail.fill('a')
            await modalPage.expErrTextInvalidEmail()
            await modalPage.expRGB(modalPage.inputRegistrationEmail,"#dc3545")
        })
        await test.step('Short Password', async() => {
            await modalPage.inputRegistrationPassword.fill('a')
            await modalPage.expErrTextShortPassword()
            await modalPage.expRGB(modalPage.inputRegistrationPassword,"#dc3545")
        })
        await test.step('Short Re-Password', async() => {
            await modalPage.inputRegistrationRePassword.fill('a')
            await modalPage.expErrTextShortRePassword()
            await modalPage.expRGB(modalPage.inputRegistrationRePassword,"#dc3545")
        })
        await test.step('Invalid Name', async() => {
            await modalPage.inputRegistrationName.fill('$')
            await modalPage.expErrTextTextInvalidName()
            await modalPage.expRGB(modalPage.inputRegistrationName,"#dc3545")
        })    
        await test.step('Invalid Last Name', async() => {
            await modalPage.inputRegistrationLastName.fill('$')
            await modalPage.expErrTextInvalidLastName()
            await modalPage.expRGB(modalPage.inputRegistrationLastName,"#dc3545")
        })
        await test.step('Password mistmatch', async() => {
            await modalPage.inputRegistrationPassword.fill('Pass!123')
            await modalPage.inputRegistrationRePassword.fill('Pass!1234')
            await modalPage.expErrTextMissRePassword()
            await modalPage.expRGB(modalPage.inputRegistrationRePassword,"#dc3545")
        })
        await test.step('Btn Register is disabled', async() => {
            await modalPage.expBtnRegisterDisabled()
            await modalPage.expBtnRegisterDisabledColor()
        })
        await test.step('User registration', async() => {
            await genAccount(page)
        })
        await test.step('Delete user', async() => {
            await garagePage.clickSettingsTab()
            await settingsPage.deleteAccount()
            await page.close()
        })
    })
})