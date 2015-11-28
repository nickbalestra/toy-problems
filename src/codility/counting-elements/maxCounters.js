/*
 * maxCounters.
 * Calculate the values of counters after applying all alternating operations:
 * increase counter by 1; set value of all counters to current maximum.
 *
 * Requirements & constraints:
 * https://codility.com/programmers/task/max_counters
 */

// test > maxCounters
// # maxCounters(5, [ 3, 4, 4, 6, 1, 4, 4 ]) === [3,2,2,4,2] (first example test)
// # maxCounters(5, [ 6, 6, 6, 6, 6, 6 ]) === [0,0,0,0,0] (all max_counter operations)
// # maxCounters(1, [ 2, 1, 1, 2, 1 ]) === [3] (only one counter)
// # maxCounters(1, [ 1 ]) === [1] (only one counter)
//
// Worst Time Allowed: O(N+M)
exports.maxCounters = function(N, A) {
  var maxValue = 0;
  var counters = [];
  maxCounter();

  function maxCounter() {
    for (var i = 0; i < N; i++) {
      counters[i] = maxValue;
    }
  }

  function increase(X) {
    counters[X-1] += 1;
    if (counters[X-1] > maxValue) {
      maxValue = counters[X-1];
    }
  }

  for (var j=0; j < A.length; j++) {
    var target = A[j];
    if (target > 0 && target <= N) {
      increase(target);
    } else if (target == N + 1) {
      maxCounter();
    }
  }
  return counters;
};
