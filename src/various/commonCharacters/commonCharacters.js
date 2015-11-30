/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// test > commonCharacters
// # commonCharacters('acexivou', 'aegihobu') == 'aeiou' (returns chars found in both strings)
//
// Time complexity: O(n)
exports.commonCharacters = function(string1, string2) {

  function objectify(string) {
    return string.split('').reduce(function(obj, char) {
      if (char.match(/[a-z]/i)) {
        obj[char] = true;
      }
      return obj;
    }, {});
  }

  function interesect(obj1, obj2) {
    return Object.keys(obj1).reduce(function(shared, char) {
      if (char in obj2) {
        shared[char] = true;
      }
      return shared;
    }, {});
  }

  var otherStrings = Array.prototype.slice.call(arguments, 1);

  var sharedAmongAllStrings = otherStrings.reduce(function(common, string) {
    return interesect(common, objectify(string));
  }, objectify(string1));

  return string1.split('').reduce(function(common, char) {
    if (sharedAmongAllStrings[char]) {
      sharedAmongAllStrings[char] = false;
      common += char;
    }
    return common;
  }, '');
};
