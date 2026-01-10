// VAR --> global usage, difference local & global, changeable
var personName = 'İbrahim' // Global
personName = 'Halil İbrahim' // change value
console.log(personName)

function returnPerson(){
	var personName = 'Abdullah'; // Local
	console.log(personName)
}
returnPerson()



// LET --> difference local & global, changeable
let Brand = 'Lenovo'
Brand = 'Asus'
function returnBrand(){
	let Brand = 'Casper';
	return Brand
}

console.log(Brand)
console.log(returnBrand());



// CONST --> difference local & global, unchangeable
const birthDay = '01.01.2001'
// birthDay = '01.01.2000' it giving error



// Multiple variable creation
let kindergarten = false,
		primaryEducation = true,
		secondarySchool = true,
		highSchool = true,
		university = true


		
// First method there is no space you have to add on string
console.log('1) Hello my name is '+personName+' and my birthday is '+birthDay)

// Second method there has a space if you have to add on string with ,
console.log('2) Hello my name is',personName,'and my birthday is',birthDay)

// Third method
console.log(`3) Hello my name is ${personName} and my birthday is ${birthDay}`)