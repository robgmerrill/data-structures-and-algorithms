var box = {};

box["material"] = "cardboard";

box["size"] = {
  "height": 2,
  "width": 80
};

// When we store a function on an object we call it a method
box.area = function() {
  return box.size.height * box.size.width;
};


console.log(box.area());
