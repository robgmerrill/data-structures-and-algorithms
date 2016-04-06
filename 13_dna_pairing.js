// DNA Pair

function pair (str) {
  // define a map object with all possibilities
  var map = {
    T: 'A', 
    A: 'T', 
    G: 'C', 
    C: 'G'
  };
//split string into an array
  str = str.toUpperCase();
  strArr = str.split('');

  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = [strArr[i], map[strArr[i]]];
  }
  return strArr;
}

console.log(pair('ACTG'));
console.log(pair('cgcg'));
console.log(pair('atata'));

