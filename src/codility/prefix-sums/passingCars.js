/*
 * passingCars.
 * Count the number of passing cars on the road.
 *
 * Requirements & constraints:
 * https://codility.com/demo/take-sample-test/passing_cars/
 */

// test > passingCars
// # passingCars([ 0, 1, 0, 1, 1 ]) == 5 (first example test)
// # passingCars([0]) == 0 (single element)
// # passingCars([1]) == 0 (single element)
// # passingCars([1,0]) == 0 (two elements)
// # passingCars([0,0]) == 0 (two elements)
// # passingCars([0,1]) == 1 (two elements)
// # passingCars([1,1]) == 0 (two elements)
// # passingCars([ 0, 1, 0, 1, 0, 1 ]) == 6 (simple test)
//
// Worst Time Allowed: O(n)
exports.passingCars = function(A) {
  var total = A.reduce(function(prev, curr) {
    return prev + curr;
  });

  var count = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count += total;
      if (count > 1000000000) {
        return -1;
      }
    } else {
      total--;
    }
  }
  return count;
};
