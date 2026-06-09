//========= function. for country drop-down selection========///

export async function select_country_Dropdown(page, locator, value){
    await page.locator(locator).selectOption(value)
}

export async function select_Product_Dropdown(page, product_locator, categoryName) {
    await page.locator(product_locator).click();
    await page.locator(`//a[text()='${categoryName}']`).click()
    
}

export async function select_payment_Dropdown(page, locator, value){
    await page.locator(locator).selectOption(value) 
}