/*
 * 1.5 There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit
 * (or zero edits) away.
 */


// test > 1.5 check if strings are one edit or 0 away.
// # oneAway2('pale', 'ple') == true (ple is one edit away from pale)
// # oneAway2('pales', 'pale') == true (pales is one edit away from pale)
// # oneAway2('pale', 'bale') == true (pale is one edit away from bale)
// # oneAway2('pale', 'bake') == false (ple is not one edit away from bake)
exports.oneAway2 = function(str1, str2) {

  // char replace check
  if (str1.length === str2.length) {
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return str1.slice(i + 1) === str2.slice(i + 1);
      }
    }
  }

  // char add or remove check
  var longest = str1.length > str2.length ? str1 : str2;
  var shortest = str1.length < str2.length ? str1 : str2;
  if (longest.length - shortest.length > 1) {
    return false;
  }

  for (i = 0; i < shortest.length; i++) {
    if (shortest[i] !== longest[i]) {
      return shortest.slice(i) === longest.slice(i + 1);
    }
  }
  return true;
};
