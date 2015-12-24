/*
 *  1.9b Implement a method isSubstring which checks if one word
 *  is a substring of another.
 */

// test > 1.9b isSubstring.
// # isSubstring('frenchfries','rench') == true (check if str2 is a substring of str1)
// # isSubstring('frenchfries','frits') == false (check if str2 is a substring of str1)
exports.isSubstring = function(str1, str2) {
  for (var i = 0; i < str1.length; i++) {
    if (str1.charAt(i) === str2.charAt(0)) {
      if (str1.length - i < str2.length) {
        return false;
      } else {
        return str1.slice(i, i + str2.length) === str2;
      }
    }
  }
  return false;
};
