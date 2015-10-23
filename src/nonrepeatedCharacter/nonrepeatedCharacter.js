/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var uniques = string.split('').reduce( (hash, char) => {
    if (hash[char]) {
      delete hash[char];
    } else {
      hash[char] = true;
    }
    return hash;
  }, {});

  return Object.keys(uniques)[0] || null;
};

// console.log(firstNonRepeatedCharacter('ABA'));
// console.log(firstNonRepeatedCharacter('AACBDB'));