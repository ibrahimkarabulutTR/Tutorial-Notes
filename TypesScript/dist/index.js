"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// live error detection
console.log(Math.floor(11.25)); // you cant assign Math.floor() with argumentless
// type annotation
let numberExample = 15;
let stringExample = 'Hello World';
numberExample = 30; // you cant assign number to string
stringExample = 'Hello TypeScript'; // you cant assign string to number
// dynamic typing
let dynamicExample = 25; // you can assign with typeless (dynamic) variable
// dynamicExample = 'Hello' // but you change different type of value to variable
// any type (like a dynamic type, you can assign and change any type of value)
let myVar = 40;
myVar = 'Hello';
// type annotation with object
let personExTo = {
    name: 'Alice',
    age: 40,
    jobTitle: 'Engineer',
    adress: {
        street: '123 Main St',
        city: 'London'
    }
};
// type annotation with functions
function calcRectangleArea(lengthRectangle, widthOfRectangle) {
    return lengthRectangle * widthOfRectangle;
}
const lengthRectangle = 5;
const widthOfRectangle = 10;
const area = calcRectangleArea(lengthRectangle, widthOfRectangle);
console.log(area);
// optional parameters
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}`);
    }
}
greetOptional('İbrahim');
// default parameters
function defaultOptional(name, age = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
defaultOptional('İbrahim');
// rest parameters
// it doesen't work because nums not sure by value
/* function addAll(...nums: number[]): number {
    let result = 0
    for(let i = 0; i < nums.length; i++) {
        result += nums[i]
    }
    return result
}

console.log(addAll(25, 36, 54, 56, +true)) */
// First method
function addAll1(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (currentNum !== undefined) {
            result += currentNum;
        }
    }
    return result;
}
// Second Method
function addAll2(...nums) {
    let result = 0;
    for (const num of nums) {
        result += num;
    }
    return result;
}
// Arrow expression
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(15, 65));
// Function expression, Anonymous function
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(15, 25));
// Function type void
function greet(name) {
    console.log(`Hello, ${name}`);
}
function noReturnValue() {
    // this function doesen't return a value (implicity returns undefined)
}
// Function type never
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Kritik bir hata oluştu!");
    // Bu satırın altındaki hiçbir kod (catch bloğu dışında) çalışmaz.
    console.log("Bu satır asla çalışmaz.");
}
catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    }
    else {
        console.log("Bilinmeyen bir hata yakalandı: ", e);
    }
}
function sonsuzDongu() {
    while (true) {
        console.log("Program sonsuza kadar çalışıyor...");
        // İşletim sistemi bu süreci durdurana kadar bu döngü kırılmaz.
    }
}
function islemYap(sekil) {
    switch (sekil) {
        case "kare":
            return 4;
        case "daire":
            return 0;
        // Diyelim ki "üçgen" durumunu unuttunuz.
        // case "üçgen":
        //   return 3;
        case "üçgen":
            return 3;
        default:
            // Burada geriye kalan değeri alacak değişken.
            const _exhaustivenessCheck = sekil;
            return 0; // Bir değer döndürülmeli.
    }
}
// Union types
let age;
age = "ten";
// Literal types
let developer;
// nullable types
let birth;
let birthday = "June";
let child = 10;
const Alice = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com"
};
const Bob = {
    name: "Bob",
    age: 25
};
const person = {
    name: 'John Doe',
    age: 30,
    address: "123 Main St.",
    phone: '0123456789'
};
// annotating an array of strings
let fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// type annotations with multidimensional array
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["One", "Two", "Three", "Four", "Five"];
let arrayThree = ["one", 1, "two", 2];
// defining a tuple type
let article = [11, "Title One", true];
// assigning a new tuple value to the 'article' variable
article = [12, 'Title Two', false];
// trying to push a new element into a tuple (will result in an error)
// article.push(13)
// article.push(13, 'Title Three', true)
console.log(article);
// destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
// enums
var direction;
(function (direction) {
    direction[direction["Up"] = 0] = "Up";
    direction[direction["Down"] = 1] = "Down";
    direction[direction["Left"] = 2] = "Left";
    direction[direction["Right"] = 3] = "Right"; // 3
})(direction || (direction = {}));
const playerDirection = direction.Down;
console.log(playerDirection);
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Unauthorized"] = 401] = "Unauthorized";
    statusCode[statusCode["Accepted"] = 402] = "Accepted";
})(statusCode || (statusCode = {}));
console.log(statusCode.Accepted);
const John = {
    name: 'John',
    age: 30
};
const sarah = {
    name: 'sarah',
    age: 30,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    }
};
sarah.greet("Hello TypeScript");
//# sourceMappingURL=index.js.map