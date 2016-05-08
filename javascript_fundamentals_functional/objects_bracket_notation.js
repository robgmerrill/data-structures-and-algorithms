var box = {};

box["material"] =  "cardboard";
console.log(box.material) // "cardboard"

var key = "material";
// key below is not in quotes because it is a variable containing a string and not a string itself
box[key];

console.log(box[key]); // "cardboard"
// var key is "material" so we have box["material"] which is "cardboard"

