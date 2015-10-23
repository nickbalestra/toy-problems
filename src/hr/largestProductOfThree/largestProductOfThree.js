/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([-2, -1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// test > largestProductOfThree
// # largestProductOfThree([2,1,3,7]) === 42 (largest possible product of any 3 numbers)
//
// Time complexity: O(n), dependin on Array.sort method
exports.largestProductOfThree = function(array) {
  array.sort(function(a,b) { return a - b; });
  var len = array.length;
  var largestWithNegatives = array[0] * array[1] * array[len-1];
  var largest = array[len-3] * array[len-2] * array[len-1];
  return largestWithNegatives > largest ? largestWithNegatives : largest;
};
