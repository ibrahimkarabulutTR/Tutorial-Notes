// OBJECTS Part2

const builder = {
	name: 'İbrahim',
	surname: 'YAMAN',
	age: 30,
	fullName: function() {
		return this.name + ' ' + this.surname
	}
}

console.log(builder)
console.log(builder.toString())
console.log(builder.hasOwnProperty('name'))
// OBJECT --> name + surname + age + fullName --> builder
// builder prototype --> object inheritance



const myObj = {}
console.log(myObj)
console.log(myObj.toString())
// OBJECT --> myObj
// myObj prototype --> object inheritance




function personConstructor(name, surname, age) {
	this.name = name
	this.surname = surname
	this.age = age
	 
	// this.fullName = function() {
	// 	return this.name + ' ' + this.surname
	// }
} 
// this is more faster than inside the constructor function
personConstructor.prototype.fullName = function() {
  return this.name + ' ' + this.surname;
};
const gurcan = new personConstructor('Gürcan', 'ÇEKİÇ', 40)
console.log(gurcan)
console.log(Object.getPrototypeOf(gurcan))

// OBJECT --> name + surname + age + fullName --> Person Constructor --> gurcan
// gurcan prototype --> Person Constructor prototype --> object inheritance



const elis = new personConstructor('Elis', 'ÇEKİÇ', 10)
console.log(elis)
elis.job = 'Student'
console.log(elis)
elis.toString = function() {
	return 'ELİS'
}
console.log(elis.toString())
// OBJECT --> name + surname + age + fullName --> personConstructor + job --> elis



const arinPerson = {
	name: 'Arin',
	surname: 'Soft',
	age: 40,
}

const selda = Object.create(arinPerson)
console.log(selda)
console.log(selda.name)
console.log(selda.hasOwnProperty('name'))
console.log('name' in selda)