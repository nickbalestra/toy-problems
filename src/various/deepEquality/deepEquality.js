/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

// test > deepEquals
// # deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}) === true (check object deep equality)
// # deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}) === false (check object deep equality)
exports.deepEquals = function(apple, orange) {
  if (apple === orange) {
    return true;
  }
  if (!orange || !apple) {
    return false;
  }
  if (!(apple instanceof Object) || !(orange instanceof Object)) {
    return false;
  }
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }
  if (appleKeys.length === 0) {
    return true;
  }
  for (var i = 0; i < appleKeys.length; i++) {
    if (!exports.deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) {
      return false;
    }
  }
  return true;
};

