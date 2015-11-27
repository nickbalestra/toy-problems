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
 */

// Recursive iterative solution :P (tail call optim)
// http://nick.balestra.ch/2015/recursion-workshop/

// test > nthFibonacci
// # nthFibonacci(2) === 1 (returns the nth Fibonacci number)
// # nthFibonacci(3) === 2 (returns the nth Fibonacci number)
// # nthFibonacci(5) === 5 (returns the nth Fibonacci number)
//
// Time complexity: O(n)
exports.nthFibonacci = function (n, a, b) {
  a = a || 0;
  b = b || 1;
  return (n === 0) ? a : this.nthFibonacci(n-1, b, a + b);
};

// ES5 Solution
// var nfib = (n, a = 0, b = 1) => (n === 0) ? a : nfib(n-1, b, a + b);
