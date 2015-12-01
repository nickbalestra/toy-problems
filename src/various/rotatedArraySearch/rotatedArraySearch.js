/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {

  function partition(left, right) {
    var mid = Math.floor((right - left) / 2) + left;

    if (rotated[mid] === target) {
      return mid;
    }

    if (rotated[mid] < rotated[right]) {
      // ordered part is right;
      if (target > rotated[mid] && target < rotated[right]) {
        // target is on right partition
        console.log('is right');
        partition(mid, right);
      }
    } else {
      // ordered part is left
      console.log('target is left');
    }
    console.log(mid);
  }
  partition(0, rotated.length - 1);
};

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2))
