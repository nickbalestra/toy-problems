var test = require('tape');
var file = require('../src/hr/commonCharacters/commonCharacters.js');

test('commonCharacters', function(t) { 
  t.plan(1);
  t.deepEqual('aeiou', file.commonCharacters('acexivou', 'aegihobu'), 'returns chars found in both strings');
});
