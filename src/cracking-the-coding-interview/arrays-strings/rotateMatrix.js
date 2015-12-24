/*
 *  1.7 Given an image represented by an NxN matrix
 *  where each pixel in the image is 4 bytes,
 *  write a method to rotate the image by 90 degrees.
 *  Can you do this in place?
 */

// Layer rotation strategy:
//
// function rotateMatrix(matrix) {
//   for (var layer = 0; layer < matrix.length / 2; layer++) {
//     var first = layer;
//     var last = matrix.length - 1 - layer;
//     for (var i = first; i < last; i++) {
//       // save top
//       var top = matrix[first][i]
//       // move left -> top
//       matrix[first][i] = matrix[last-i-first][first];
//       // move bottom -> left
//       matrix[last-i-first][first] = matrix[last][last-i-first];
//       // move right -> bottom
//       matrix[last][last-i -first] = matrix[i][last];
//       // move top(temp) -> right
//       matrix[i][last] = top;
//     }
//   }
//   return matrix;
// }

// Helpers
var deepCopy = require('../../various/deepCopy/deepCopy').deepCopy;


function transpose(matrix) {
  var output = deepCopy(matrix);
  for (var y = 0; y < matrix.length - 1; y++) {
    for (var x = y + 1; x < matrix.length; x++) {
      output[x][y] = matrix[y][x];
      output[y][x] = matrix[x][y];
    }
  }
  return output;
}


function flipVertical(matrix) {
  var output = deepCopy(matrix);
  for (var y = 0; y < (output.length - 1)/ 2; y++) {
    for (var x = 0; x < output.length; x++) {
      output[y][x] = matrix[matrix.length-1-y][x];
      output[output.length-1-y][x] = matrix[y][x];
    }
  }
  return output;
}


function flipHorizontal(matrix) {
  var output = deepCopy(matrix);
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < (matrix.length - 1)/2; x++) {
      output[y][x] = matrix[y][matrix.length - 1 - x];
      output[y][matrix.length - 1 - x] = matrix[y][x];
    }
  }
  return output;
}

// test > 1.7 rotateMatrix
// # rotateMatrix(file.matrix) === [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]] (rotate 90 degree cw the matrix as default)
// # rotateMatrix(file.matrix, 90) === [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]] (rotate 90 degree cw the matrix)
// # rotateMatrix(file.matrix, -90) === [[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]] (rotate 90 degree ccw the matrix)
// # rotateMatrix(file.matrix, 180) === [[16,15,14,13],[12,11,10,9],[8,7,6,5],[4,3,2,1]] (rotate 180 degree cw the matrix)
// # rotateMatrix(file.matrix, 270) === [[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]] (rotate 270 degree cw the matrix)
// # rotateMatrix(file.matrix, -270) === [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]] (rotate 270 degree ccw the matrix)
exports.rotateMatrix = function(matrix, deg) {
  deg = deg || 90;

  switch (deg) {
  case 90:
    return flipHorizontal(transpose(matrix));
  case -90:
    return flipVertical(transpose(matrix));
  case 180:
    return flipVertical(flipHorizontal(matrix));
  case 270:
    return flipVertical(transpose(matrix));
  case -270:
    return flipHorizontal(transpose(matrix));
  }
};

exports.matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];


// ====================================================================
// ####################################################################
// ====================================================================


// In-place
function transposeInPlace(matrix) {
  for (var y = 0; y < matrix.length - 1; y++) {
    for (var x = y + 1; x < matrix.length; x++) {
      var temp = matrix[x][y];
      matrix[x][y] = matrix[y][x];
      matrix[y][x] = temp;
    }
  }
  return matrix;
}


function flipVerticalInPlace(matrix) {
  for (var y = 0; y < (matrix.length - 1)/ 2; y++) {
    for (var x = 0; x < matrix.length; x++) {
      var temp = matrix[y][x];
      matrix[y][x] = matrix[matrix.length-1-y][x];
      matrix[matrix.length-1-y][x] = temp;
    }
  }
  return matrix;
}


function flipHorizontalInPlace(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < (matrix.length - 1)/2; x++) {
      var temp = matrix[y][x];
      matrix[y][x] = matrix[y][matrix.length - 1 - x];
      matrix[y][matrix.length - 1 - x] = temp;
    }
  }
  return matrix;
}

// test > 1.7b rotateMatrixInPlace
// # rotateMatrixInPlace(file.matrix) === [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]] (rotate 90 degree cw the matrix as default)
// # rotateMatrixInPlace(file.matrix, 90) === [[16,15,14,13],[12,11,10,9],[8,7,6,5],[4,3,2,1]] (rotate 90 degree cw the matrix)
// # rotateMatrixInPlace(file.matrix, -90) === [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]] (rotate 90 degree ccw the matrix)
// # rotateMatrixInPlace(file.matrix, 180) === [[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]] (rotate 180 degree cw the matrix)
// # rotateMatrixInPlace(file.matrix, 270) === [[16,15,14,13],[12,11,10,9],[8,7,6,5],[4,3,2,1]] (rotate 270 degree cw the matrix)
// # rotateMatrixInPlace(file.matrix, -270) === [[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]] (rotate 270 degree ccw the matrix)
exports.rotateMatrixInPlace = function(matrix, deg) {
  deg = deg || 90;

  switch (deg) {
  case 90:
    return flipHorizontalInPlace(transposeInPlace(matrix));
  case -90:
    return flipVerticalInPlace(transposeInPlace(matrix));
  case 180:
    return flipVerticalInPlace(flipHorizontalInPlace(matrix));
  case 270:
    return flipVerticalInPlace(transposeInPlace(matrix));
  case -270:
    return flipHorizontalInPlace(transposeInPlace(matrix));
  }
};
