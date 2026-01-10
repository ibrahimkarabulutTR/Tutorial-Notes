// ATTRIBUTE

const link = document.querySelector('a');
console.log(link);

link.textContent = 'Google link';
link.setAttribute('href', 'https://www.google.com.tr/');

console.log(link.getAttribute('href'));
console.log(link.getAttribute('class'));
link.setAttribute('class', 'google-link')
link.setAttribute('style', 'color: red')

if(link.hasAttributes()){
  console.log(link.attributes)
}