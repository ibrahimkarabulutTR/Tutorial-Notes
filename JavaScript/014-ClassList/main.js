const div = document.createElement('div')
console.log(div.outerHTML)

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("another-class");
console.log(div.outerHTML)

// If the class exists, it deletes it; if not, it adds it.
div.classList.toggle("another-class");
console.log(div.outerHTML)

let i=0;
div.classList.toggle("visible", i < 10);
console.log(div.classList.contains("foo"));
console.log(div.outerHTML)

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("visible", "unvisible");