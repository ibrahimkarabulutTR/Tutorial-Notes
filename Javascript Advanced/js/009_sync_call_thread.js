// JS single thread synchronous

console.log('asking test 1)', 10>5)
console.log('asking test 2)', '5' == 5)
console.log('asking test 3)', '5' === 5)




// Call Stack order of execution of functions
function UITest(){
	let test=true
	if(test) {
		console.log('runing UI test')
		CompileTest()
		console.log('UI & Compile test succesfully finished')
	}
}
function CompileTest(){
	let test=true
	if(test) {
		console.log('running Compile test')
	}
}

UITest()




let sum = (x, y) => x + y
let ave = (x,y) => sum(x, y) / 2

console.log(ave(20,10))



// The code does not always wait for the previous code to finish. 
// It continues until the operation is finished. Then, it puts the result in the nearest operation queue.
function task(message) {
	let n = 1000000000
	while(n>0){
		n--
	}
	console.log(message)
}

console.log(1)

setTimeout(() => {
	console.log(2)
}, 1000)

task("n equal 0")

console.log(3)





// Call Back
const rate = () => console.log(' Do you want to rate our website ?')
setTimeout(rate, 10000)



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

const addNewBook = (book, callBack) => {
	books.push(book)
	callBack()
}

addNewBook({name: "Yüz Yıllık Yalnızlık",author: "Gabriel García Márquez"}, listBook)