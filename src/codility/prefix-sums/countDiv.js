/*
 * countDiv.
 * Compute number of integers divisible by k in range [a..b].
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/count_div
 */

// test > countDiv
// # countDiv(6, 11, 2) == 3 (first example test)
// # countDiv(11, 345, 17) == 20 (simple test)
// # countDiv(0, 0, 11) == 1 (minimal test)
// # countDiv(1, 1, 11) == 0 (minimal test)
// # countDiv(10, 10, 7) == 0 (extreme ifempty)
// # countDiv(10, 10, 5) == 1 (extreme ifempty)
// # countDiv(10, 10, 20) == 0 (extreme ifempty)
// # countDiv(10, 14, 2) == 3 (verify handling of range endpoints)
// # countDiv(11, 14, 2) == 2 (verify handling of range endpoints)
// # countDiv(10, 13, 2) == 2 (verify handling of range endpoints)
// # countDiv(12, 13, 2) == 1 (verify handling of range endpoints)
// # countDiv(0, 14, 2) == 8 (verify handling of range endpoints)
// # countDiv(0, 13, 2) == 7 (verify handling of range endpoints)
//
// Worst Time Allowed: O(1)
exports.countDiv = function(A, B, K) {

  var min;
  var max;

  if (A % K > 0) {
    min = A - (A % K) + K;
  } else {
    min = A;
  }

  if (B % K > 0) {
    max = B - (B % K);
  } else {
    max = B;
  }

  return 1 + (max - min) / K;
};
