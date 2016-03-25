// Repeat a string
function repeat (str, num) {
  var accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

console.log(repeat('The fox jumped over the moon', 7));
console.log(repeat('Touchdown', 3));
console.log(repeat('Two if by sea', 3));
