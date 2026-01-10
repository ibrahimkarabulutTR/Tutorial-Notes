// 014_import_export.js

// 1. Exporting a named array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/*
// How to import in another file (e.g., 014_app.js):
import { months } from "./014_import_export.js";
console.log(months); // ['Jan', 'Feb', ...]
*/




// 2. Exporting a named constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;
/*
// How to import in another file (e.g., 014_app.js):
import { MODULES_BECAME_STANDARD_YEAR } from "./014_import_export.js";
console.log(MODULES_BECAME_STANDARD_YEAR); // 2015
*/




// 3. Exporting a named class
export class User {
  constructor(name) {
    this.name = name;
  }
}
/*
// How to import in another file (e.g., 014_app.js):
import { User } from "./014_import_export.js";
const user1 = new User('Alice');
console.log(user1.name); // Alice
*/




// 4. Exporting named functions (defined first, then exported)
function sayHello(user) {
  alert(`Hello, ${user}!`);
}
function sayGoodbye(user) {
  alert(`Goodbye, ${user}!`);
}
export { sayHello, sayGoodbye }; // Exporting multiple named functions
/*
// How to import in another file (e.g., 014_app.js):
import { sayHello, sayGoodbye } from './014_import_export.js';
sayHello('John');   // Alerts: Hello, John!
sayGoodbye('John'); // Alerts: Goodbye, John!

// Or importing all named exports as a single object:
import * as myModule from './014_import_export.js';
myModule.sayHello('Namespace User'); // Alerts: Hello, Namespace User!
*/




// 5. Exporting named functions with aliases (renaming on export)
// This allows importing them with a different name.
export { sayHello as greet, sayGoodbye as farewell };
/*
// How to import in another file (e.g., 014_app.js):
import { greet, farewell } from './014_import_export.js';
greet('Bob');    // Alerts: Hello, Bob!
farewell('Bob'); // Alerts: Goodbye, Bob!
*/




// --- Default Exports (Only ONE per module) ---

// 6. Exporting a default array (no variable name needed during export)
// This will be the main value exported from this module if nothing else is specified.
export default ['Apple', 'Banana', 'Cherry', 'Date'];
/*
// How to import in another file (e.g., 014_app.js):
// You can give it any name you want without curly braces.
import defaultFruits from './014_import_export.js';
console.table(defaultFruits); // ['Apple', 'Banana', ...]

// If importing with a namespace import:
import * as moduleWithDefault from './014_import_export.js';
console.log(moduleWithDefault.default); // ['Apple', 'Banana', ...]
*/




// 7. Exporting a default class (no class name needed during export)
// Note: If you have a default export, it's typically the primary focus of the module.
// We already have an array as default, so uncommenting this would cause a conflict (only one default export per file).
/*
export default class {
  constructor() { console.log("Default unnamed class instantiated."); }
}
// How to import if this was the default export:
// import MyUnnamedClass from './014_import_export.js';
// const obj = new MyUnnamedClass();
*/




// 8. Exporting a specific function as the default (renaming on export)
// This demonstrates how a named entity can become the default export.
// If uncommented, this would override the array default export.
/*
function defaultGreeting(user) {
  alert(`Default greeting: Welcome, ${user}!`);
}
export { defaultGreeting as default };
// How to import if this was the default export:
// import greeting from './014_import_export.js';
// greeting('Bob'); // Alerts: Default greeting: Welcome, Bob!
*/




// 9. Multiple exports with a default and a named export
// This is a common pattern: export a primary entity as default, and other utilities as named exports.
// If uncommented, this would also conflict with the array default export.
/*
export default class MainUser { // The primary class of this module
  constructor(name) {
    this.name = name;
  }
}
export function utilityFunction() { // A named utility function
  console.log("Utility function called.");
}
// How to import if this was the default export:
// import { default as MainUser, utilityFunction } from './014_import_export.js';
// const user = new MainUser('Grace');
// utilityFunction();
*/