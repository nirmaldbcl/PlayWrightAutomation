const { test, expect } = require('@playwright/test');
// fixture 1) browser 2)page 3) 4)

test('Browser Context First Playwright test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitle = page.locator(".card-body a");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    //css

    await userName.fill("ahulshettyacademy");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    console.log(await cardTitle.nth(3).textContent())
    const allTitles = await cardTitle.allTextContents()
    console.log(allTitles);


});

test('UI controls', async ({ page }) => {
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill('rahulshettyacademy');
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await dropdown.selectOption("Consultant");
    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").nth(1).isChecked());
    await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", 'blinkingText');

}
)

test('Child windows handle', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
        documentLink.click(),])

        const text = await newPage.locator(".red").textContent();
        const arrayText = text.split("@");
        const domain = arrayText[1].split(" ")[0]
        console.log(domain);
        await page.locator("#username").fill(domain)
        console.log(await page.locator("#username").inputValue());
        

})

// test('Page Playwright test',async ({page})=>
// {

// await page.goto('https://google.com');
// //get title - assertion
// console.log(await page.title());
// await expect(page).toHaveTitle("Google")

// });