/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// test > firstNonRepeatedCharacter
// # firstNonRepeatedCharacter('ABA') === 'B' (returns the first nonrepeated char)
// # firstNonRepeatedCharacter('AACBDB') === 'C' (returns the first nonrepeated char)
//
// Time complexity: O(n)
exports.firstNonRepeatedCharacter = function(string) {
  var uniques = string.split('').reduce(function(hash, char) {
    if (hash[char]) {
      delete hash[char];
    } else {
      hash[char] = true;
    }
    return hash;
  }, {});

  return Object.keys(uniques)[0] || null;
};

