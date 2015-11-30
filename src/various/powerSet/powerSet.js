/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

// test > powerSet
// # powerSet('abc').length == 8 (returns array with the power set of a given string)
// # powerSet('abc') === ['','a','ab','abc','ac','b','bc','c'] (returns array with the power set of a given string)
// # powerSet('jump').length == 16 (returns array with the power set of a given string)
// # powerSet('jump') === ['','j','ju','jum','jump','jup','jm','jmp','jp','u','um','ump','up','m','mp','p'] (returns array with the power set of a given string)
//
exports.powerSet = function(str) {
  var chars = str.split('');
  var output = [];

  function generateSet(partial, set) {
    for (var i = 0; i < set.length; i++) {
      output = output.concat(partial + set[i]);
      generateSet(partial + set[i], set.slice(i+1));
    }
  }

  output.push('');
  generateSet('', chars);
  return output;
};


// console.log('should be ', ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"].length);
// console.log('are ', exports.powerSet("jump"));
