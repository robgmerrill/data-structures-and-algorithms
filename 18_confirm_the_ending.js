function end(str, target) {
  // Comparing the end of string
  var start = str.length - (target.length);
  // Compares end of string with target string
  if (str.substr(start, str.length) == target) {
    return true;
  } else {
    return false;
  }
}

console.log(end('Bastian', 'n'));
console.log(end('Robert', 'ert'));
console.log(end('Merrill', 'il'));

// Alternative Solution

function ending(str, target) {
  return str.substr(-target.length) === target;
}

console.log(ending('Rob', 'b'));
console.log(ending('Merrill', 'il'));
