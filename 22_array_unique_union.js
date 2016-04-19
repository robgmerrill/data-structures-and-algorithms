// Write a function that takes two or more arrays and 
// returns a new array of unique values in the order of 
// the original provided arrays.
 
// In other words, all values present from all arrays 
// should be included in their original order, but with 
// no duplicates in the final array.

// The unique numbers should be sorted by their original 
// order, but the final array should not be sorted in 
// numerical order.

function unite(arr1, arr2, arr3) {
  // create a dublicate array from original array
  var placeHolder = arr1;
  // iterates through the length of arguments
  for (var i = 0; i < arguments.length; i++) {
    // iterates through current index value of arguments
    for (var j = 0; j < arguments[i].length; j++) {
      // check if array contains the value of arguments
      // returns -1 if it does not
      if (placeHolder.indexOf(arguments[i][j]) === -1) {
        // add it to the end of the placeholder array
        placeHolder.push(arguments[i][j]);
    }
  }
}
// set original array to altered array
arr1 = placeHolder;
return arr1;
}

console.log(unite([1,3,2], [5,2,1,4], [2,1]));



