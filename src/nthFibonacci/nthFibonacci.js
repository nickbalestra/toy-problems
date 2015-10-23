/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */


// var nfib = (n, a = 0, b = 1) => (n === 0) ? a : nfib(n-1, b, a + b);

// ES5 Solution
var nthFibonacci = function (n, a, b) {
  a = a || 0;
  b = b || 1;
  return (n === 0) ? a : nthFibonacci(n-1, b, a + b);
};

// console.log(nthFibonacci(0));
// console.log(nthFibonacci(1));
// console.log(nthFibonacci(2));
// console.log(nthFibonacci(3));
// console.log(nthFibonacci(4));
console.log(nthFibonacci(1475));
console.log(nthFibonacci(1476));
var t = 8.077637632156222e+307 + 1.3069892237633987e+308;
console.log(t);