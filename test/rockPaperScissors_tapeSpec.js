var test = require('tape');
var file = require('../src/hr/rockPaperScissors/rockPaperScissors.js');

test('rockPaperScissors', function(t) { 
  t.plan(3);
  t.deepEqual(27, file.rockPaperScissors().length, 'returns every sequence of throws, default rounds');
  t.deepEqual(27, file.rockPaperScissors(3).length, 'returns every sequence of throws, 3 rounds');
  t.deepEqual(243, file.rockPaperScissors(5).length, 'returns every sequence of throws, 3 rounds');
});
