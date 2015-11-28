var test = require('tape');
var file = require('../src/various/deepEquality/deepEquality.js');

test('deepEquals', function(t) { 
  t.plan(2);
  t.equal(true, file.deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}), 'check object deep equality');
  t.equal(false, file.deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}), 'check object deep equality');
});
