var test = require('tape');
var file = require('../src/cracking-the-coding-interview/arrays-strings/rotateMatrix.js');

test('1.7 rotateMatrix', function(t) { 
  t.plan(6);
  t.deepEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]], file.rotateMatrix(file.matrix), 'rotate 90 degree cw the matrix as default');
  t.deepEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]], file.rotateMatrix(file.matrix, 90), 'rotate 90 degree cw the matrix');
  t.deepEqual([[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]], file.rotateMatrix(file.matrix, -90), 'rotate 90 degree ccw the matrix');
  t.deepEqual([[16,15,14,13],[12,11,10,9],[8,7,6,5],[4,3,2,1]], file.rotateMatrix(file.matrix, 180), 'rotate 180 degree cw the matrix');
  t.deepEqual([[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]], file.rotateMatrix(file.matrix, 270), 'rotate 270 degree cw the matrix');
  t.deepEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]], file.rotateMatrix(file.matrix, -270), 'rotate 270 degree ccw the matrix');
});

test('1.7b rotateMatrixInPlace', function(t) { 
  t.plan(6);
  t.deepEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]], file.rotateMatrixInPlace(file.matrix), 'rotate 90 degree cw the matrix as default');
  t.deepEqual([[16,15,14,13],[12,11,10,9],[8,7,6,5],[4,3,2,1]], file.rotateMatrixInPlace(file.matrix, 90), 'rotate 90 degree cw the matrix');
  t.deepEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]], file.rotateMatrixInPlace(file.matrix, -90), 'rotate 90 degree ccw the matrix');
  t.deepEqual([[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]], file.rotateMatrixInPlace(file.matrix, 180), 'rotate 180 degree cw the matrix');
  t.deepEqual([[16,15,14,13],[12,11,10,9],[8,7,6,5],[4,3,2,1]], file.rotateMatrixInPlace(file.matrix, 270), 'rotate 270 degree cw the matrix');
  t.deepEqual([[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]], file.rotateMatrixInPlace(file.matrix, -270), 'rotate 270 degree ccw the matrix');
});
