var box = {};
box['material'] =  "cardboard";
box[0] = 'meow';
box['^&*'] = 'testing 123';

// for -  | in - | key - holds property name | box - reference to our object
for (var key in box) {
  console.log(box[key]); // in random order: 'material', '0', '^&*'
}

