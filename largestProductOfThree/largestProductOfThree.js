/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = array => {
  let one, two, three;
  //array.filter((val, i, self) => self.length <= 3 ? val : self.forEach((value, idx, arr, acc = 0) => val <= value))
  array.map((val, i, self) => {
    if(!one || val > one) {
    	three = two;
    	two = one;
    	one = val;
    }
    else if(!two || val > two) {
    	three = two;
    	two = val;
    }
    else if(!three || val > three) three = val;
  })

  return one*two*three;
};