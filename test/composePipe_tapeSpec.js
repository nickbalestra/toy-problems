var test = require('tape');
var file = require('../src/various/composePipe/composePipe.js');

test('compose', function(t) { 
  t.plan(1);
  t.deepEqual('hi:NICK!', file.compose(file.greet, file.exclaim)('nick'), 'retur composition of a list of functions');
});

test('pipe', function(t) { 
  t.plan(2);
  t.equal(21, file.pipe(file.add2, file.multiplyBy3)(5), 'composes a series of functions');
  t.equal(63, file.pipe(file.add2, file.multiplyBy3, file.multiplyBy3)(5), 'composes a series of functions');
});
