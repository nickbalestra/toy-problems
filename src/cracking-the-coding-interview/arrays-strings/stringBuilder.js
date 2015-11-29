var StringBuilder = function(value) {
  this._strings = [];
  value = value || '';
  this._strings[0] = value;
};

StringBuilder.prototype.append = function(value) {
  this._strings.push(value);
};

StringBuilder.prototype.toString = function() {
  return this._strings.join('');
};
