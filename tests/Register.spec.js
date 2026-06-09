import {test } from "@playwright/test"
import registration from "../Test_Data/registration.json"
import {Registerpage} from "../Page_Object_model/register"
test("User_registration", async ({page})=>{

    await page.goto(registration.url);
    const registr_Page= new Registerpage(page);
    await registr_Page.user_registration();
})