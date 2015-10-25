/*
 * 1.4 Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 */

// test > 1.4 check if string is a permutation of a palindrome
// # isPermutationsOfPalindrome('Tact Coa') == true
//
// Assumptions:
// space doesn't count
// Caseinsentitive
exports.isPermutationsOfPalindrome = isPermutationsOfPalindrome = function(str) {
  var charHash = {},
      length = str.length;

  var singleChars = str.toLowerCase().split('').reduce(function(count, char){
    if (char === ' ') {
      length--;
      return count;
    }
    if (charHash[char] === undefined) {
      charHash[char] = 1;
      return count += 1;
    } else if (charHash[char] % 2 === 0) {
      charHash[char] += 1;
      return count += 1;
    } else {
      charHash[char] += 1;
      return count -= 1;
    }
  }, 0);

  return length % 2 === singleChars;
};