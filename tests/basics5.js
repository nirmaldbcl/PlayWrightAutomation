let day = 'tuesday '
console.log(day.length) //8

let subday = day.slice(0,4)
console.log(subday) //tues

console.log(day[1])//u

let splitday = day.split("s")
console.log(splitday[1]) //day

console.log(splitday[1].length) //4

console.log(splitday[1].trim().length) //3

let date = '23'
let nextDate = '27'

let diff = parseInt(nextDate) - parseInt(date)
console.log(diff) //4

diff.toString()

let newQuote = day + "is funday"
console.log(newQuote) //tuesday is funday

let count =0

let value = newQuote.indexOf("day")
while(value!== -1)
{
    count++
    value = newQuote.indexOf("day",value+1)
}
console.log(count)


