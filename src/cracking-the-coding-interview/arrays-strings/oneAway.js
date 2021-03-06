/*
 * 1.5 There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit
 * (or zero edits) away.
 */


// test > 1.5 check if strings are one edit or 0 away.
// # oneAway('pale', 'ple') == true (ple is one edit away from pale)
// # oneAway('pales', 'pale') == true (pales is one edit away from pale)
// # oneAway('pale', 'bale') == true (pale is one edit away from bale)
// # oneAway('pale', 'bake') == false (ple is not one edit away from bake)
exports.oneAway = function(str1, str2) {
  var len1 = str1.length,
    len2 = str2.length,
    shorter = (len1 > len2) ? len2 : len1;

  if (Math.abs(len1 - len2) === 0 || Math.abs(len1 - len2) === 1) {

    for (var i = 0; i < shorter; i++) {
      if (str1.charAt(i) !== str2.charAt(i)) {

        // Replace edit
        if (len1 === len2) {
          return (i === len1 -1) ?
            true :
            str1.slice(i+1) === str2.slice(i+1);
        }
        // Add or Remove edit
        return (len1 > len2) ?
          str1.slice(i+1) === str2.slice(i) :
          str1.slice(i) === str2.slice(i+1);
      }
    }
    return true;
  }
  return false;
};

