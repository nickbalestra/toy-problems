// A prime number is an integer greater than 1 that has no divisors other than itself and 1.
// Write a function that accepts a number and returns true if it’s a prime number, false if it’s not.
// The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

// test > primeTester
// # primeTester(1) == false (should return false for non-primes)
// # primeTester(91) == false (should return false for non-primes)
// # primeTester(239812076741689) == false (should return false for non-primes)
// # primeTester(2) == true (should return true for primes)
exports.primeTester = function(n) {
  if (n === 2) {
    return true;
  }

  if (n === 1 || n % 2 === 0) {
    return false;
  }

  for (var i = 3; i <= Math.sqrt(n); i+=2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
