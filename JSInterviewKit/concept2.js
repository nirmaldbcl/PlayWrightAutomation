//Q5. Is JavaScript Asynchronous? 

//Ans: Yes

//Q6. What are callback functions in javaScript?

//Ans: A callback function is a function that is passed as an argument 
// to another function and is executed after some operation has been completed.
//Callbacks are often used for asynchronous operations.

//Q7. What are promises in JavaScript? Explain the difference between callback functions 
// and promises with example ?

//Ans: There are three state of promise 1) resolve 1) pending 2) fulfilled  3) rejected 
//1) pending: The initial state. The asynchronous operation 
// (like navigating to a URL or clicking an element) is still running and has not yet completed or failed.
//fulfilled (also called resolved): The operation completed successfully, 
// and the promise now has a resulting value. 
// In Playwright, this often means a condition was met, such as an element becoming visible.
//rejected: The operation failed, or an error occurred during its execution. 

//Q8. What is difference between "==" and "===" ?

//Ans: 
console.log(5==5) //true 
console.log(5=="5") //true
console.log(5===5) //true
console.log(5==="5") //false

//"==" (Loose Equality),Compares values only,Automatically converts (type coercion) the operands before comparing
//"==="(Strict Equality),Compares both value AND type,No type conversion

//Q9. What is the difference between "null" and "undefined" in JavaScript?

//Ans: 

let a = null;
console.log(a) //null
console.log(typeof a) //object

let b;
console.log(b) //undefined
console.log(typeof b) //undefined

//Q10 Fixture is Playeright

//1) page 2) context 3) browser 4) request

//Architecture & Comparison
//How does Playwright's architecture differ from Selenium's? 
// Playwright uses a persistent WebSocket connection to talk directly to the browser, 
// while Selenium relies on the W3C WebDriver protocol and individual HTTP requests, 
// making Playwright significantly faster.

Feature 	    Playwright	                    Selenium	                        Cypress
Protocol	WebSocket (Bi-
           directional, persistent)	        HTTP (JSON Wire Protocol/W3C)	        Direct Execution (In-browser event loop)

Speed	    Very Fast (single connection)	Slower (new connection per command)	    Fast (limited by single-tab/proxy)

Language 
Support	    JS/TS, Python, Java, .NET	    Almost all (Java, Python, Ruby, etc.)	Only JavaScript / TypeScript

Browser 
Support	    Chromium, Firefox, WebKit (Safari)	All (including legacy like IE)	Chromium, Firefox, WebKit (Exp.)

Auto-Waiting	Native (waits for elements to be stable)	Requires manual implementation (v4+ adds some)	Native

Parallelism	    Native (via Browser Contexts)	        Requires Grid/External setup	Paid/Dashboard (Free is limited)
