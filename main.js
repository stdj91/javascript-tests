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
//<------------------------------------------------------------------------------->
//task 7
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// cubes(3) ➞ 27

// cubes(5) ➞ 125

// cubes(10) ➞ 1000
//Solution
// function cubes(a) {
// 	return a ** 3
// }
//<------------------------------------------------------------------------------->
//task 8
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

// function second (a) {
//     return a * 60 * 60
// }
// console.log(second(1))
//<------------------------------------------------------------------------------->

//task 9
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
// function plus(a) {
//     return a + 1;
// }
//<------------------------------------------------------------------------------->

// task 10
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:
//sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
// function sortDrinkByPrice(drinks){
// 	const sorted = drinks.sort(function(a, b){
//     return a.price - b.price;
// 	});
// 	return sorted;
// }
//<------------------------------------------------------------------------------->

//task 11
// print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” 
//for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
// solution 1
// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }
//<------------------------------------------------------------------------------->
//task 12

//Coding challenge: Calculate the sum of numbers in an array of numbers

// function sumArray(ar)
// {
//     var sum = 0;

//     for(var i = 0; i < ar.length; i++)
//     {
//         sum += ar[i];
//     }

//     return sum;
// }

// var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// var sum = sumArray(ar);
// println(sum);

//<------------------------------------------------------------------------------->
//task 13
//Coding challenge: Calculate the average of the numbers in an array of numbers

// function averageArray(ar)
// {
//     var n = ar.length;
//     var sum = 0;

//     for(var i = 0; i < n; i++)
//     {
//         sum += ar[i];
//     }

//     return sum / n;
// }

// var ar = [1, 3, 9, 15, 90];
// var avg = averageArray(ar);

// println("Average: ", avg);

//<------------------------------------------------------------------------------->
//task 14
//Coding challenge: Create a function that receives an array of numbers 
//and returns an array containing only the positive numbers
// function getPositives(ar)
// {
//     var ar2 = [];

//     for(var i = 0; i < ar.length; i++)
//     {
//         var el = ar[i];

//         if (el >= 0)
//         {
//             ar2.push(el);
//         }
//     }

//     return ar2;
// }

// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = getPositives(ar);

// println(ar2);

//<------------------------------------------------------------------------------->
//task 15
//Coding challenge: Find the maximum number in an array of numbers
// function findMax(ar)
// {
//     var max = ar[0];

//     for(var i = 0; i < ar.length; i++)
//     {
//         if (ar[i] > max)
//         {
//             max = ar[i];
//         }
//     }

//     return max;
// }

// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// println("Max: ", max);
//<------------------------------------------------------------------------------->
//task 16
//Coding challenge: Create a function that will return a Boolean specifying if a number is prime

// function isPrime(n)
// {
//     if (n < 2)
//         return false;

//     if (n == 2)
//         return true;

//     var maxDiv = Math.sqrt(n);

//     for(var i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }

//     return true;
// }

// println(2, " is prime? ", isPrime(2));
// println(3, " is prime? ", isPrime(3));
// println(4, " is prime? ", isPrime(4));
// println(5, " is prime? ", isPrime(5));
// println(9, " is prime? ", isPrime(9));
//<------------------------------------------------------------------------------->
//task 17
//Coding challenge: Calculate the sum of digits of a positive integer number
// function sumDigits(n)
// {
//     var s = n.toString();
//     var sum = 0;

//     for(var char of s)
//     {
//         var digit = parseInt(char);
//         sum += digit;
//     }

//     return sum;
// }

// var sum = sumDigits(1235231);
// println("Sum: ", sum);
//Coding challenge: Reverse a string
// var s = reverseString("JavaScript");
// println(s);

// function reverseString(s)
// {
//     var s2 = "";
    
//     for(var i = s.length - 1; i >= 0; i--)
//     {
//         var char = s[i];
//         s2 += char;
//     }
    
//     return s2;
// }


//<------------------------------------------------------------------------------->
//task 18
//Create a function that will return an array with words inside a text
// var text = "Create a function, that will return an array (of string), with the words inside the text";

// println(getWords(text));

// function getWords(text)
// {
//     let startWord = -1;
//     let ar = [];
    
//     for(let i = 0; i <= text.length; i++)
//     {
//         let c = i < text.length ? text[i] : " ";

//         if (!isSeparator(c) && startWord < 0)
//         {
//             startWord = i;
//         }
        
//         if (isSeparator(c) && startWord >= 0)
//         {
//             let word = text.substring(startWord, i);
//             ar.push(word);
            
