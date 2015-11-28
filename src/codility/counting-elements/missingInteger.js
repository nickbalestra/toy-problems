/*
 * missingInteger.
 * Find the minimal positive integer not occurring in a given sequence.
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/missing_integer
 */

// test > missingInteger
// # missingInteger([ 1, 3, 6, 4, 1, 2 ]) == 5 (first example test)
// # missingInteger([ 1 ]) == 2 (a single element)
// # missingInteger([ 0 ]) == 1 (a single element)
// # missingInteger([ -1 ]) == 1 (a single element)
// # missingInteger([ 4, 5, 6, 2 ]) == 1 (simple test)
// # missingInteger([ 4, 1, 5, 6, 2 ]) == 3 (simple test)
//
// Worst Time Allowed: O(n)
// Note: we could reach O(nlogn) but with a small dataSets is less favorable
exports.missingInteger = function(A) {

  var integers = {};

  for (var i = 0; i <= A.length; i++) {
    if (!integers[A[i]]) {
      integers[A[i]] = true;
    }
  }

  for (var j = 1; j <= 100000; j++) {
    if (!integers[j]) {
      return j;
    }
  }

};
