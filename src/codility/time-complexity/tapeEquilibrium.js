/*
 * tapeEquilibrium.
 * Given a non-empty zero-indexed array A of N integers,
 * returns the minimal difference that can be achieved.
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/tape_equilibrium
 */

// test > commonCharacters
// # tapeEquilibrium([3,1,2,4,3]) === 1 (example test)
// # tapeEquilibrium([ -1000, 1000 ]) === 2000 (two elements)
// # tapeEquilibrium([ 1, 1 ]) === 0 (two elements)
// # tapeEquilibrium([ 5, 6, 2, 4, 1 ]) === 4 (simple test with positive numbers, length = 5)
// # tapeEquilibrium([ -10, -5, -3, -4, -5 ]) === 3 (simple test with negative numbers, length = 5)
//
// Time complexity: O(n)
exports.tapeEquilibrium = function(A) {

  var sum = A.reduce(function(prev, curr) {
    return prev + curr;
  });

  var leftSum = 0;
  var rightSum = 0;

  var diff;
  var minDiff = Infinity;

  for (var i = 1; i < A.length; i++) {
    leftSum += A[i-1];
    rightSum = sum - leftSum;
    diff = Math.abs(rightSum - leftSum);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
};
