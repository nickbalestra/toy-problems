/*
 * Write a function that 'flattens' an array.
 * It should accept an array with an unknown number of nested arrays,
 * and return an array with no nested arrays.
 * You have no time or space constraints, and you can be assured that your array elements will only be arrays,
 * or of type 'number'.
*/

// test > flattenArray
// # flattenArray([[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]) === [0,1,2,3,4,5,6,7,8,9,10] (return an array with no nested arrays)
exports.flattenArray = function(arr) {
  var flatArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(exports.flattenArray(arr[i]));
    } else {
      flatArray = flatArray.concat(arr[i]);
    }
  }
  return flatArray;
};

