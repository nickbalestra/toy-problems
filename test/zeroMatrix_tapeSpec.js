var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/zeroMatrix.js');

test('1.8 zeroMatrix', function(t) { 
  t.plan(1);
  t.deepEqual([[0,2,3,0],[0,0,0,0],[0,9,10,0],[0,0,0,0]], file.zeroMatrix(file.matrix), 'set columns and rows to 0');
});
