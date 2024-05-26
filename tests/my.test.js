import {test, expect} from '@playwright/test';

test.describe('test', ()=>{
    test.beforeEach('base url loaded', async ({page})=>{
        const response =  await page.goto('/');
        expect(response.status()).toBe(200);
    })

    test('Sign UP negative test', async ({page})=>{

        function convertHexToRGB(hex) {
            hex = hex.replace(/^#/, '');

            const red = parseInt(hex.substring(0, 2), 16);
            const green = parseInt(hex.substring(2, 4), 16);
            const blue = parseInt(hex.substring(4, 6), 16);
          
            return {
              red: red,
              green: green,
              blue: blue,
            };
        }
        
        let hexToRGB = convertHexToRGB("#dc3545")
        let rgbColor = `rgb(${hexToRGB.red}, ${hexToRGB.green}, ${hexToRGB.blue})`

        const btnSignUP = page.locator('//button[@class="hero-descriptor_btn btn btn-primary"]');
        const modalSignUP = page.locator('//div[@class="modal-dialog modal-dialog-centered"]')
        const btnRegister = modalSignUP.locator('//button[@class="btn btn-primary"]')
        //input
        const inputRegistrationName = modalSignUP.locator('//input[@id="signupName"]')
        const inputRegistrationLastName = modalSignUP.locator('//input[@id="signupLastName"]')
        const inputRegistrationEmail = modalSignUP.locator('//input[@id="signupEmail"]')
        const inputRegistrationPassword = modalSignUP.locator('//input[@id="signupPassword"]')
        const inputRegistrationRePassword = modalSignUP.locator('//input[@id="signupRepeatPassword"]')
        //Empty data
        const errorTextEmptyName = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Name required"]')
        const errorTextEmptyLastName = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Last name required"]')
        const errorTextEmptyEmail = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Email required"]')
        const errorTextEmptyPassword = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Password required"]')
        const errorTextEmptyRePassword = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Re-enter password required"]')
        //Short data
        const errorTextShortName = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Name has to be from 2 to 20 characters long"]')
        const errorTextShortLastName = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Last name has to be from 2 to 20 characters long"]')
        const errorTextInvalidEmail = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Email is incorrect"]')
        const errorTextShortPassword = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"]')
        const errorTextShortRePassword = modalSignUP.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[contains(@class, "invalid-feedback")]')
        //invalid data
        const errorTextInvalidName = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Name is invalid"]')
        const errorTextInvalidLastName = modalSignUP.locator('//div[@class="invalid-feedback"]/p[text()="Last name is invalid"]')

        await test.step('Click Sign UP button', async() => {    
            await btnSignUP.click()
            await expect(btnSignUP).toBeVisible()
        })
        await test.step('Empty Name', async() => {   
            await inputRegistrationName.focus()
            await inputRegistrationName.blur()
            await expect(errorTextEmptyName).toHaveText('Name required')  
            await expect(inputRegistrationName).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Empty Last name', async() => {
            await inputRegistrationLastName.focus()
            await inputRegistrationLastName.blur()
            await expect(errorTextEmptyLastName).toHaveText('Last name required')
            await expect(inputRegistrationLastName).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Empty Email', async() => {
           await inputRegistrationEmail.focus()
           await inputRegistrationEmail.blur()
           await expect(errorTextEmptyEmail).toHaveText('Email required')
           await expect(inputRegistrationEmail).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Empty Password', async() => {
           await inputRegistrationPassword.focus()
           await inputRegistrationPassword.blur()
           await expect(errorTextEmptyPassword).toHaveText('Password required')
           await expect(inputRegistrationPassword).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Empty Re-enter password', async() => {
           await inputRegistrationRePassword.focus()
           await inputRegistrationRePassword.blur()
           await expect(errorTextEmptyRePassword).toHaveText('Re-enter password required')
           await expect(inputRegistrationRePassword).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Short Name', async() => {
            await inputRegistrationName.fill('a')
            await expect(errorTextShortName).toHaveText('Name has to be from 2 to 20 characters long')
            await expect(inputRegistrationName).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Short Last Name', async() => {
            await inputRegistrationLastName.fill('a')
            await expect(errorTextShortLastName).toHaveText('Last name has to be from 2 to 20 characters long')
            await expect(inputRegistrationLastName).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Invalid Email', async() => {
            await inputRegistrationEmail.fill('a')
            await expect(errorTextInvalidEmail).toHaveText('Email is incorrect')
            await expect(inputRegistrationEmail).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Short Password', async() => {
            await inputRegistrationPassword.fill('a')
            await expect(errorTextShortPassword).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            await expect(inputRegistrationPassword).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Short Re-Password', async() => {
            await inputRegistrationRePassword.fill('a')
            await expect(errorTextShortRePassword).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            await expect(inputRegistrationRePassword).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Invalid Name', async() => {
            await inputRegistrationName.fill('$')
            await expect(errorTextInvalidName).toHaveText('Name is invalid')
            await expect(inputRegistrationName).toHaveCSS('border-color', `${rgbColor}`)
        })    
        await test.step('Invalid Last Name', async() => {
            await inputRegistrationLastName.fill('$')
            await expect(errorTextInvalidLastName).toHaveText('Last name is invalid')
            await expect(inputRegistrationLastName).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Password mistmatch', async() => {
            await inputRegistrationPassword.fill('Pass!123')
            await inputRegistrationRePassword.fill('Pass!1234')
            expect (errorTextShortRePassword).toHaveText('Passwords do not match')
            await expect(inputRegistrationRePassword).toHaveCSS('border-color', `${rgbColor}`)
        })
        await test.step('Btn Register is disabled', async() => {
            await expect(btnRegister).toBeDisabled()
        })
    })
})