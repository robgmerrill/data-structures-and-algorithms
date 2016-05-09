var box = {};

box.material = "cardboard";

console.log(box.material);
/*
var box = {
  "material": "cardboard"
}
*/

// . in JavaScript used to get value of an object
// used with methods/function eg .toLowerCase .length .push() .pop()
// you know that whatever is to the left of the dot is an object
// when accessing a property

var cb = box.material;
console.log(cb); // "cardboard"


box.material = "titanium";
console.log(box.material);  // "titanium"

cb; 
console.log(cb); // "cardboard"

// Fact Check
// Variables pass by reference and objects pass by value

box.size; // undefined (undefined is a type)
console.log(box.size); 

/* Rules
String - yes
numbers - no
quotations - no
weird characters - no
expressions - no
*/
