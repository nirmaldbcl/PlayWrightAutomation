const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail:"nirmaldbcl@gmail.com",userPassword:"Test@123"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"697f5d66c941646b7acaeadf"}]};
let token;
let orderId;


 
test.beforeAll( async()=>
{ //Login API
const apiContext = await request.newContext();
 
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginPayLoad
    }) //200, 201,
 
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
 
    token = loginResponseJson.token;
   
    console.log(token);
   
    //
 const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data : orderPayLoad,
        header : {
 
            'Authorization' : token,
             'Content-Type' : 'application/json'
                } ,
    })
 
const orderResponseJson = await orderResponse.json();
console.log(orderResponseJson);
orderId = orderResponseJson.orders[0];
console.log(orderId);
 
});
 
test.beforeEach( ()=>
{
 
})
 
//create order is success
 
test('Place the order',async ({page}) =>
{
 
    const orderId = createOrder();
    await page.addInitScript(value => {
 
    window.localStorage.setItem('token',value);
 
 
}, token );
 
 
 await page.goto("https://rahulshettyacademy.com/client");
 await page.locator("button[routerlink*='myorders']").click();
 await page.locator("tbody").waitFor();
 const rows = await page.locator("tbody tr");
 
 for(let i =0; i< await rows.count(); ++i)
 {
 
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if(orderId.includes(rowOrderId))
    {
        await rows.nth(i).locator("button").first().click();
        break;
    }
 
 }
 
 const orderIdDetails = await page.locator(".col-text").textContent();
 await page.pause();
 expect(orderId.includes(orderIdDetails)).toBeTruthy();
// await page.locator("#userEmail").fill("nirmaldbcl@gmail.com");
// await page.locator("#userPassword").fill("Test@123");
// await page.locator("[value='Login']").click();
//await page.waitForLoadState('networkidle');
// await page.locator(".card-body b").first().waitFor();
// const titles = await page.locator(".card-body b").allTextContents();
// console.log(titles);
 
 
 
 
});