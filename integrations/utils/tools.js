import UserData from "../data/userDataObj";
const userData = new UserData()

export default class Tools {
  convertHexToRGB(hex) {
    hex = hex.replace(/^#/, '');

    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
          
    return {
      red: red,
      green: green,
      blue: blue,
    };
  };
  
  genRndNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  rndDigits = this.genRndNumbers(1,1000);
  
  rndEmail = `aqa-${userData.name}.${userData.lastname}+${this.rndDigits}@guglo.com`;

  genRndPassword = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='; 
  
    let password = '';
    for (let i = 0; i < length; i++) {
        const rndIndex = Math.floor(Math.random() * chars.length);
        password += chars[rndIndex];
    }
  
    return password;
  };

  rndPassword = this.genRndPassword(8);

}