// JS ARROW FUNCTION EXPRESSION

const square1 = function(num) { return (num*num)}

const square2 = (num) => {return (num*num)}

const square3 = num => num*num

console.log(square1(8))




// arrow function doesn't have specific object its copied window obj 
window.name= "arin"

const tellName = (name) => {
	name
	console.log(this)
	console.log(this.name)
	console.log(name)
}
const person = {
	tellName: (name) => {
		name
		console.log(this)
		console.log(this.name)
		console.log(name)
	}
}
tellName('mehmet')
person.tellName('mahmut')




const personal = {
	name: "rıdvan",
	tellName: function() {
		console.log(this)
		console.log(this.name)
		setTimeout(() => {
			console.log(this)
			console.log(this.name)
		}, 2000)
	},
}
personal.tellName()




// arrow function we cant offer to use constructor function 

window.grade = 80

const calculator = {
	// examResult: function () {
	examResult: function() {
		return this.name + " " + this.grade
	}
}
const student1 = {
	name: "elis",
	grade: 80
}
const student2 = {
	name: "arin",
	grade: 70
}
console.log(calculator.examResult.call(student1))
console.log(calculator.examResult.call(student2))




function selamVer(mesaj, isim) {
  console.log(`${mesaj}, ${isim}! Benim adım ${this.names}.`);
}

const aiName = {
  names: "Mustafa"
};

// call() -->  Arguments are passed one by one
selamVer.call(aiName, "Merhaba", "Ayşe"); // Output: Merhaba, Ayşe! Benim adım Mustafa.

// apply() --> Arguments are passed as an array
selamVer.apply(aiName, ["Selam", "Mehmet"]); // Output: Selam, Mehmet! Benim adım Mustafa.






const obj1 = {
	number1:10,
	number2:20
};

function getNumbersTotal(number3,number4) {
    return this.number1 + this.number2 + number3 + number4;
}
// We create a new function by binding obj1 to the this parameter.

const copyFunc = getNumbersTotal.bind(obj1);

console.log(copyFunc(30,40));

// Output : 100