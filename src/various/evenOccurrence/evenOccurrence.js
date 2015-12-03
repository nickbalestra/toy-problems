// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one.
// Return null if there are no even-occurrence items.


// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] = 2

// [ "cat", "dog", "dig", "cat" ] = "cat"

// test > evenOccurence
// # evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) == 2 (Find the first item that occurs an even number)
// # evenOccurence([ "cat", "dog", "dig", "cat" ]) == "cat" (Find the first item that occurs an even number)
// # evenOccurence([ "meow", "dog", "dig", "cat" ]) == null (Return null if there are no even-occurrence items)
exports.evenOccurence = function(arr) {

  function objectify(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      (obj[arr[i]]) ?  obj[arr[i]] +=1 : obj[arr[i]] = 1;
    }
    return obj;
  }

  var occurances = objectify(arr);

  for (var i = 0; i < arr.length; i++) {
    if (occurances[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
};
