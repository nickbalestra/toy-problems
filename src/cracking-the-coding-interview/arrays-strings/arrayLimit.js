// This class represents an array with limited functionality and a maximum size.
// It will ensure that we don't accidentally try to use up too much space.

// test > LimitedArray
// # test.set('3', 'hi') == true (insert an alement to the array)
// # test.get('3') == 'hi' (retrive an alement from the array)
exports.LimitedArray = function(limit) {
  var _storage = [];

  this.set = function(index, value) {
    this.checkLimit(index);
    _storage[index] = value;
    return true;
  };

  this.get = function(index) {
    return _storage[index];
  };

  this.each = function(cb) {
    for (var i = 0; i < _storage.length; i++) {
      cb(_storage[i], i);
    }
  };

  this.checkLimit = function(index) {
    if (limit <= index) {
      throw new Error('Trying to access an oversized Array');
    }
  };
};

exports.test = new exports.LimitedArray(10);
