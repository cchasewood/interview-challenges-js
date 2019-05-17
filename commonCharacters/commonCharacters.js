/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (...strs) => strs[0] ? strs.shift().split('').filter((val, i, self) => self.indexOf(val) === i).filter(cur => strs.every(str => str.split('').includes(cur))).join('') : '';