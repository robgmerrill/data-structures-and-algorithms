/*\Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  // create a string that stores the English alphabet
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  // Split alphabest into letter character array
  alph = alph.split('');
  // Split string into letter chracter array
  str = str.split('');
  
  // If our first letter is not an 'a' return undefined
  if (str[0] != 'a') {
    return undefined;
  }
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] != alph[i]) {
      // If letters don't match. Return current alphabet
      return alph[i];
    }
  }
  
}

fearNotLetter("abce");
