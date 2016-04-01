/*Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both. In other words, return 
the symmetric difference of the two arrays. */

function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  function check (item) {
    if(arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  return newArr.filter(check);
}

console.log(diff([1, 2, 3, 4, 5], [1, 2, 3, 4])); // 5
console.log(diff([2, 4, 6, 8, 10], [1, 3, 5, 7, 9])); // 2, 4, 6, 8, 10, 1, 3, 5, 7, 9
