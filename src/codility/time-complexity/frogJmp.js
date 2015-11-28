/*
 * frogJmp.
 * A frog wants to get to the other side of the road.
 * The frog located at position X and wants to get to a position greater than or equal to Y.
 * The  frog always jumps a fixed distance, D.
 * Count the minimal number of jumps that the frog must perform to reach its target..
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/frog_jmp
 */

// test > frogJmp
// # frogJmp(10, 85, 30) == 3 (example test)
// # frogJmp(5, 105, 3) == 34 (two elements)
// # frogJmp(2, 11, 3) == 3 (two elements)
// # frogJmp(1, 1, 3) == 0 (no jump needed)
// # frogJmp(1000000000, 1000000000, 1) == 0 (no jump needed)
// # frogJmp(1999999999, 1000000000, 1000000000) == 0 (one big jump)
//
// Worst Time Allowed: O(1)
exports.frogJmp = function(X, Y, D) {
  return Math.ceil((Y - X) / D);
};
