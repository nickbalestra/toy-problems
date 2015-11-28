/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

// test > rockPaperScissors
// # rockPaperScissors().length == 27 (returns every sequence of throws, default rounds)
// # rockPaperScissors(3).length == 27 (returns every sequence of throws, 3 rounds)
// # rockPaperScissors(5).length == 243 (returns every sequence of throws, 3 rounds)
//
// Time complexity: O(n)
exports.rockPaperScissors = function(rounds) {
  rounds = rounds || 3;
  var options = ['rock', 'paper', 'scissors'];
  var results = [];

  (function recurse(sequence) {
    if (sequence.length === rounds) {
      results.push(sequence);
      return;
    } else {
      for (var i = 0; i < options.length; i++) {
        recurse(sequence.concat(options[i]));
      }
    }
  }([]));

  return results;
};
