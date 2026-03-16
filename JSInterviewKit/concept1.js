// Q1. Can a JavaScript object hold a function as a property? Explain with an example

const person = {
    name: "John",
    age: 25,
    greet: function () {
        console.log("Hello I am " + this.name)
    }

}
console.log(person.name) //John
person.greet() // Hello I am John

//Q2. What are anonymous functions in JavaScript? Define their syntax and implementation

//function that have no name is called anonymous function

const greet = function (name) {
    return "Hello I am " + name;
}

console.log(greet("Kristi"))

//Q3. what is the difference between var,const, and let ? Explain with an example.

//'var' is function-scoped or globally-scoped and can be redeclared and updated

function varExample() {
    var x = 1;
    console.log(x); //1
    if (true) {
        var x = 2;
        console.log(x); //2
    }
    console.log(x); //2

}
varExample()

//'let' is block-scoped and can be updated but not re-declare within the same scope

function varExample2() {
    let x = 1;
    console.log(x) //1
    if (true) {
        let x = 2;
        y = 3; // by default its takes as a var keyword
        console.log(x) //2
    }
    x=4;
    console.log(y) //3
    console.log(x) //4
}
varExample2()

//'const' is block-scoped and cannot be updated or re-declared

function varExample3() {
    const x = 1;
    console.log(x) //1
    if (true) {
        let x = 2;
        y = 3; // by default its takes as a var keyword
        console.log(x) //2
    }
   
    console.log(y) //3
    console.log(x) //1
}
varExample3()

//Q4. Where are the push,pop,slice,shift and unshift methods used when accessing array elements ?

//Define an array
const fruits = ["banana","papaya","apple","date"]

//Access elements by index
console.log(fruits[2]); //apple
console.log(fruits[3]); //date

//Add an element at end of the array
fruits.push("chiku")
console.log(fruits); //[ 'banana', 'papaya', 'apple', 'date', 'chiku' ]

//Remove the last element from the array
const lastElememt = fruits.pop()
console.log(lastElememt) // chiku
console.log(fruits); //[ 'banana', 'papaya', 'apple', 'date']

//Add an element in the begining of the array
fruits.unshift("fig")
console.log(fruits); //[ 'fig', 'banana', 'papaya', 'apple', 'date']

//Remove the first element from array

const firstElement = fruits.shift(); 
console.log(firstElement)
console.log(fruits); //[ 'banana', 'papaya', 'apple', 'date']

//Find the index of element
const index = fruits.indexOf("apple")
console.log(index) //2

//Remove an element by index
const removedElement = fruits.splice(1,2) 
console.log(removedElement) //[ 'papaya', 'apple' ]
console.log(fruits); //[ 'banana', 'date' ]

