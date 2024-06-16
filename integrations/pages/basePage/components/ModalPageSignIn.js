import BasePage from "../BasePage";

export default class ModalPageSignIn extends BasePage{
    constructor(page){

        super(page)
        
        this.inputSignInEmail = this.modalSignUP.locator('//input[@id="signinEmail"]') 
        this.inputSignInPassword = this.modalSignUP.locator('//input[@id="signinPassword"]') 
        this.checkBoxRememberMe = this.modalSignUP.locator('//input[@id="remember"]') 
        this.linkForgotPassword = this.modalSignUP.locator('//button[@class="btn btn-link" and contains(text(), "Forgot password")]') 
        this.linkRegistration = this.modalSignUP.locator('//button[@class="btn btn-link" and contains(text(), "Registration")]') 
        this.btnLogin = this.modalSignUP.locator('//button[@class="btn btn-primary"]') 
        this.btnClose = this.modalSignUP.locator('//button[@class="close"]') 
    }
}