const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log("name:",e.target.name.value)
  console.log("email:",e.target.email.value)
})

const regex = /^[a-z,A-Z,0-9,\,-,&,*,%]{8,16}$/;
form.name.addEventListener('keyup', e => {
  e.preventDefault()
  let label = e.target.previousElementSibling;
  if(e.target.value.search(regex) >= 0) {
		label.textContent = 'meet the required';
		e.target.style.boxShadow="0 0 0 3px rgba(0,150,0,.5)";
	} else {
		label.textContent = "doesn't meet the required";
		e.target.style.boxShadow="0 0 0 3px rgba(150,0,0,.5)";
	}
})

// x.addEventListener('mousemove');
// x.addEventListener('wheel');
// ...