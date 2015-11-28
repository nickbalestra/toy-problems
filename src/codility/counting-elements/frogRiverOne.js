/*
 * frogRiverOne.
 * Find the earliest time when a frog can jump to the other side of a river.
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/frog_river_one
 */

// test > frogRiverOne
// # frogRiverOne(5, [ 1, 3, 1, 4, 2, 3, 5, 4 ]) === 6 (example test)
// # frogRiverOne(3, [ 1, 3, 1, 3, 2, 1, 3 ]) === 4 (simple test)
// # frogRiverOne(1, [1]) === 0 (single element)
// # frogRiverOne(5, [3]) === -1 (single element)
// # frogRiverOne(5, [ 1, 2, 3, 5, 3, 1 ]) === -1 (frog never across the river)
// # frogRiverOne(2, [ 1, 1, 1, 1 ]) === -1 (frog never across the river)
// # frogRiverOne(2, [ 2, 2, 2, 2, 2 ]) === -1 (frog never across the river)
//
// Worst Time Allowed: O(n)
exports.frogRiverOne = function(X, A) {

  var leaves = {
    count : X
  };

  for (var i = 0; i < A.length; i++) {
    if (A[i] <= X && !leaves[A[i]]) {
      leaves[A[i]] = true;
      leaves.count--;
    }
    if (leaves.count === 0) {
      return i;
    }
  }
  return -1;
};
