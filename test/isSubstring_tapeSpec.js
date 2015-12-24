var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/isSubstring.js');

test('1.9b isSubstring.', function(t) { 
  t.plan(2);
  t.equal(true, file.isSubstring('frenchfries','rench'), 'check if str2 is a substring of str1');
  t.equal(false, file.isSubstring('frenchfries','frits'), 'check if str2 is a substring of str1');
});
