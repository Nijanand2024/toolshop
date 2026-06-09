// import   registration  from "../Test_Data/registration.json"
// import { select_Product_Dropdown } from "../Generic_utils/utils"
// import { select_payment_Dropdown } from "../Generic_utils/utils"
// import { expect } from '@playwright/test';
// export class SortProductsPage{
//     constructor(page){
//         this.page = page
//         this.Product_title = page.getByText(/Sheet Sander/i)
//         this.add_to_cart = page.locator('#btn-add-to-cart')
//         this.cart_item = page.locator('//a[@aria-label="cart"]')
//         this.Procedsubmit = page.locator('//button[@data-test = "proceed-1"]')
        
//         //this.signin_submit = page.locator('//button[@data-test = "proceed-2"]')
//         //this.signin_submit = page.getByRole('button', { name: 'Proceed to checkout' })
//         this.signin_submit = page.getByTestId('proceed-2')
//         this.housenum = page.locator('//input[@id="house_number"]')
//         this.billingsubmit = page.locator('//button[@data-test = "proceed-3"]')
//         this.payment_submit = page.locator('//button[@data-test="finish"]')

//     }
//     async Search_item(){
//         await select_Product_Dropdown(this.page, '//button[@data-test="nav-categories"]','Power Tools')
//         await this.Product_title.click()
//         await this.add_to_cart.click()
//         await this.cart_item.click()
//         await this.Procedsubmit.click()
//         await this.page.waitForLoadState('networkidle');
//         // await this.page.waitForLoadState('domcontentloaded');
//         // console.log("After proceed-1 URL:", this.page.url());
//         // const proceed2Count = await this.signin_submit.count();
//         // console.log("Proceed-2 count:", proceed2Count);



//         // await this.signin_submit.waitFor({ state: 'visible', timeout: 10000 });
//          await this.signin_submit.click()
//         await this.housenum.fill(registration.house_number)
//         await this.billingsubmit.click()
//         await select_payment_Dropdown(this.page , '#payment-method', 'Cash on Delivery')
//         await this.payment_submit.click()


//     }
// }