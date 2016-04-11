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
