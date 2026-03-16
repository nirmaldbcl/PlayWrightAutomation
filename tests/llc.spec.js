import {test, expect} from '@playwright/test';

test("Playwright Special locator" , async ({page}) =>
{
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").check();
//await page.getByLabel("Employed").check();
await page.getByRole('radio', { name: 'Student' }).check();

await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill("abc123");
await page.getByRole("button",{name: 'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await page.getByRole("link",{name: 'Shop'}).click();
await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();

//await page.pause();


}

)




test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.locator('app-card').filter({ hasText: 'Samsung Note 8 $24.99 Lorem' }).getByRole('button').click();
  await page.getByText('Checkout ( 2 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).fill('ind');
 
  await page.getByText('India').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  
  await expect(page.locator('app-checkout')).toContainText('Please choose your delivery location. Then click on purchase button');
  await expect(page.getByText('× Success! Thank you! Your')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Purchase' })).toBeVisible();
  await expect(page.locator('app-checkout')).toContainText('× Success! Thank you! Your order will be delivered in next few weeks :-).');
  await expect(page.getByRole('textbox', { name: 'Please choose your delivery' })).toHaveValue('India');
});