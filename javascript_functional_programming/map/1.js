

// map is a higher order function. 
// return transformed object of every item in array against function
var animals = [
  {name: "Oso", species: "dog"},
  {name: 'Tom', species: 'cat'},
  {name: "Huey", species: 'hampster'},
  {name: "Slick", species: 'snake'}
]

// Solution with for loop

// var names = [];
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name);
// }

// console.log(names);

// Solution with map

var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species;
});

// ECMA Script 6 solution. Arrow function and implicit return
// use node --harmony_arrow_functions
// var names = animals.map((animal) => animal.name);

console.log(names);

// using map to return subset of property is a common usage
// we can use it to create completely new objects

