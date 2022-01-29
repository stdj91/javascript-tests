// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//Example:
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300


// solution:
// function sum (n) {

//     let sumNum = 0;
//     for(let i = 0; i<=n; i++) {
//         sumNum += i;
//     }
//     return sumNum;
// }
// console.log(sum(5))
// <------------------------------------------------------------------------------->
// task 2:
// Create a function that takes the age in years and returns the age in days.

// function ages(num) {
//     return(num * 365)
// }
// console.log(ages(10))
// <------------------------------------------------------------------------------->



//Task 3
//Create a function which returns the number of true values there are in an array.
//countTrue([true, false, false, true, false]) ➞ 2
//countTrue([false, false, false, false]) ➞ 0
//countTrue([]) ➞ 0

//Solution 1:
// function check(array) {
//     var times = 0;
//     for(var i = 0; i<array.length; i++) {
//         if(array[i] === true) {
//             times++  
//         }
//     }
//     return times;
// }

// console.log(check([false, false, false, false]))

//Solution 1:

// const countTrue = r => r.filter(Boolean).length
// console.log(countTrue([true, false, false, true, false]))

// let words = ['spray','hii', 'limit', 'exuberant', 'destruction']

// const modifiedWords = words.filter( (words, index, arr) => {
//     arr[index+1] += ' extra'
//     return words.length < 6
// })

// console.log(modifiedWords)
// <------------------------------------------------------------------------------->
//task 4
// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Solution:

// function concat(...args) {
// 	return [].concat(...args)
// }

//<------------------------------------------------------------------------------->
//Task 5
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

// solution: 1

// function arrayOfMultiples (num, length) {
// 	var result = []
//     for (let i = 1; i <= length; i++) {
//         result.push(num*i)
        
//     }
//     return result
// }
//<------------------------------------------------------------------------------->

//Task 6
// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// Examples
// shiftToLeft(5, 2) ➞ 20

// shiftToLeft(10, 3) ➞ 80

// shiftToLeft(-32, 2) ➞ -128

// shiftToLeft(-6, 5) ➞ -192

// shiftToLeft(12, 4) ➞ 192

// shiftToLeft(46, 6) ➞ 2944

// solution 1
// const shiftToLeft = (x, y) => x * 2 ** y

