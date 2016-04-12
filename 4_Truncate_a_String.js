/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.*/

function truncateString(str, num) {
  if (str.length <= num)
    return str;
  if (num <= 3)
    return str.substr(0, num) + '...';
    return str.substr(0, num - 3) + '...';
}

console.log(truncateString('Hello World', 2));
console.log(truncateString('Touchdown', 4));
console.log(truncateString('The sly fox jumped over the moon', 14));

// Alternative Solution

function truncate(str, num) {
    if (num > 3) {
    if (str.length > num) {
      str = str.slice(0, num-3);
      str = str.concat("...");
    } 
    return str;
  } else {
      str = str.slice(0, num);
      str = str.concat("...");
    }
    return str;
  }

  console.log(truncate('To the moon', 7));
