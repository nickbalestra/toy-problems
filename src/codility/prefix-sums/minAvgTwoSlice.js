/*
 * minAvgTwoSlice.
 * Find the minimal average of any slice containing at least two elements.
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/min_avg_two_slice
 */

// test > minAvgTwoSlice
// # minAvgTwoSlice([ 4, 2, 2, 5, 1, 5, 8 ]) == 1 (example test)
// # minAvgTwoSlice([ -10000, -10000 ]) == 0 (two or four elements)
// # minAvgTwoSlice([ 10000, -10000 ]) == 0 (two or four elements)
// # minAvgTwoSlice([ 10000, -10000 ]) == 0 (two or four elements)
// # minAvgTwoSlice([ 10000, -10000, -10000, 10000 ]) == 1 (two or four elements)
// # minAvgTwoSlice([ 5, 6, 3, 4, 9 ]) == 2 (simple test, the best slice has length 3)
// # minAvgTwoSlice([ 10, 10, -1, 2, 4, -1, 2, -1 ]) == 5 (simple test, the best slice has length 3)
// # minAvgTwoSlice([ -3, -5, -8, -4, -10 ]) == 2 (simple test, the best slice has length 3)
//
// Worst Time Allowed: O(n)
// Actual solution is O(n^2) Kadane algorithm needed
exports.minAvgTwoSlice = function(A) {
  var minAvg = Infinity;
  var minAvgIndex = 0;

  for (var i = 0; i < A.length; i++) {
    var sum = A[i];
    for (var j= i+1, c=2; j < A.length; j++, c++) {
      sum += A[j];
      var avg = sum / c;

      if (avg < minAvg) {
        minAvg = avg;
        minAvgIndex = i;
      }
    }
  }
  return minAvgIndex;
};
