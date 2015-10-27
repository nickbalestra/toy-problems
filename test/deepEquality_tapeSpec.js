var test = require('tape');
var file = require('../src/various/deepEquality/deepEquality.js');

test('deepEquals', function(t) { 
  t.plan(2);
  t.deepEqual(true, file.deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}), 'check object deep equality');
  t.deepEqual(false, file.deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}), 'check object deep equality');
});
