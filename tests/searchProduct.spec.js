import { test } from "@playwright/test"
import { SortProductsPage} from "../Page_Object_model/Search_Product"
import { LoginPage } from "../Page_Object_model/login"
import  registration from "../Test_Data/registration.json"
import { Registerpage } from "../Page_Object_model/register"
test("Search_Products", async ({page})=>{
    await page.goto(registration.url,{
        waitUntil: 'domcontentloaded',
        timeout: 60000
    })
    //! User register
    const user_register= new Registerpage(page);
    await user_register.user_registration()
    //! User Login
    const User_Login= new LoginPage(page)
    await User_Login.login();
   //! saerch items
    const Items = new SortProductsPage(page)
    await Items.Search_item()
    
})
