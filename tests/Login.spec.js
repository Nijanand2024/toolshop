import {test } from "@playwright/test"
import registration from "../Test_Data/registration.json"
import { LoginPage } from "../Page_Object_model/login";
test("User_Login", async ({page})=>{

    await page.goto(registration.url);
    const login_Page= new LoginPage(page);
    await login_Page.login();
})