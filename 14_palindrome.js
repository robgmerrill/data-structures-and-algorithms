/* Write a simple function that returns a boolean indicating whether 
or not a string is a palindrome */

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome('level'));
console.log(isPalindrome('levels'));
console.log(isPalindrome('A car, a man, a maraca'));
