import UserData from "../../../data/userDataObj"
import BasePage from "../BasePage"
import ModalPageSignUp from "./ModalPageSignUp"
import Tools from "../../../utils/tools"

export async function genAccount(page){
    const basePage = new BasePage(page)
    const modalPage = new ModalPageSignUp(page)
    const userData = new UserData()
    const tools = new Tools()
    
    await basePage.mainUrl()
    await basePage.btnSignUPVisible()
    await basePage.btnSignUPClick()

    await modalPage.inputRegistrationName.fill(userData.name)
    await modalPage.inputRegistrationLastName.fill(userData.lastname)
    await modalPage.inputRegistrationEmail.fill(tools.rndEmail)
    await modalPage.inputRegistrationPassword.fill(tools.rndPassword)
    await modalPage.inputRegistrationRePassword.fill(tools.rndPassword)
    await modalPage.btnRegister.click()  
}
