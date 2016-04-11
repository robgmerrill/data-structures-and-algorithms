/* Write a simple function that returns a boolean indicating whether 
or not a string is a palindrome */

// create function named isPalindrome
function isPalindrome(str) {

  // take string and remove all non-word characters e.g. "," with replace function
  // turn the string into lower case assuming that it is case insensitive
  str = str.replace(/\W/g, '').toLowerCase();

  // put in parentheses to get a boolean value. Split it into an array. reverse the array. join into a string.
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome('level'));
console.log(isPalindrome('levels'));
console.log(isPalindrome('A car, a man, a maraca'));


// Solving without RegExp
// Solving without RegExp

function palindrome(str) {
  // Changed string to lowercase so no case sensitive issues
  str = str.toLowerCase();
  // Loop to replace special characters without using regexp
  for (var i = 0; i < str.length; i++) {
    str = str.replace(' ', '');
    str = str.replace(',', '');
    str = str.replace('.', '');
    str = str.replace('/', '');
    str = str.replace('-', '');
    str = str.replace('_', '');
    str = str.replace('(', '');
    str = str.replace(')', '');
  }
  // Create a copy of our string and reverse it
  var copy = str.split('').reverse().join('');
  if (copy == str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("0_0 (: / :) 0-0"));
