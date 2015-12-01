var test = require('tape');
var file = require('../src/various/deepCopy/deepCopy.js');

test('deepCopy', function(t) { 
  t.plan(1);
  t.deepEqual({a:1,b:{b:2,c:3},d:null,e:[1,2,3,[3,,5]]}, file.deepCopy({a:1, b: {b:2, c:3}, d: null, e: [1,2,3, [3, ,5]]}), 'retur deep copy');
});
