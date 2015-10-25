/*
 * 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// test > 1.1 determine if a string has all unique characters
// # isUnique('nick') == true
// # isUnique('balestra') == false
 exports.isUnique = isUnique = function(str){
  var charHash = {};

  return str.split('').reduce(function(prev, current){
    if (prev && charHash[current] === undefined) {
      charHash[current] = current;
      return true;
    }
    return false;
  }, true)
};
