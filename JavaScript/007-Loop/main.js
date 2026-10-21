// FOR
// Variable, Variable condition, Variable mission

let names = ['Ahmet', 'Mahmut', 'Mehmet'];

/* First Method */
for(let x=0; x<10; x++) {
	console.log(x);
}

for(let n=0; n<names.length; n++) {
	console.log(names[n]);
}


/* Second Method */
// give array content
for(let name of names) {
	console.log(name);
}

// give array number
for(let name in names) {
  console.log(name)
}


// WHILE
let y=0;
while(y<10) {
	console.log(y);
	y++;
}

let y1=0;
while(y1<names.length) {
	console.log(names[y1]);
	y1++;
}


// DO-WHILE
let z=0;
do {
	console.log(names[z]);
	z++;
} while (z<names.length);