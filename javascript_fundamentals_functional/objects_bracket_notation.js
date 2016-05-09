var box = {};

box["material"] =  "cardboard";
console.log(box.material) // "cardboard"

var key = "material";
// key below is not in quotes because it is a variable containing a string and not a string itself
box[key];

console.log(box[key]); // "cardboard"
// var key is "material" so we have box["material"] which is "cardboard"

// Benefit of bracket notation is that you can run code/evaluate expressions

var func = function() {
  return "material";
};

console.log(box[func()]); // "cardboard" 

// looking up property key on object box which is undefined
console.log(box['key']); // undefined
console.log(box.key); // undefined
console.log(box[key]); // cardboard

// don't use quotes around variable

var box = {};
box['material'] =  "cardboard";
box[0] = 'meow';
box['^&*'] = 'testing 123';
var test = box['^&*'];
console.log(test); // 'testing 123'

/* Rules
String - yes
numbers - yes
quotations - yes
weird characters - yes
expressions - yes
*/
