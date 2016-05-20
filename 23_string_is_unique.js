// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// =====================================================
// Method #1
function isUnique(str) {
  // iterate through the string character by character
  for (var i = 0; i< str.length; i++) {
    // check to see if the first occurance and last occurane of the character are not the same.
    // if this isn't true then return false
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  // if after going through the whole array and no matches are found return true
  return true;
}

console.log(isUnique('hello'));
console.log(isUnique('abcd'));
