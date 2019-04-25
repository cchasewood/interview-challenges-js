/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
	let pivot = Math.floor(array.length/2);
	let first = [];
	let second = [];
	let count = 0;
	for(let i=0; i<array.length;i++){
		if(array[i] < array[pivot]) first.push(array[i]);
		else if(array[i] > array[pivot]) second.push(array[i]);
		else if(array[i] === array[pivot] && i !== pivot) count++;
	}
	if(first.length>1) first = quicksort(first);
	if(second.length>1) second = quicksort(second);
	second.unshift(array[pivot])
	for(let i=0;i<count;i++){
		second.unshift(array[pivot]);
	}
	return first.concat(second);
};
