var test = require('tape');
var file = require('../src/various/evenOccurrence/evenOccurrence.js');

test('evenOccurence', function(t) { 
  t.plan(3);
  t.equal(2, file.evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]), 'Find the first item that occurs an even number');
  t.equal("cat", file.evenOccurence([ "cat", "dog", "dig", "cat" ]), 'Find the first item that occurs an even number');
  t.equal(null, file.evenOccurence([ "meow", "dog", "dig", "cat" ]), 'Return null if there are no even-occurrence items');
});
