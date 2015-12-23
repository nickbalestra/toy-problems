/*
 * 1.6 Implement a method to perform basic string compression using the counts of repeated
 *  characters. For example, the string aabcccccaaa would become a2b1c5a3.
 *  If the 'compressed' string would not become smaller then the original string, your
 *  method should return the original string. You can assume the string has only
 *  uppercase and lowercase letters (a-z).
 */

// test > 1.6 perform basic string compression with repeated characters counts.
// # stringCompression2('aabcccccaaa') == 'a2b1c5a3' (if worth should return a compressed string)
// # stringCompression2('nick') == 'nick' (if not worth should retur the original string)
exports.stringCompression2 = function(str) {
  var prev = '';

  var compressed = str.split('').reduce(function(newStr, char) {
    if (prev === char) {
      newStr[newStr.length - 1]++;
    } else {
      prev = char;
      newStr.push(char, 1);
    }
    return newStr;
  }, []).join('');

  return (str.length < compressed.length) ? str : compressed;
};

// test > 1.6 perform basic string compression with repeated characters counts.
// # stringCompression3('aabcccccaaa') == 'a2b1c5a3' (if worth should return a compressed string)
// # stringCompression3('nick') == 'nick' (if not worth should retur the original string)
exports.stringCompression3 = function(string) {
  var compressed = [];

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === compressed[compressed.length - 2]) {
      compressed[compressed.length - 1]++;
    } else {
      compressed = compressed.concat(string.charAt(i), 1);
    }
  }
  return compressed.length < string.length ? compressed.join('') : string;
};
