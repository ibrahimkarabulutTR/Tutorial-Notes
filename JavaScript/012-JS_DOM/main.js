// DOM --> DOCUMENT OBJECT MANIPULATED

let lead = document.querySelector('div.lead'),
    wrapper = document.querySelector('.wrapper'),
    container = document.querySelector('#container')

lead.innerHTML += '<p>This is a paragraph of div</p>';
lead.innerText += 'add word with innerText';
console.log(lead);

let allQuery = document.querySelectorAll('div');
console.log(allQuery);
console.log(allQuery[1]);

// HTML Collections
let paragraph = document.getElementsByTagName('p');
console.log(paragraph);

let wrapper2 = document.getElementsByClassName('wrapper');
console.log(wrapper2[0]);

for(let item of wrapper2) {
  console.log(item);
}

let allDivide = document.querySelectorAll('div');
allDivide.forEach(divide => {
  console.log(divide.innerText);
})

// Prank Code
// let icerik = document.querySelector('html')
// icerik.innerText=icerik.innerHTML

// Edit CSS
lead.style.backgroundColor="red"
lead.style.color="white"
lead.style.margin = '0';
lead.style.textAlign = 'center';
lead.style.padding = '50px';