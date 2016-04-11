function factorialize(num) {

  // Store a count variable for a for loop
  var count = num; 
  // Statement for unique '0' case scenario
  if (count === 0) {
    return 1
  } else {
    // Loop to factorialize starting at 1 up to the end
    for (var i = 1; i <count; i++) {
      num = num * i;
    }
  }
    return num;
}

console.log(factorialize(5));
console.log(factorialize(9));
console.log(factorialize(3));
console.log(factorialize(0));

