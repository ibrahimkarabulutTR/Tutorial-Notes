/* VARIABLES --> LET, CONST, VAR */

// LET --> blockscope, changeable(can be created without value)
let number
number = 11
console.log(number)

if (number <= 50){
	let number = 75
	console.log(number)
}
console.log(number)



// CONST --> blockscope, unchangeable
const passwd = 'rg68ew9g4tr5g69rth'
let salt = ['!+&(+', '?&/()=&%']

/* if variable isn't CONST you can use names=names.concat(...add) but in CONST you can't change, only manipulated  */
console.log(passwd.concat(...salt))

/* you can edit in Object & Array variable with CONST because we didn't change the value with the new reference, array and the object was changed inside itself with its own method */
const points = [25, 56, 69]
points.pop()
points.push(85)
console.log(points)

const profile = {
	name: 'İbrahim Karabulut',
	lang: ['TR', 'EN']
}
profile.lang.push("DE")
console.log(profile)
/* if you don want to change your object */
Object.freeze(profile)



// VAR --> Global Scope, Functional Scope, Hoisting(if you call the var variable before the create its create a variable with undefined)
console.log(score) // hoisted
var score = 0
console.log(score)
if (score === 0){
	var score = 10
	console.log(score)
}
console.log(score)
console.log(window.score) // window means global variable and score was window properties