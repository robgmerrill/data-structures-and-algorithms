/*\Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  alph = alph.split('');
  str = str.split('');
  
  if (str[0] != 'a') {
    return undefined;
  }
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] != alph[i]) {
      return alph[i];
    }
  }
  
}

fearNotLetter("abce");
