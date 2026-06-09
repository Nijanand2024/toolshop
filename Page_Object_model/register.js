import register from "../Test_Data/registration.json"
import { select_country_Dropdown } from "../Generic_utils/utils"
export class Registerpage{
    constructor(page){
        this.page=page;
        this.sing_in_Link= page.locator('//a[text()="Sign in"]');
        this.register_Link= page.locator('//a[text()="Register your account"]');
        this.firstName=page.locator('#first_name');
        this.LastName=page.locator('#last_name');
        this.Date_of_birth= page.locator('#dob');
        this.country=page.locator('#country');
        this.postalCode=page.locator('#postal_code');
        this.houseNumber= page.locator('#house_number');
        this.PhoneNumber= page.locator('#phone');
        this.email_address= page.locator('#email');
        this.pass_word= page.locator('#password');
        this.registr_Btn= page.locator('//button[@type="submit"]');

    }
    async user_registration(){
        await this.sing_in_Link.click();
        await this.register_Link.click();
        await this.firstName.fill(register.first_name);
        await this.LastName.fill(register.last_name);
        await this.Date_of_birth.fill(register.date_of_birth);
        await this.country.click();
        //Calling generic function- select_country_Drop-Down
        await select_country_Dropdown(this.page,'#country', 'IN');
        await this.postalCode.fill(register.postcode);
        await this.houseNumber.fill(register.house_number);
        await this.PhoneNumber.fill(register.contact_number);
        await this.email_address.fill(register.email);
        await this.pass_word.fill(register.passowrd);
        await this.registr_Btn.click();
    }
}