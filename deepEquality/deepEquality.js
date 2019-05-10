/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  let appleKeys = Object.keys(apple);
  for(let i=0;i<appleKeys.length;i++) {
    if(typeof orange[appleKeys[i]] === 'object') {
      let equal = deepEquals(orange[appleKeys[i]], apple[appleKeys[i]]);
      if(equal === false) return false;
    }
    else if(orange[appleKeys[i]] !== apple[appleKeys[i]]) return false;
  }
  return true;
};