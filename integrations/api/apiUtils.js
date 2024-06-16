import { request } from '@playwright/test';
import UserData from "../data/userDataObj";
import Tools from "../utils/tools";
const tools = new Tools()
const userData = new UserData()


export default class ApiUtils{
    constructor(){
        this.baseUrl = process.env.BASE_URL
    }
    postData = {
        name: userData.name,
        lastName: userData.lastname,
        email: tools.rndEmail,
        password: tools.rndPassword,
        repeatPassword: tools.rndPassword
    };

    apiGenAcc = async () =>{
        const req = await request.newContext()

        const responce = await req.post(`${this.baseUrl}api/auth/signup`,{
            data: this.postData
        })
        
        const responceBody = JSON.parse(await responce.text())
        console.log(this.postData)
        console.log('userId is: ',responceBody.data.userId)
        await req.dispose()
    }
}