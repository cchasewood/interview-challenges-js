/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/
const reverseInteger = (num, rev = 0) => num > 1 ? reverseInteger(num/10,rev=Math.floor(rev*10 + num%10)) : num === 1 ? 1 : rev;