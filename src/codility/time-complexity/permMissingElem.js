/*
 * permMissingElem.
 * A zero-indexed array A consisting of N different integers is given.
 * The array contains integers in the range [1..(N + 1)],
 * which means that exactly one element is missing.
 * Your goal is to find that missing element in the given permutation.
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/perm_missing_elem
 */

// test > permMissingElem
// # permMissingElem([2, 3, 1, 5]) === 4 (example test)
// # permMissingElem([]) === 1 (empty list)
// # permMissingElem([1]) === 2 (single element)
// # permMissingElem([ 1, 2, 3, 4, 5 ]) === 6 (first element is missing)
// # permMissingElem([ 2, 3, 4, 5, 6 ]) === 1 (last element is missing)
// # permMissingElem([1]) === 2 (single element)
// # permMissingElem([2]) === 1 (single element)
// # permMissingElem([1, 2]) === 3 (two elements)
// # permMissingElem([3, 1]) === 2 (two elements)
// # permMissingElem([3, 2]) === 1 (two elements)
// # permMissingElem([ 4, 2, 3, 5, 1, 6, 8, 9 ]) === 7 (simple test)
//
// Worst Time Allowed: O(n)
exports.permMissingElem = function(A) {
  var actualSum = 0;
  var expectedSum = 0;

  for (var i = 1; i <= A.length; i++) {
    actualSum += A[i-1];
    expectedSum += i;
  }
  expectedSum += i;
  return expectedSum - actualSum;
};
