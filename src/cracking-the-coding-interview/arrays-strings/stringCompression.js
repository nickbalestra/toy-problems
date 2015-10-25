/*
 * 1.6 Implement a method to perform basic string compression using the counts of repeated
 *  characters. For example, the string aabcccccaaa would become a2b1c5a3.
 *  If the 'compressed' string would not become smaller then the original string, your
 *  method should return the original string. You can assume the string has only
 *  uppercase and lowercase letters (a-z).
 */

// test > 1.6 perform basic string compression with repeated characters counts.
// # stringCompression('aabcccccaaa') == 'a2b1c5a3' (if worth should return a compressed string)
// # stringCompression('nick') == 'nick' (if not worth should retur the original string)
exports.stringCompression = function(str) {
  var count = 0;
  var prev = '';

  var compressed = str.split('').reduce(function(newStr, char) {
    if (prev === char) {
      prev = char;
      count++;
      newStr = newStr.substr(0, newStr.length - 1) + count;
    } else {
      prev = char;
      count = 1;
      newStr = newStr + char + count;
    }
    return newStr;
  }, '');

  return (str.length < compressed.length) ? str : compressed;
};
