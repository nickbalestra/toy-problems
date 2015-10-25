/*
 * 1.2 Check Permutation. Given two strings, write a method to decide if one is a
 * permutation of the other
 */


// test > 1.2a determine if a string is a permutation of the other
// # checkPermutation('nick', 'ickn') == true
// # checkPermutation('nice', 'nici') == false
// # checkPermutation('nice', 'nic') == false
//
// O(sort + split + join) - O(n)
exports.checkPermutation = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};

// test > 1.2b determine if a string is a permutation of the other in O(n)
// # checkPermutation2('nick', 'ickn') == true
// # checkPermutation2('nice', 'nici') == false
// # checkPermutation2('nice', 'nic') == false
//
// O(n)
exports.checkPermutation2 = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var hash1 = {};
  var hash2 = {};
  for (var i = 0; i < str1.length; i++) {
    if (hash1[str1.charAt(i)] === undefined) {
      hash1[str1.charAt(i)] = 1;
    } else {
      hash1[str1.charAt(i)] += 1;
    }
    if (hash2[str2.charAt(i)] === undefined) {
      hash2[str2.charAt(i)] = 1;
    } else {
      hash2[str2.charAt(i)] += 1;
    }
  }
  for (var char in hash1) {
    if (hash1[char] !== hash2[char]) {
      return false;
    }
  }
  return true;
};
