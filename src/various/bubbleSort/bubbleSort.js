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

// helper functions
var swap = function(array, i, j) {
  array[i] = array[j] + (array[j] = array[i]) - array[i];
};

// Alternative bitwise swap
// var swap = function(array, i, j) {
//   array[i] ^= array[j];
//   array[j] ^= array[i];
//   array[i] ^= array[j];
//   return array;
// }

// test > bubbleSort
// # bubbleSort([2,1,3]) === [1,2,3] (returns a sorted array)
// # bubbleSort([6,7,4,3,10,1,2,4]) === [1,2,3,4,4,6,7,10] (returns a sorted array)
//
// Time complexity: O(n^2)
exports.bubbleSort = function(array) {
  for (var i = 0; i < array.length; i++) {
    var swapped = false;
    for (var j = 1; j < array.length - i; j++) {
      if (array[j-1] > array[j]) {
        swap(array, j-1, j);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
};
