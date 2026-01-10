// OUTPUT
document.write('Hello World')

let p_html 		= document.querySelector('p#p-inner-html'),
		p_text 		= document.querySelector('#p-inner-text'),
		p_content = document.querySelector('#p-text-content')


// Write on screen
p_html.innerHTML = '<h1>Hello World</h1>'
p_text.innerText = '<small>Text with html code</small>'
p_content.textContent ='Only text'

// Write on alert notification
alert('Hello Alert')
window.alert('Window Alert')

// Write on console
console.log('Hello console')
console.error('404 not found')
console.table(['apple', 'juicy', 'watermelon', 'strawberry'])
// console...