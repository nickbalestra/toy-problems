var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/stringCompression2.js');

test('1.6 perform basic string compression with repeated characters counts.', function(t) { 
  t.plan(2);
  t.equal('a2b1c5a3', file.stringCompression2('aabcccccaaa'), 'if worth should return a compressed string');
  t.equal('nick', file.stringCompression2('nick'), 'if not worth should retur the original string');
});

test('1.6 perform basic string compression with repeated characters counts.', function(t) { 
  t.plan(2);
  t.equal('a2b1c5a3', file.stringCompression3('aabcccccaaa'), 'if worth should return a compressed string');
  t.equal('nick', file.stringCompression3('nick'), 'if not worth should retur the original string');
});
