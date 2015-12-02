var test = require('tape');
var file = require('../src/various/deepCopy/deepCopy.js');

test('deepCopy', function(t) { 
  t.plan(3);
  t.deepEqual({a:1,b:2}, file.deepCopy({a:1, b: 2}), 'return deep copy');
  t.deepEqual({a:1,b:{b:2,c:3}}, file.deepCopy({a:1, b: {b:2, c:3}}), 'return deep copy with nested objects');
  t.deepEqual({a:1,b:{b:2,c:3},d:null,e:[1,2,3,[3,,5]]}, file.deepCopy({a:1, b: {b:2, c:3}, d: null, e: [1,2,3, [3, ,5]]}), 'return deep copy with holes arrays');
});
