/*
 *  1.8 Write an algorithm such that if an element in an MxN matrix
 *  is 0, it's entire row and columns are set to 0.
 */

// test > 1.8 zeroMatrix
// # zeroMatrix(file.matrix) === [[0,2,3,0],[0,0,0,0],[0,9,10,0],[0,0,0,0]] (set columns and rows to 0)
exports.zeroMatrix = function(matrix) {
  var zeroCols = [];
  var zeroRows = [];
  var width = matrix[0].length;
  var height = matrix.length;

  for (var row = 0; row < height; row++) {
    for (var column = 0; column < width; column++) {
      if (matrix[row][column] === 0) {
        if (!zeroCols[column]) {
          zeroCols[column] = column;
        }
        if (!zeroRows[row]) {
          zeroRows[row] = row;
        }
      }
    }
  }

  Object.keys(zeroCols).forEach(function(column) {
    for (var i = 0; i < width; i++) {
      matrix[i][column] = 0;
    }
  });

  Object.keys(zeroRows).forEach(function(row) {
    for (var i = 0; i < height; i++) {
      matrix[row][i] = 0;
    }
  });
  return matrix;
};

exports.matrix = [
  [1,2,3,4],
  [0,5,6,7],
  [8,9,10,11],
  [12,13,14,0]
];
