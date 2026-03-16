//1) Find the largest number in (23, 75, 6, 84, 6)

function findLargest(numbers: number[]): number {
    let largest = numbers[0];
    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}
let arr: number[] = [10, 45, 23, 89, 5];
console.log("Largest number:", findLargest(arr));

//2) Filter Even Numbers from an Array

function filterEven(arr: number[]): number[] {
    return arr.filter(n => n % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));

//3)Count Occurrences of Each Word in a Sentence

function wordCount(sentence: string): Record<string, number> {
    const words = sentence.toLowerCase().split(" ");
    const map: Record<string, number> = {};
    for (const word of words) {
        map[word] = (map[word] || 0) + 1;
    }
    return map;
}
console.log(wordCount("I like TypeScript because I like coding"));

//4) Remove Duplicate Elements from Array

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//5) Count Vowels in a String

function countVowels(str: string) {

    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("JavauScript"));
