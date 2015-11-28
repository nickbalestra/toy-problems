var test = require('tape');
var file = require('../src/codility/prefix-sums/countDiv.js');

test('countDiv', function(t) { 
  t.plan(13);
  t.equal(3, file.countDiv(6, 11, 2), 'first example test');
  t.equal(20, file.countDiv(11, 345, 17), 'simple test');
  t.equal(1, file.countDiv(0, 0, 11), 'minimal test');
  t.equal(0, file.countDiv(1, 1, 11), 'minimal test');
  t.equal(0, file.countDiv(10, 10, 7), 'extreme ifempty');
  t.equal(1, file.countDiv(10, 10, 5), 'extreme ifempty');
  t.equal(0, file.countDiv(10, 10, 20), 'extreme ifempty');
  t.equal(3, file.countDiv(10, 14, 2), 'verify handling of range endpoints');
  t.equal(2, file.countDiv(11, 14, 2), 'verify handling of range endpoints');
  t.equal(2, file.countDiv(10, 13, 2), 'verify handling of range endpoints');
  t.equal(1, file.countDiv(12, 13, 2), 'verify handling of range endpoints');
  t.equal(8, file.countDiv(0, 14, 2), 'verify handling of range endpoints');
  t.equal(7, file.countDiv(0, 13, 2), 'verify handling of range endpoints');
});
