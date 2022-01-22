// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//Example:
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

function sum (n) {

    let sumNum = 0;
    for(let i = 0; i<=n; i++) {
        sumNum += i;
    }
    return sumNum;
}
sum(5)