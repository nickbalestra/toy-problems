var test = require('tape');
var file = require('../src/various/commonCharacters/commonCharacters.js');

test('commonCharacters', function(t) { 
  t.plan(1);
  t.equal('aeiou', file.commonCharacters('acexivou', 'aegihobu'), 'returns chars found in both strings');
});
