function titleCase(str) {
  // turns string into an array of strings
  arr = str.split(' ');
  // create for loop to iterate through an array
  for (var i = 0; i < arr.length; i++) {
    var placeHolder = arr[i];
    var upLetter = placeHolder.charAt(0).toUpperCase();
    placeHolder = placeHolder.slice(1, placeHolder.length).toLowerCase();
    arr[i] = upLetter.concat(placeHolder);
    console.log(arr[i]);
  }
  str = arr.join(' ');
  return str;
}
 


console.log(titleCase("I'm a little teapot"));


// Alternative Solution - doesn't fully work

function title(str) {
  var array = str.toLowerCase().split(' ');
  var result = array.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  });
  return result.join(' ');
}

console.log(title('Here we go now'));
console.log(title('Hello from the other side'));
