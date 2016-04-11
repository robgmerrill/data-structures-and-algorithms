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

// Solution 2
function pair(str) {
  // Changes string to uupercase for simple checking
  str = str.toUpperCase();
  // Breaks string up into a character array
  str = str.split('');
  // Empty array to be added to
  var placeholderArray = [];
  // Loop to iterate through character array
  for(var i = 0; i < str.length; i++) {
    // Checks current character and if equal it addes to final array - Repeat * 4
    if (str[i] == "G") {
      placeholderArray.push(['G', 'C']);
    } else if (str[i] == 'C') {
      placeholderArray.push(['C', 'G']);
    } else if (str[i] == 'A') {
      placeholderArray.push(['A', 'T']);
    } else if (str[i] == 'T') {
      placeholderArray.push(['T', 'A']);
    }
  }
    return placeholderArray;
  
}

console.log(pair('actg'));
