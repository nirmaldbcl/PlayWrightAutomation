//object is collection of properties

let person = {
    firstName: 'Tim',
    lastName: 'joe',
    home:'uk'

}

console.log(person)
console.log(person.lastName)

person.gender = 'Male'
console.log(person)

delete person.gender
console.log(person)

console.log('gender' in person)
console.log('firstName' in person)

//print all the values of the javascript object 
for(let key in person)
{
    console.log(person[key])
}
