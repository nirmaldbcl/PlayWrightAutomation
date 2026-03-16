let marks = [4, 6, 8, 2, 6, 889]
console.log(marks[5])

marks[3] = 65
console.log(marks) //[4, 6, 8, 65, 6, 889]
console.log(marks.length) //6
marks.push(62)
console.log(marks) //[4, 6, 8, 65, 6, 889,62]
marks.pop()
console.log(marks) //[4, 6, 8, 65, 6, 889]
marks.unshift(12)
console.log(marks) //[12,4, 6, 8, 65, 6, 889]
console.log(marks.length) //7

console.log(marks.indexOf(65))
//120 available in the array

console.log(marks.includes(120)) //false
console.log(marks.includes(889)) //true

console.log(marks.slice(2, 5)) //[6,8,65]

for (i = 0; i < marks.length; i++) {
    console.log(marks[i])
}
let sum = 0
for (i = 0; i < marks.length; i++) {
    sum = sum + marks[i]

}
console.log(sum)
console.log("***********")
//reduce filter map

//reduce
let rollnumber = [2, 6, 8, 3, 3]
console.log(rollnumber.reduce((add, rollno) => add + rollno, 0))


//filter
let scores = [12, 13, 14, 16]
let evenScore = scores.filter(score => score % 2 == 0) //[12,14,16]
console.log(evenScore)

//map
let mappedArray = evenScore.map(mapped=> mapped*3)
console.log(mappedArray)

console.log(mappedArray.reduce((sum,val)=> sum+val,0))

let fruits =  ["banana", "mango","papaya","apple"]

console.log(fruits.sort())
console.log(fruits.reverse())

let scores1 = [5,2,9,1,23,7]

console.log(scores1.sort((a,b)=>a-b))
console.log(scores1.sort((a,b)=>b-a))









