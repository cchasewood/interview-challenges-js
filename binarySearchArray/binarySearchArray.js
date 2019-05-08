/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
	let midIndex = Math.floor((array.length-1)/2)
	let mid = array[midIndex];
	if(target === array[midIndex]) return midIndex;
	else if(target < array[midIndex]) {
		for(let i=midIndex-1; i >= 0; i--){
			if(target === array[i]) return i;
		}
	}
	else {
		for(let i=midIndex+1; i < array.length; i++){
			if(target === array[i]) return i;
		}
	}
	return null;
};