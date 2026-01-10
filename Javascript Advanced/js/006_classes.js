// JS CLASSES

/* // Constructor Function
function Person(name, surname, age) {
	this.name = name
	this.surname = surname
	this.age = age
	// this.fullName = function() {
	// 	return this.name + ' ' + this.surname
	// }
}

// if you dont want a function implement in function
// First usage
// Negative: this will be complicated your code
function fullName(){
	return this.name + ' ' + this.surname
}

// Second usage
// Negative: this is a global You cannot customize it according to the place of use.
Person.prototype.fullname = function() {
	return this.name + ' ' + this.surname
} */

// Class --> personal customizable function
// CLASS DECLARATION
/* class Person {
	constructor(name, surname, age) {
		this.name = name
		this.surname = surname
		this.age = age
	}
	fullName() {
		return this.name + ' ' + this.surname
	}
	graduate = ['primary school', 'middle school', 'high school']
} */



// CLASS EXPRESSION
const Person = class {
	constructor(name, surname, age) {
		this.name = name
		this.surname = surname
		this.age = age
	}
	fullName() {
		return this.name + ' ' + this.surname
	}
	graduate = ['primary school', 'middle school', 'high school']
	static showName = 'Person'
	static specialMethod() {
		console.log('special method working')
	}
}


const abdullah = new Person('abdullah', 'ökmen', 20)
const ömer = new Person('ömer', 'öner', 40)
console.log(abdullah)
console.log(abdullah.name)
console.log(abdullah.fullName())
// console.log(Person.fullName()) --> giving error
abdullah.graduate.push('college')
console.log(typeof Person)
console.log(abdullah instanceof Person)
console.log(ömer instanceof Person)

// console.log(abdullah.showName) --> giving error
// abdullah.specialMethod() -- > giving error

console.log(Person.showName)
Person.specialMethod()




class Engineer extends Person {
	constructor(name, surname, age, job){
		super(name, surname, age)
		this.job = job
	}
	getMoney() {
		console.log('Earn Money')
	}
}

/* class Engineer extends Person {} // Engineer --> subclass (child), Person --> superclass (parent) */
const ibrahim = new Engineer('İbrahim', 'Kenan', '35', 'CNC')
console.log(abdullah)
console.log(ibrahim)

console.log(abdullah instanceof Person)
console.log(ibrahim instanceof Engineer)




class extendsArray extends Array {
	shuffle() {
		this.sort(() => Math.random() - 0.5)
	}
}
const myArray = new extendsArray(1, 2, 3, 4, 5);
console.log("Original array:", myArray);

myArray.shuffle();
console.log("Stirred array:", myArray);