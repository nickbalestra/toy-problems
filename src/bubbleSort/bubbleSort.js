/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.

var swap = function(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

var bitwiseSwap = function(array, i, j) {
  array[i] ^= array[j];
  array[j] ^= array[i];
  array[i] ^= array[j];
  return array;
}

var bubbleSort = function(array) {
  for (var i = 0, len = array.length; i < len - 1; i++ ){
    var swapped = false;
    for (var j = 0; j < len - 1 - i; j ++) {
      if (array[j] > array[j + 1]) {
        swap(array,j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
};

console.log(bubbleSort([6, 7, 4, 3, 10, 1,2,4]))