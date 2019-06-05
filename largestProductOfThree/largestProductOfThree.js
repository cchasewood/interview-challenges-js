/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = array => {
  let one, two, three, none, ntwo;
  //array.filter((val, i, self) => self.length <= 3 ? val : self.forEach((value, idx, arr, acc = 0) => val <= value))
  let negatives = array.filter(val => val < 0);
  if (negatives.length >= 2) {
    negatives.map(val => {
      if(!none || val < none) {
      	ntwo = none;
      	none = val;
      }
      else if(!ntwo || val < ntwo) {
      	ntwo = val;
      }
    })
  }
  array.map(val => {
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
  if(negatives.length === array.length) return one*two*three
  else if(Math.abs(none*ntwo) > one*two) return none*ntwo*one;
  else if(Math.abs(none*ntwo) > two*three) return one*none*ntwo
  return one*two*three;
};