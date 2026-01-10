// CONDITIONS

let note=85;

// IF
if(note >= 75) {
	console.log('Good');
} else if(note >= 50) {
	console.log('Middle')
} else {
	console.log('Bad');
}

// Other method
let result = note >= 75 ? console.log('Good') : note >= 50 ? console.log('Middle') : console.log('Bad');

// && All conditions result have to same
// || All conditions result have to different
let x=0;
let y=1;
if(x==0 && y==1) {
	console.log('all conditions are true');
} else if(x==1 || y==1) {
	console.log('1 of true 1 of false');
}

// Just print the 18 between 28 numbers
for(let a=0; a<30; a++) {
	if(18<a<28) {
		console.log(a)
	} else {
		continue
	}
}


// Switch
let resultGraduate = 'AA';

switch(resultGraduate) {
	case 'AA':
		console.log('Value is AA');
		break;
	case 'BB':
		console.log('Value is BB');
		break;
	case 'CC':
		console.log('Value is CC');
		break;
	default:
		console.log('Undefined');
		break;
}



// Optional chaining ?.
const user = {
    name: 'Ali',
    address: {
        city: 'Ankara',
        street: 'Atatürk Caddesi'
    }
};

// const city = user.location.city; // Give an error because user.location undefined

// Safe query with optional chaining
const city = user.location?.city; // return undefined not error döner
console.log(city); // undefined



// New conditions Tricks
let i = 5
div.classList.toggle("visible", i < 10) // if i>10 remove visible classname else add visible classname

for(let n=15; n<10; n--){
	div.classList.toggle("visible", i < 10) // process applicable to the first 10 elements
}

isAdmin && deleteUser(userId); // If the isAdmin variable is true, execute the deleteUser function.

const userName = settings.user || "Misafir"; // The default value to be used if the variable value is null, undefined, 0, or “” is written || after.