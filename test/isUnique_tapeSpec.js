var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/isUnique.js');

test('1.1 determine if a string has all unique characters', function(t) { 
  t.plan(2);
  t.equal(true, file.isUnique('nick'), 'nick has all unique charactares');
  t.equal(false, file.isUnique('balestra'), 'nick hasnt all unique charactares');
});
