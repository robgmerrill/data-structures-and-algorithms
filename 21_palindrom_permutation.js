// Write an efficient function that checks whether any 
//permutation of an input string is a palindrome.

function hasPalindromPermutation(theString) {

  // track characters we've seen an odd number of times
  var unpairedCharacters = new Set();

  for(var i = 0; i < theString.length; i++) {
    var char = theString[i];

    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }
  // the string has a palindrom permutation if it
  // has one or zero characters without a pair
return unpairedCharacters.size <= 1;

}

console.log(hasPalindromPermutation('civic'));
console.log(hasPalindromPermutation('cviic'));
console.log(hasPalindromPermutation('cciiv'));
console.log(hasPalindromPermutation('civil'));
