/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

// test > compose
// # compose(file.greet, file.exclaim)('nick') === 'hi:NICK!' (retur composition of a list of functions)
exports.compose = function() {
  var functions = Array.prototype.slice.call(arguments);

  return function(value) {
    return functions.reduceRight(function(arg, func) {
      return func(arg);
    }, value);
  };
};

// test > pipe
// # pipe(file.add2, file.multiplyBy3)(5) == 21 (composes a series of functions)
// # pipe(file.add2, file.multiplyBy3, file.multiplyBy3)(5) == 63 (composes a series of functions)
exports.pipe = function() {
  var functions = Array.prototype.slice.call(arguments);

  return function(value) {
    return functions.reduce(function(arg, func) {
      return func(arg);
    }, value);
  };
};

// Test Helpers
exports.add2 = function(number) { return number + 2; };
exports.multiplyBy3 = function(number) { return number * 3; };
exports.greet = function(name) { return 'hi:' + name;};
exports.exclaim = function(statement) { return statement.toUpperCase() + '!';};
