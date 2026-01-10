// OBJECTS Part3 --> NEW OBJECT SYNTAX

// 1- Shorthand Properties

let name = 'Arin', age = 20

// const myObj = {
// 	name: name,
// 	age: age
// }
const myObj = {
	name,
	age
}
console.log(myObj.name)
console.log(myObj.age)



// 2- Computed Property Names

// let comProp = 'name'
// const myObj = {}
// myObj[comProp] = 'Arin'
// console.log(myObj)

let comProp = 'name'
let myObj1 = {
	[comProp]: 'Arin'
}
console.log(myObj1)



// 3- Short Method Syntax

const shortPerson = {
	name: 'Abdulcelil',
	surname: 'ÇİÇEK',
	age: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}
console.log(shortPerson.fullName())



// 4- Object Destructuring

const destructPersons = {
	names: 'John',
	surnames: 'Doe',
	ages: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}
let {names: myVar1, ages: myVar2} = destructPersons
console.log(myVar1)
console.log(myVar2)

let {names, ages} = destructPersons
console.log(names)
console.log(ages)


const books = [
  {
    title: "1984",
    author: "George Orwell",
    pageNumber: 328
  },
  {
    title: "Hayvan Çiftliği",
    author: "George Orwell",
    pageNumber: 152
  },
  {
    title: "Cesur Yeni Dünya",
    author: "Aldous Huxley",
    pageNumber: 311
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    pageNumber: 192
  }
];
for(const {title, author, pageNumber} of books){
	console.log(`${title} --> ${author} [${pageNumber}]`)
}



// 5- Spread Operator In Object Literals (...)

const mainPerson = {
	name: 'Ahmet',
	surname: 'DEMİR',
	age: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}
const personCopy = {...mainPerson}
console.log(personCopy)


const data1 = {
	name: 'Arin',
	age: 40
}
const data2 = {
	job: 'Student',
	graduate: 'College'
}
const personData = {...data1, school: 'Fatih Sultan Mehmet College', ...data2}
console.log(personData)



// 6- REST Operator In Object Literals

const person = {
	Name: 'John',
	Surname: 'Doe',
	Age: 40,
	fullName() {
		return this.Name + ' ' + this.Surname
	}
}
const {Name, ...rest} = person
console.log(Name)
console.log(rest)



// 7- Object Values - Object Entries

const personKeys = {
	name: 'John',
	surname: 'Doe',
	age: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}
console.log(Object.keys(personKeys))
console.log(Object.values(personKeys))
console.log(Object.entries(personKeys))