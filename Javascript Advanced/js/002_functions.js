// FUNCTIONS

// Function Declaration / Statements
/* square(num) --> num is parameter */
function square(num){ 
	return num * num
}
square(5) /* square(num) --> num is argument */
console.log(square(3))

console.log(square) /* Writing function () --> invoke */
/* Function declaration --> HOISTED */



// Function Expression
/* if the function is assigned to a variable and this variable will be FIRST CLASS FUNCTIONS
function name is optional is can be anonymous like function() {...} */
const triangle = function (num) {
	return num * num * num
}
console.log(triangle(5))


/* IIFE immediately invocable function expression */
console.log(20 + (function (){return 10})()) 



const addFive = function (num, func){
	console.log(num + func())
}
addFive(10, function(){return 5})
console.log(addFive.length) /* how many parameter has a function */



const myFunc = function (num) {
	return function toDouble(){
		console.log(num * 2)
	}
}
myFunc(2)()

const result = myFunc(4)
result()


// IIFE (immediately invocable function expression)
const sum = function () {
	console.log(5 + 12)
}();
/*
	// if this function we invoked this function will be disposable IIFE
	
	When you use an IIFE function that starts with parentheses, 
	be careful to use ; in the previous action, otherwise the parenthetical
	 action may think that the previous action has been invoked.
*/
(function() {
	console.log(5 + 12)
})();