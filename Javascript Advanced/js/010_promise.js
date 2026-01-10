// JS Promise

// Pending (undefined) - Pending (fullfilled) - Rejected (promise state)
const promise1 = new Promise((resolve, reject) => {
	// resolve()
	// resolve('DATA')
	reject('ERROR')
})
console.log(promise1)



// in multiple promise object show first message 
	const promise2 = new Promise((resolve, reject) => {
	resolve('DATA')
	resolve('DATA2')
	reject('ERROR')
	reject('ERROR2')
})
console.log(promise2)



// if you want to get message use than or catch
const promise3 = new Promise((resolve, reject) => {
	resolve('DATA')
	reject('ERROR')
})
// promise1.then(message => console.log(message))
// promise1.catch(message => console.log(message))
promise3.then(message => {
	console.log(message)
}).catch(message => {
	console.log(message)
}).finally(() => {
	console.log("Process Complete")
})




const promise4 = new Promise((resolve, reject) => {
	resolve('DATA')
	reject('ERROR')
})
promise1.then(
	() => {console.log('Veriler Alındı.')},
	() => {console.log('Veriler Alınamadı.')}
)




const books = [
  {name: "Savaş ve Barış",author: "Lev Tolstoy"},
  {name: "Suç ve Ceza",author: "Fyodor Dostoyevski"},
  {name: "Küçük Prens",author: "Antoine de Saint-Exupéry"},
  {name: "1984",author: "George Orwell"},
];

const listBook = () => {
	books.forEach((book, index) => {
		console.log(index, book.name, book.author)
	})
}

const addNewBook = book => {
	return new Promise((resolve, reject) => {
		books.push(book)
		resolve(books)
		reject('Hata')
	})
}

addNewBook({name: "Yüz Yıllık Yalnızlık", author: "Gabriel García Márquez"})
.then(() => {
	console.log('Book Added')
	listBook()
}).catch(message => {
	console.log(message)
})




let protectingChild = 'Fahri'
let timer = NaN
// timer = 50
function childProtection(callBack, errorCallBack) {
	if(isNaN(timer)) {
		callBack('something went wrong timer is not a number')
	} else {
		if(timer >= 100) {
			errorCallBack({name: protectingChild, desc: 'User Left', log: '15:04 05.07.2025'})
		} else {
			console.log((100 - timer),'minutes left until closing')
		} 
	}
}

childProtection((message) => {
	console.error(message)
},(name, desc, log) => {
	console.log(name, desc, log)
})




function promiseChildProtection() {
	return new Promise((resolve, reject) => {
		if(isNaN(timer)) {
			reject() // giving error code
		} else {
			if(timer >= 100) {
				resolve({name: protectingChild, desc: 'User Left', log: '15:04 05.07.2025'})
			} else {
				console.log((100 - timer),'minutes left until closing')
			} 
		}
	})
}

promiseChildProtection() // Calling the function to get the promise
.then(data => { // Consider the analysis
	console.log(data.name, data.desc, data.log);
})
.catch(error => { // Handle rejection
	console.error('Error:', error);
});




const recordVideoOne = new Promise((resolve, reject) => {
	resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
	reject('404')
})

const recordVideoThree = new Promise((resolve, reject) => {
	resolve('Video 3 recorded')
})

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then((message) => {
		console.log(message)
	}
).catch((errCode) => {
	console.log("error code: ",errCode)
})

// Promise.all writing all promise result Promise.result only first Promise result