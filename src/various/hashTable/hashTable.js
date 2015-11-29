/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];
    var found = false;

    bucket.forEach(function(tuple) {
      if (tuple[0] === key) {
        tuple[1] = value;
        found = true;
      }
    });

    if (!found) {
      bucket.push([key, value]);
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
    }

    return;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
          var value = tuple[1];
          bucket.splice(i, 1);
          return value;
        }
      }
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
