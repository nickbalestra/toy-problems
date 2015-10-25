var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/palindromePermutation.js');

test('1.4 check if string is a permutation of a palindrome', function(t) { 
  t.plan(1);
  t.equal(true, file.isPermutationsOfPalindrome('Tact Coa'), 'Tact Coa is a permutation of a palindrome');
});
