var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/stringRotation.js');

test('1.9 stringRotation.', function(t) { 
  t.plan(2);
  t.equal(true, file.stringRotation('waterbottle','erbottlewat'), 'check if s2 is a rotation of s1');
  t.equal(false, file.stringRotation('weterbottle','erbottlewat'), 'check if s2 is a rotation of s1');
});
