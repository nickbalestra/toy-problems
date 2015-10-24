// Write a function called `allCombos` that takes as its only argument an array and returns an array of arrays, each containing
// one possible permutation of the elements in the passed in array. The returned array should not contain any elements whose content
// is identical, even if in a different order. The result array should contain the permutation containing no elements, as well as the
// permutation containing all elements.


// test > allCombos
// # allCombos(['a','b','c']) === [[],['a'],['a','b'],['a','b','c'],['a','c'],['b'],['b','c'],['c']] (returns all permutations)
//
// Time complexity: exponential
exports.allCombos = function(arr) {
  var output = [[]];

  (function combo(partial, arr) {
    for (var i = 0; i < arr.length; i++) {
      output.push(partial.concat(arr[i]));
      combo(partial.concat(arr[i]), arr.slice(i+1));
    }
  })([], arr);

  return output;
};
