// OBJECTS

const person = {
	name: 'Abdullah',
	surname: 'ÖKMEN',
	age: 25,
	lang: ['Turkish', 'English', 'KURDISH'],
	fullName: function() {
		return this.name + ' ' + this.surname
	},
	address: {
		country: 'Türkiye',
		city: 'Adana',
		district: 'Seyhan'
	}
}
console.log(person.name)
console.log(person['sur'+'name'])
console.log(person['fullName']())
console.log(person['age'])

person.job = 'Carpenter'
console.log(person.job)

person.graduate = {}
person.graduate.college = true
console.log(person)
// Property --> function associated with an object



// CONSTRUCTOR
// 1.method
function createObjectPerson(name, surname, age){
	const obj = {}
	obj.name = name
	obj.surname = surname
	obj.age = age
	obj.fullName = function() {
		return obj.name + ' ' + obj.surname
	}
	return obj
}

const carpenterPerson = new createObjectPerson('Abdullah', 'Ökmen', 30)
console.log(carpenterPerson)



// 2.method
function createThisPerson(name, surname, age){
	console.log(this)
	this.name = name
	this.surname = surname
	this.age = age
	this.fullName = function() {
		return this.name + ' ' + this.surname
	}
	console.log(this)
}

const doctorPerson = new createThisPerson('Serhat', 'Tekik', 25)
console.log(doctorPerson)



// OBJECT CONSTRUCTOR

const objectPerson = new Object();
objectPerson.name = 'Ramazan'
objectPerson.surname = 'Kalkan'
objectPerson.age = 25
objectPerson.fullName = function() {
	return this.name + ' ' + this.surname
}
console.log(objectPerson)




// Create a object with Object.create()
const objectCreatePerson = {
	name: 'Null',
	surname: 'Null',
	age: 'Null',
	fullName: function() {
		return this.name + ' ' + this.surname
	}
}

const armyPerson = Object.create(objectCreatePerson)
armyPerson.name = 'Mete'
armyPerson.surname = 'Yarar'
armyPerson.age = 50
console.log(armyPerson)
console.log(armyPerson.fullName())