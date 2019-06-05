/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

//THE ONE LINER
var largestProductOfThree = arr =>  arr.every(val => val < 0) ? arr.sort((a,b)=>a-b).slice(0, 3).reduce((acc, cur) => acc*cur, 1) : arr.filter(val => val < 0).length >= 2 ? arr.sort((a,b)=>a-b).slice(0, 2).reduce((acc, cur) => acc*cur, 1) > arr.slice(arr.length-3, arr.length-1).reduce((acc, cur) => acc*cur, 1) ? arr.slice(0, 2).concat(arr.slice(arr.length-1)).reduce((acc, cur) => acc*cur, 1) : arr.sort((a,b)=>a-b).slice(arr.length-3, arr.length).reduce((acc, cur) => acc*cur, 1) : arr.sort((a,b)=>a-b).slice(arr.length-3, arr.length).reduce((acc, cur) => acc*cur, 1)