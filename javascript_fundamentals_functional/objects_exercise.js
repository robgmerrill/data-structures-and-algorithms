var animal = {};

animal.username = 'Rob';

console.log(animal.username);

animal["tagline"] = 'hey, everyone!';

console.log(animal["tagline"]);

var noises = [];

animal.noises;

console.log(animal);

var count = 0; 
for (var key in animal) {
  count++; 
  if (key == 'username') {
    console.log('Hi my name is ' + animal[key]);
  } else if (key == 'tagline') {
    console.log('I like to say ' + animal[key]);
  }
}
