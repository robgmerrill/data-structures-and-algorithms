//Check a string to see if there are any repeated letters. This is not case sensitive. "A" is the same as "a".

function isIsogram(str) {
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  return true;
}

console.log(isIsogram('isogram')); //true
console.log(isIsogram('batter')); //false
console.log(isIsogram('car')); //true
console.log(isIsogram('apple')); //false
console.log(isIsogram('dog')); //true
console.log(isIsogram('hurry')); //false
