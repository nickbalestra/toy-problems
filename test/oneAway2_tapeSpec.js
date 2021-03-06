var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/oneAway2.js');

test('1.5 check if strings are one edit or 0 away.', function(t) { 
  t.plan(4);
  t.equal(true, file.oneAway2('pale', 'ple'), 'ple is one edit away from pale');
  t.equal(true, file.oneAway2('pales', 'pale'), 'pales is one edit away from pale');
  t.equal(true, file.oneAway2('pale', 'bale'), 'pale is one edit away from bale');
  t.equal(false, file.oneAway2('pale', 'bake'), 'ple is not one edit away from bake');
});
