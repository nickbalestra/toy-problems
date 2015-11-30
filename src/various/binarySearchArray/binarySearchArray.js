/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

// test > binarySearch
// # binarySearch([1, 2, 3, 4, 5], 4) == 3 (find the index of an element)
// # binarySearch([1, 2, 3, 4, 5], 6) == -1 (find the index of an element)
//
// Time complexity: O(logn)
exports.binarySearch = function (array, target) {

  var partition = function(left, right) {
    if (left === right || target < array[left] || target > array[right]) {
      return - 1;
    }

    var mid = Math.floor((right - left) / 2) + left;

    if (array[mid] === target) {
      return mid;
    }

    if (target < array[mid]) {
      return partition(left, mid);
    } else {
      return partition(mid, right);
    }
  };
  return partition(0, array.length - 1);
};
