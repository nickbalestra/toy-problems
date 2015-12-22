// This class represents a dynamic array functionality.
// It will ensure that we don't accidentally try to use up too much space.
// It uses a limited array DS for internal storage, and offer pop, push and length methids.
var LimitedArray = require('./arrayLimit').LimitedArray;

var ArrayList = function() {
  var _size = 0;
  var _limit = 10;
  var _storage = new LimitedArray(_limit);


  this.push = function(value) {
    if (_size > _limit * .75) {
      this.resize(_limit * 2);
    }
    _storage.set(_size++, value);
  };

  this.pop = function() {
    if (_size > 0 && _size < _limit * .25) {
      this.resize(_limit / 2);
    }
    if (_size > 0) {
      return _storage.get(--_size);
    }
  };

  this.resize = function(newLimit) {
    var oldStorage = _storage;
    _storage = new LimitedArray(newLimit);
    _limit = newLimit;

    oldStorage.each(function(el, i) {
      if (i < _size) {
        _storage.set(i, el);
      }
    });
  };

  this.length = function() {
    return _size;
  };
};
