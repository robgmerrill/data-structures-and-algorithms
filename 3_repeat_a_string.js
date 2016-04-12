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

// Alternative Solution
function echo(str, num) {
  // initialize an empty array
  var holderArray = [];
  // create a for loop  and iterate through array
  for (var i = 0; i < num; i++) {
    holderArray.push(str);
  }
  str = holderArray.join('');
  return str;
}

console.log(echo('hey', 10));
console.log(echo('Oso the dog', 5));
