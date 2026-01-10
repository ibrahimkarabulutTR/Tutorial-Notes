// JS Async Await

async function asyncFunction() {
	return "merhaba"
}

asyncFunction().then(result => {
	console.log(result)
})




function getPerson(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('kullanıcı bilgisi getirildi')
			resolve({id: 1, name: 'Rıdvan Çelik'})
		}, 2000)
	})
}

console.log('işlem başlatılıyor...')

getPerson().then(person => {
	console.log('no: ',person.id)
	console.log('kullanıcı: ',person.name)
})





function promiseGetPerson(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('promise kullanıcı bilgisi getirildi')
			resolve({id: 1, name: 'Rıdvan Çelik (promised)'})
		}, 2000)
	})
}

async function executePerson(){
	console.log('Promise işlem başlatılıyor...')
	const person = await promiseGetPerson()
	console.log('no: ',person.id)
	console.log('kullanıcı: ',person.name)
}
executePerson()




function debugTest() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// resolve("DATA")
			reject("404")
		}, 2000)
	})
}

async function executeDebugTest() {
	try {
		const data = await debugTest() // if get error send catch
		console.log(data)
	} catch (error) {
		console.log("hata yakalandı: ",error)
	} finally {
		console.log("process finished")
	}
}
executeDebugTest()