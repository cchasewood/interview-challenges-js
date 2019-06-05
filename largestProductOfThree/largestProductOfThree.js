/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


// var largestProductOfThree = array => {
//   let one, two, three, none, ntwo;
//   const negatives = array.filter(val => val < 0);
//   if (negatives.length >= 2) {
//     negatives.map(val => {
//       if(!none || val < none) {
//       	ntwo = none;
//       	none = val;
//       }
//       else if(!ntwo || val < ntwo) {
//       	ntwo = val;
//       }
//     })
//   }
//   array.map(val => {
//     if(!one || val > one) {
//     	three = two;
//     	two = one;
//     	one = val;
//     }
//     else if(!two || val > two) {
//     	three = two;
//     	two = val;
//     }
//     else if(!three || val > three) three = val;
//   })
//   if(negatives.length === array.length) return one*two*three
//   else if(Math.abs(none*ntwo) > one*two) return none*ntwo*one;
//   else if(Math.abs(none*ntwo) > two*three) return one*none*ntwo
//   return one*two*three;
// };

//THE ONE LINER
var largestProductOfThree = arr =>  arr.every(val => val < 0) ? arr.sort((a,b)=>a-b).slice(0, 3).reduce((acc, cur) => acc*cur, 1) : arr.filter(val => val < 0).length >= 2 ? arr.sort((a,b)=>a-b).slice(0, 2).reduce((acc, cur) => acc*cur, 1) > arr.sort((a,b)=>a-b).slice(arr.length-3, arr.length-1).reduce((acc, cur) => acc*cur, 1) ? arr.sort((a,b)=>a-b).slice(0, 2).push(arr[arr.length-1]).reduce((acc, cur) => acc*cur, 1) : arr.sort((a,b)=>a-b).slice(arr.length-3, arr.length).reduce((acc, cur) => acc*cur, 1) : arr.sort((a,b)=>a-b).slice(arr.length-3, arr.length).reduce((acc, cur) => acc*cur, 1)