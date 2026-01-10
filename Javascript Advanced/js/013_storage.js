// JS Storage (Local & Session)

/*
	setItem()
	getItem()
	removeItem()
	key()
	clear()
*/

// xStorage.setItem('key', 'value');
localStorage.setItem('name', 'Abdullah');
sessionStorage.setItem('name', 'Ömer');


// xStorage.getItem('key')
console.log(localStorage.getItem('name'))
console.log(sessionStorage.getItem('name'))

// xStorage.key(0)
console.log(localStorage.key(0))
console.log(sessionStorage.key(0))

// xStorage.removeItem('key')
console.log(localStorage.removeItem('name'))
console.log(localStorage.getItem('name'))

console.log(sessionStorage.removeItem('name'))
console.log(sessionStorage.getItem('name'))

// xStorage.clear()
localStorage.clear();
sessionStorage.clear();