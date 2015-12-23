// This class represents a dynamic array functionality.
// It will ensure that we don't accidentally try to use up too much space.
// It uses a limited array DS for internal storage, and offer pop, push and length methids.
var ArrayList = function() {
  var _size = 0;
  var _limit = 10;
  var _storage = new Array(_limit);

  this.push = function(value) {
    if (_size > _limit * .75) {
      this.resize(_limit * 2);
    }
    _storage[_size++] = value;
  };

  this.pop = function() {
    if (_size < _limit * .25) {
      this.resize(_limit / 2);
    }
    if (_size > 0) {
      return _storage[--_size];
    }
  };

  this.resize = function(newLimit) {
    var oldStorage = _storage;
    _limit = Math.floor(newLimit);
    _storage = new Array(_limit);

    oldStorage.forEach(function(el, i) {
      if (i < _size) {
        _storage.push(el);
      }
    });
  };

  this.length = function() {
    return _size;
  };
};
