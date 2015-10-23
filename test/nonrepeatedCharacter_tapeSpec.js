var test = require('tape');
var file = require('../src/hr/nonrepeatedCharacter/nonrepeatedCharacter.js');

test('firstNonRepeatedCharacter', function(t) { 
  t.plan(2);
  t.deepEqual('B', file.firstNonRepeatedCharacter('ABA'), 'returns the first nonrepeated char');
  t.deepEqual('C', file.firstNonRepeatedCharacter('AACBDB'), 'returns the first nonrepeated char');
});
