/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	let storage = {};
	for(let i=0;i<string.length;i++){
		if(!storage[string[i]]) {
			storage[string[i]] = 1;
		}
		else storage[string[i]]++;
	}
	for(key in storage){
		if(storage[key] === 1) return key;
	}
  // TODO: your solution here
};
