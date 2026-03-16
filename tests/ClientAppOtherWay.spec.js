const { test, expect } = require('@playwright/test');
// fixture 1) browser 2)page 3) 4)

test('Browser Context First Playwright test', async ({ page }) => {
    const email = 'nirmaldbcl@gmail.com';
    const productsName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill('Test@123');
    await page.getByRole("button", { name: 'Login' }).click();

    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3' }).getByRole("button", { name: ' Add To Cart' }).click();
    await page.getByRole("listitem").getByRole("button", { name: 'Cart' }).click();



    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole("button", { name: 'Checkout' }).click();


    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    await page.getByRole("button", { name: 'India' }).nth(1).click();


    await page.getByText("PLACE ORDER").click();

    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();




});




