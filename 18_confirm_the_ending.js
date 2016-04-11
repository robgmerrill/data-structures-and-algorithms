function end(str, target) {
  var start = str.length - (target.length);
  if (str.substr(start, str.length) == target) {
    return true;
  } else {
    return false;
  }
}

console.log(end('Bastian', 'n'));
console.log(end('Robert', 'ert'));
console.log(end('Merrill', 'il'));
