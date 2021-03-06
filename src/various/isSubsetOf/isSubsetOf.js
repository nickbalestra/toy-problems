/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/


Array.prototype.isSubsetOf = function(array) {
  var mapped = array.reduce(function(hash, curr) {
    hash[curr] = true;
    return hash;
  }, {});

  return this.every(function(element) { return mapped[element]; });
};

// ES6 Solution
// exports.Array.prototype.isSubsetOf = function(array){
//   var mapped = array.reduce((hash, curr) => {
//     hash[curr] = true;
//     return hash;
//   }, {});
//
//   return this.every( element => mapped[element] );
// };

// var a = ['commit','push'];
// console.log(a.isSubsetOf(['commit','rebase','push','blame']));
// var b = ['merge','reset','reset'];
// console.log(b.isSubsetOf(['reset','merge','add','commit']));
