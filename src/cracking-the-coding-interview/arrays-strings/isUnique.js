/*
 * 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// test > 1.1 determine if a string has all unique characters
// # isUnique('nick') == true (nick has all unique charactares)
// # isUnique('balestra') == false (nick hasnt all unique charactares)
exports.isUnique = function(str) {
  var charHash = {};

  return str.split('').reduce(function(prev, current) {
    if (prev && !charHash[current]) {
      charHash[current] = true;
      return prev;
    }
    return false;
  }, true);
};
