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
