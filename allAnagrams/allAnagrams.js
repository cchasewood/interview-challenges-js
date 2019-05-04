/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
/*___________________________ALL ANAGRAMS_____________________________*/
// added anagram and anagrams parameters to
// allow for recursion without a helper function
var allAnagrams = function(string, anagram = '', anagrams = []){
	/*_____________________Checking for Recursion____________________*/
	string = string.toUpperCase();
	if (anagram) anagrams.push(anagram);
	if (anagram.length === string.length) results.push(anagram);
	/*_______________Recursively Building Anagram List_______________*/
	for(let i=0; i< string.length; i++) {
		anagram += string[i];
		allAnagrams(string.slice(0,i)+string.slice(i+1), anagram, anagrams);
		anagram = anagram.slice(0, anagram.length-1);
	}
	/*___________Ensuring Uniqueness and Building Results____________*/
	let unique = [...new Set(anagrams)];
	let results = [];
	for(let i=0; i< unique.length; i++){
		if(unique[i].length === string.length) results.push(unique[i])
	}
	return results;
}

