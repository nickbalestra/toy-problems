var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/arrayLimit.js');

test('LimitedArray', function(t) { 
  t.plan(2);
  t.equal(true, file.test.set('3', 'hi'), 'insert an alement to the array');
  t.equal('hi', file.test.get('3'), 'retrive an alement from the array');
});
