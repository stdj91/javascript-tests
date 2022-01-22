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

let words = ['spray','hii', 'limit', 'exuberant', 'destruction']

const modifiedWords = words.filter( (words, index, arr) => {
    arr[index+1] += ' extra'
    return words.length < 6
})

console.log(modifiedWords)