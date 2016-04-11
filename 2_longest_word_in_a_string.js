//Given a string. Find the length of longest word.

function longestWord(str) {
  var words = str.split(' ');  //creates an array of words
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(longestWord('The yellow hippo')); // 6
console.log(longestWord('The first touchdown')); // 9
console.log(longestWord('The art of winning')); // 7
console.log(longestWord('Dumb and Dumber')); // 6


// Solution 2

function findLongestWord(str) {
  // Turns single string into an array of strings
  var arr = str.split(' ');
  // Set length of longest string to 0
  var longestString = '';
  // For loop to iterate through array of strings
  for (var i =0; i < arr.length; i++) {
    // compare longest string to next iteration in array. if longer, replace
    if(longestString.length < arr[i].length) {
      longestString = arr[i];
    }
  }
    // str is now replaced with the longest length
    str = longestString;
    return str.length;
  }

console.log(findLongestWord('The quick brown fox jumped over the lazy moon'));
