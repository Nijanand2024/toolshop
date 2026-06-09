
import register from "../Test_Data/registration.json"
export class LoginPage{
    constructor(page){
        this.page=page;
        this.sing_in_link= page.locator('//a[text()="Sign in"]');
        this.email=page.locator('#email');
        this.password=page.locator('#password');
        this.login_btn= page.locator('//input[@type="submit"]');
    }
    async login(){
        await this.sing_in_link.click();
        await this.email.fill(register.email);
        await this.password.fill(register.passowrd);
        await this.login_btn.click();

    }

}