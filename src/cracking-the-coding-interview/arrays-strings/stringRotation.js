/*
 *  1.9 Assume you have a method isSubstring which checks if one word
 *  is a substring of another. Given two strigs, s1 and s2,
 *  write code to check if s2 is a rotation of s1 using only one
 *  call to isSubstring (e.g.: 'waterbottle' is a rotation of 'erbottlewat')
 */

// Helper
var isSubstring = require('./isSubstring').isSubstring;

// test > 1.9 stringRotation.
// # stringRotation('waterbottle','erbottlewat') == true (check if s2 is a rotation of s1)
// # stringRotation('weterbottle','erbottlewat') == false (check if s2 is a rotation of s1)
exports.stringRotation = function(s1, s2) {
  return (s1.length === s2.length && s1.length > 0) ?
    isSubstring(s1+s1, s2) :
    false;
};
