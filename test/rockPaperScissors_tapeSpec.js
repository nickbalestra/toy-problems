var test = require('tape');
var file = require('../src/various/rockPaperScissors/rockPaperScissors.js');

test('rockPaperScissors', function(t) { 
  t.plan(3);
  t.equal(27, file.rockPaperScissors().length, 'returns every sequence of throws, default rounds');
  t.equal(27, file.rockPaperScissors(3).length, 'returns every sequence of throws, 3 rounds');
  t.equal(243, file.rockPaperScissors(5).length, 'returns every sequence of throws, 3 rounds');
});
