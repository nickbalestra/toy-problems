var HashTable = function(limit) {
  this._storage = [];
  this._storageLimit = limit || 128;

  this.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, this._storageLimit);
    var bucket = this._storage[index];
    var found = false;

    if (!bucket) {
      bucket = [];
    }

    bucket.forEach(function(tuple) {
      if (tuple[0] === key) {
        tuple[1] = value;
        found = true;
      }
    });

    if (!found) {
      bucket.push[key, value];
    }
  };

  this.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, this._storageLimit);
    var bucket = this._storage[index];
    var value = null;

    bucket.forEach(function(tuple) {
      if (tuple[0] === key) {
        value = tuple[1];
      }
    });

    return value;
  };

  this.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, this._storageLimit);
    var bucket = this._storage[index];

    bucket.forEach(function(tuple, i) {
      if (tuple[0] === key) {
        bucket.splice(i, 1);
      }
    });
  };
};


// Hashing function
function getIndexBelowMaxForKey(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash % max;
}

