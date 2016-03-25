// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
console.log(slasher(['cat', 'dog', 'cow', 'bear'], 2));
console.log(slasher([12, 15, 25], 1));
