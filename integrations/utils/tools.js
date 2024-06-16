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
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let password = '';

    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    const remainingLength = length - 4;

    const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
    for (let i = 0; i < remainingLength; i++) {
        const rndIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[rndIndex];
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
  };

  rndPassword = this.genRndPassword(8);
}