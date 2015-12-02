/**
 * Write a function `deepCopy(obj)` which takes an object as argument and returns a
 * deep copy of the same object. Don't use JSON.stringify/JSON.parse methods.
 * if the object contains array with holes, those should be preserved, ie: [1,,3]
 */


// test > deepCopy
// # deepCopy({a:1, b: 2}) === {a:1,b:2} (return deep copy)
// # deepCopy({a:1, b: {b:2, c:3}}) === {a:1,b:{b:2,c:3}} (return deep copy with nested objects)
// # deepCopy({a:1, b: {b:2, c:3}, d: null, e: [1,2,3, [3, ,5]]}) === {a:1,b:{b:2,c:3},d:null,e:[1,2,3,[3,,5]]} (return deep copy with holes arrays)
exports.deepCopy = function(obj) {
  var copy = Array.isArray(obj) ? [] : {};

  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj[key] === undefined || obj[key] === null || typeof obj[key] !== 'object') {
      copy[key] = obj[key];
    } else {
      copy[key] = exports.deepCopy(obj[key]);
    }
  }
  return copy;
};