//             startWord = -1;
//         }
//     }

//     return ar;
// }

// function isSeparator(c)
// {
//     var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
//     return separators.includes(c);
// }
//<------------------------------------------------------------------------------->
//task 19
//Coding challenge: Rotate an array to the left 1 position
// var ar = [1, 2, 3];
// rotateLeft(ar);
// println(ar);

// function rotateLeft(ar)
// {
//     var first = ar.shift();
//     ar.push(first);
// }

//<------------------------------------------------------------------------------->
//task 20
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


// solution: 
// var arr1=[-3,8,7,6,5,-4,3,2,1];
// var arr2=[];
// var min=arr1[0];
// var pos;
// var max=arr1[0];
// for (i=0; i<arr1.length; i++)
// {
//         if (max<arr1[i]) max=arr1[i];
// }

// for (var i=0;i<arr1.length;i++)
// {
//         for (var j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j]) 
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
// }
// console.log(arr2);
//<------------------------------------------------------------------------------->
//task 21
// Write a JavaScript program which prints the elements of the following array.

// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------
// solution:
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
// for (var i in a) 
// {
//    console.log("row " + i);
//    for (var j in a[i]) 
//      {
//       console.log(" " + a[i][j]);
//      }
// }
//<------------------------------------------------------------------------------->

//task22
//Write a JavaScript program to create a Clock
// function my_Clock() 
//   {
//   this.cur_date = new Date();
//   this.hours = this.cur_date.getHours();
//   this.minutes = this.cur_date.getMinutes();
//   this.seconds = this.cur_date.getSeconds();
//   }
// my_Clock.prototype.run = function ()
//   {
//   setInterval(this.update.bind(this), 1000);
//   };
// my_Clock.prototype.update = function () 
//   {
//   this.updateTime(1);
//   console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
//   };
// my_Clock.prototype.updateTime = function (secs) 
//   {
//   this.seconds+= secs;
//  if (this.seconds >= 60)
//   {
//   this.minutes++;
//   this.seconds= 0;
//   }
//  if (this.minutes >= 60)
//   {
//   this.hours++;
//   this.minutes=0;
//   }
// if (this.hours >= 24)
//   {
//   this.hours = 0;
//   }
// };
// var clock = new my_Clock();
//   clock.run();

//<------------------------------------------------------------------------------->

//task23

//Write a JavaScript function to merge two arrays and removes all duplicates elements.
// function merge_array(array1, array2) {
//     var result_array = [];
//     var arr = array1.concat(array2);
//     var len = arr.length;
//     var assoc = {};

//     while(len--) {
//         var item = arr[len];

//         if(!assoc[item]) 
//         { 
//             result_array.unshift(item);
//             assoc[item] = true;
//         }
//     }

//     return result_array;
// }


// var array1 = [1, 2, 3];

// var array2 = [2, 30, 1];

// console.log(merge_array(array1, array2));

//<------------------------------------------------------------------------------->

//task24
//Write a JavaScript function to find the unique elements from two arrays.
//Solution:
// function difference(arr1,arr2) {
  
//     var a1= flatten(arr1,true);
//     var a2= flatten(arr2,true);
    
//    var a=[], diff=[];
//     for(var i=0;i< a1.length;i++)
//       a[a1[i]]=false;
//     for(i=0;i< a2.length;i++)
//     if(a[a2[i]]===true) 
//        { delete a[a2[i]];}
//       else a[a2[i]]=true;
//     for(var k in a)
//       diff.push(k);
//     return diff;   
//     }
  
//   var flatten = function(a, shallow,r){
//     if(!r){ r = [];}
//   if (shallow) {
//     return r.concat.apply(r,a);
//     }  
//      for(i=0; i< a.length; i++){
//           if(a[i].constructor == Array){
//               flatten(a[i],shallow,r);
//           }else{
//               r.push(a[i]);
//           }
//       }
//       return r;
//   };
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//   console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//<------------------------------------------------------------------------------->

//task25
//Write a JavaScript function to find the difference of two arrays
//solution

// function differenceOf2Arrays (array1, array2) {
//     var temp = [];
//     array1 = array1.toString().split(',').map(Number);
//     array2 = array2.toString().split(',').map(Number);
    
//     for (var i in array1) {
//     if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
//     }
//     for(i in array2) {
//     if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
//     }
//     return temp.sort((a,b) => a-b);
//     }
    
//     console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
//     console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));