var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/checkPermutation.js');

test('1.2a determine if a string is a permutation of the other', function(t) { 
  t.plan(3);
  t.equal(true, file.checkPermutation('nick', 'ickn'), 'nick should be a permutation of ickn');
  t.equal(false, file.checkPermutation('nice', 'nici'), 'nice shouldnt be permutation of nici');
  t.equal(false, file.checkPermutation('nice', 'nic'), 'nice shouldnt be permutation of nic');
});

test('1.2b determine if a string is a permutation of the other in O(n)', function(t) { 
  t.plan(3);
  t.equal(true, file.checkPermutation2('nick', 'ickn'), 'nick should be a permutation of ickn');
  t.equal(false, file.checkPermutation2('nice', 'nici'), 'nice shouldnt be permutation of nici');
  t.equal(false, file.checkPermutation2('nice', 'nic'), 'nice shouldnt be permutation of nic');
});
