/*
 * permCheck.
 * Check whether array A is a permutation.
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/perm_check
 */

// test > permCheck
// # permCheck([ 4, 1, 3, 2 ]) == 1 (first example test)
// # permCheck([ 4, 1, 3 ]) == 0 ( second example test)
// # permCheck([ 1000000000 ]) === 0 (single element with maximal value)
// # permCheck([ 1 ]) == 1 (single element with minimal value)
// # permCheck([ 2 ]) == 0 (single element)
// # permCheck([ 1, 2 ]) == 1 (two elements)
// # permCheck([ 3, 1 ]) == 0 (two elements)
// # permCheck([ 3, 2 ]) == 0 (two elements)
// # permCheck([ 1, 1 ]) == 0 (two elements)
// # permCheck([ 1, 4, 1 ]) == 0 (total sum is correct, but it is not a permutation, N <= 10)
// # permCheck([ 2, 2, 2 ]) == 0 (total sum is correct, but it is not a permutation, N <= 10)
// # permCheck([ 9, 5, 7, 3, 2, 7, 3, 1, 10, 8 ]) == 0 (total sum is correct, but it is not a permutation, N <= 10)
// # permCheck([ 3, 2, 1 ]) == 1 (total sum is correct, but it is not a permutation, N <= 10)
//
// Worst Time Allowed: O(n)
// Note: we could reach O(nlogn) but with a small dataSets is less favorable
exports.permCheck = function(A) {

  var elCount = {};
  var total = A.length;

  for (var i = 0; i < A.length; i++) {
    if (A[i] <= A.length && !elCount[A[i]]) {
      elCount[A[i]] = true;
      if (--total === 0) {
        return 1;
      }
    }
  }
  return 0;
};
