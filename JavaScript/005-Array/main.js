// ARRAY

// 1. Method
let cars = ['TOGG', 'BYD', 'Cherry', 'Tesla']
// 2. Method
let cars2 = new Array('TOGG', 'BYD', 'Cherry', 'Tesla')

console.log(cars[0], cars[1], cars[2])
console.log(cars[cars.length - 1])
document.getElementById("cars-paragraph").innerHTML = cars;

// Edits on the select partition of the array
cars[2] = 'Cherry'

// Is it have your query inside that variable ANSWER BOOLEAN
console.log(cars.includes('BYD'))

// Returns the number of elements
console.log(cars.length)

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
console.log(cars.toSorted()) // only change this 
console.log(cars) // nothing change anything
console.log(cars.sort()) // change the array
console.log(cars) // changing array
// thats means from large to small
cars.sort((a,b) => b - a);

// toReversed means same the toSorted function both of not changed the original value
// Reverse the array
console.log(cars.reverse())

// Adds a new element
cars.push('Amperino')
cars = cars.concat('Zeekr')
cars[cars.length] = "Volkswagen";

// Delete the last element
cars.pop()

// Adds a new element per other elements
cars.unshift('Toyota')

// Delete begin element
cars.shift()


// Combines the elements of the array by adding between them
let carCatalog = cars.join(', ')
console.log(carCatalog)

// Know the order of your query and wants to location
console.log(cars.indexOf('Toyota'))
