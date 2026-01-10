// JS THIS

/* this --> global object --> window (global)
Obj.func() --> this Obj */


console.log(this)
console.log(this.location.href)
console.log(window.location.href)
console.log(this === window)



const names = "Abdulmuttalip"
console.log(names)
console.log(this.names) // if variable type has var its work



// function declaration
function func1(){
	this.name = "Abdullah"
	console.log(this)
	console.log(age)
}
// function expression not support hoisting
function func2(){
	this.age = 25
	console.log(this)
	console.log(name)
}

func2()
func1()



const abdulcelil = {
	name: 'Abdulcelil',
	surname: 'ÇİÇEK',
	age: 50,
	fullName: function(){
		return this.name+" "+this.surname
	},
	son: {
		name: 'Ahmet',
		surname: 'ÇİÇEK',
		age: 16,
		fullName: function(){
			return this.name+" "+this.surname
		}
	}
}
console.log(abdulcelil.fullName())
console.log(abdulcelil.son.fullName())



const akif = {
	func: function() {
		console.log(this === akif)
		console.log(this === window)
	}
}
akif.func()
const fancy = akif.func
fancy()




const elis = {
	func: function(){
		console.log(this === elis)
		setTimeout(function() {
			console.log(this === elis)
			console.log(this === window)
		}, 2000)
	}
}
elis.func()