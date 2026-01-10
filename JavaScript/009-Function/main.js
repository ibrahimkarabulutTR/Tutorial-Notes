// FUNCTIONS

function printText() {
	console.log('Hello World')
}
printText()



// function with parameter
function printName(name, surname) {
	console.log(name, surname)
}
printName('İbrahim','Karabulut')



// Function with default paramter
function defaultPrinter(name='name', surname='surname'){
	console.log(name, surname);
}
defaultPrinter('İbrahim');



//Function return
const plus = function(x,y) {
	return x+y;
}
console.log(plus(5,10));



// Arrow Function
const area = value => {
	console.log(value)
}
area('Hi arrow function')



// if syntax are 1 row
const area1 = (value) => console.log(value);



// if you have a parameter you have to use ()
// 1 row syntax return
const area2 = (x,y) => x+y;

const username = 'Ahmet';



// Function with method
const bigNamePrint = () => username.toUpperCase();
console.log(bigNamePrint());

// Function with button
function clicked(){
	console.log('button has clicked')
}