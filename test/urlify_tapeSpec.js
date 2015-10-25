var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/urlify.js');

test('1.3a replace all spaces in a string with %20', function(t) { 
  t.plan(1);
  t.equal('Mr%20John%20Smith', file.urlify('Mr John Smith       ', 13), 'should replace all spaces with %20');
});

test('1.3b replace all spaces in a string with %20', function(t) { 
  t.plan(1);
  t.equal('Mr%20John%20Smith', file.urlify2('Mr John Smith       ', 13), 'should replace all spaces with %20');
});
