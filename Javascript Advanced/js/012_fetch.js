// JS Fetch

/* console.log("Veri çekme işlemi başlıyor...");
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
	// console.log(response)
	// STAGE 1: came response object
	// check the request is successful
	if(!response.ok) {
		// response.ok checking http situation between 200-299 
		throw new Error(`HTTP Hatası! Durum: ${response.status}`)
		// .json() is called to convert the incoming data to JSON.
		// Since this also returns a Promise, we continue the chain with return.
	}
	return response.json()
}).then(data => {
	// STAGE 2: .json() Promise is resolved and we have the data.
	console.log('veri başarıyla alındı')
	console.log(data)
}).catch(error => {
	// The network error or the error we threw above falls here.
	console.error("Veri çekilirken bir hata oluştu:", error);
}); */





async function getTodo(){
	try{
		console.log("veri çekme işlemi başlıyor")
	
		const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
	
		if(!response.ok) {
			throw new Error(`HTTP Hatası! Durum: ${response.status}`)
		}
	
		const data = await response.json()
	
		console.log("veri başarıyla alındı")
	
		console.log(data)
	} catch (error) {
		console.error("Veri çekilirken bir hata oluştu:", error);
	}
}
getTodo()





// CRUD WITH FETCH()
// --> POST 

async function addTodo() {
	const newTodo = {
		userId: 1,
		title: 'I added new todo',
		completed: false
	}

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newTodo)
		})
		if(!response.ok) {
			throw new Error(`HTTP Hatası! Durum: ${response.status}`)
		}
		const addingInput = await response.json()
		console.log('sunucuya başarıyla eklendi')
		console.log('eklenen veri: ', addingInput)
	} catch(error) {
		console.error("Veri gönderilirken hata:", error);
	}
}

addTodo()




// --> Read GET
const baseURL = 'https://jsonplaceholder.typicode.com'

async function readPost(){
	try{
		const response = await fetch(`${baseURL}/posts`, {
			method: 'GET'
		})

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const posts = await response.json()
		console.log('Başarıyla Getirildi:', posts.slice(0,5));
		return posts
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
readPost()


// GET this id
async function getPostId(postId){
	try{
		const response = await fetch(`${baseURL}/posts/${postId}`)

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const post = await response.json()
		console.log('Başarıyla Getirildi:', post)
		return post
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
getPostId(10)





// PUT change all data PATCH change only special data
const postData = {userId: 31,	title: 'I added new todom'}

async function patchData(postId, postData){
	try{
		const response = await fetch(`${baseURL}/posts/${postId}`,{
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		})

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const updatedPost = await response.json()
		console.log('Başarıyla Güncellendi:', updatedPost)
		return updatedPost
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
patchData(10, postData)





// --> DELETE 
async function deleteData(postId){
	try{
		const response = await fetch(`${baseURL}/posts/${postId}`,{
			method: 'DELETE'
		})

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const deletedPost = await response.json()
		console.log('Başarıyla Silindi id:', postId, deletedPost)
		return deletedPost
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
deleteData(10)