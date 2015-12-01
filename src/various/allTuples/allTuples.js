/**
 * Write a function `allTuples(arr)` which takes an array of integers as argument and returns a
 * all the possible combinations that sum up to a given target.
 * ie: allTuples([1,2,3], 4) === [[1,3]];
 */


// test > allTuples
// # allTuples([1,2,3], 4) === [[1,3]] (retur all tuples that sum up to target)
// # allTuples([1,2,3], 5) === [[2,3]] (retur all tuples that sum up to target)
// # allTuples([1,2,3], 2) === undefined (retur all tuples that sum up to target)
exports.allTuples = function(arr, target) {
  var bucket = [];

  function findTuple(tuple, arr) {
    if (tuple.length === 2 && tuple[0] + tuple[1] === target) {
      bucket.push(tuple);
      return;
    }
    for (var i = 0; i < arr.length; i++) {
      findTuple(tuple.concat(arr[i]), arr.slice(i+1));
    }
  }
  findTuple([], arr);
  return bucket.length ? bucket : undefined;
};
