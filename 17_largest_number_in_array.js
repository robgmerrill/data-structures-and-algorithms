function largestOfFour(arr) {
  var largestArray = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = 0;
    for (var j = 0; j < arr.length; j++) {
      if (largestNumber < arr[i][j]) {
        largestNumber = arr[i][j];
      }
    }
    largestArray.push(largestNumber);
  }
  return largestArray;
}

console.log(largestOfFour([[4, 3, 2], [43, 65, 5], [32, 23, 234], [32, 12]]));
