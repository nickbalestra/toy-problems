/**
 * Write a function `deepCopy(obj)` which takes an object as argument and returns a
 * deep copy of the same object. Don't use JSON.stringify/JSON.parse methods.
 */


// test > deepCopy
// # deepCopy({a:1, b: {b:2, c:3}, d: null, e: [1,2,3, [3, ,5]]}) === {a:1,b:{b:2,c:3},d:null,e:[1,2,3,[3,,5]]} (retur deep copy)
exports.deepCopy = function(obj) {
  var copy = Array.isArray(obj) ? [] : {};

  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (typeof obj[key] === 'string' || typeof obj[key] === 'number' || typeof obj[key] === 'boolean' || obj[key] === undefined || obj[key] === null) {
      copy[key] = obj[key];
    } else {
      copy[key] = exports.deepCopy(obj[key]);
    }
  }
  return copy;
};
