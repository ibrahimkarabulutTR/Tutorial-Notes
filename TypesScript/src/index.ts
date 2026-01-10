// live error detection
console.log(Math.floor(11.25)) // you cant assign Math.floor() with argumentless

// type annotation
let numberExample: number = 15
let stringExample: string = 'Hello World'
numberExample = 30 // you cant assign number to string
stringExample = 'Hello TypeScript' // you cant assign string to number

// dynamic typing
let dynamicExample = 25 // you can assign with typeless (dynamic) variable
// dynamicExample = 'Hello' // but you change different type of value to variable

// any type (like a dynamic type, you can assign and change any type of value)
let myVar: any = 40
myVar = 'Hello'

// type annotation with object
let personExTo: {
	name: string
	age: number
	jobTitle ?: string
	adress: {
		street: string
		city: string
	}
} = {
	name: 'Alice',
	age: 40,
	jobTitle: 'Engineer',
	adress: {
		street: '123 Main St',
		city: 'London'
	}
}

// type annotation with functions
function calcRectangleArea(lengthRectangle: number, widthOfRectangle: number): number{
	return lengthRectangle * widthOfRectangle
}
const lengthRectangle = 5
const widthOfRectangle = 10
const area = calcRectangleArea(lengthRectangle, widthOfRectangle)
console.log(area)

// optional parameters
function greetOptional(name: string, age?: number){
	if(age !== undefined) {
		console.log(`Hello, ${name}! You are ${age} years old.`)
	} else {
		console.log(`Hello, ${name}`)
	}
}
greetOptional('İbrahim')

// default parameters
function defaultOptional(name: string, age: number = 25){
	console.log(`Hello, ${name}! You are ${age} years old.`)
}
defaultOptional('İbrahim')

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
function addAll1(...nums: number[]): number {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    if (currentNum !== undefined) {
      result += currentNum
    }
  }
  return result
}

// Second Method
function addAll2(...nums: number[]): number {
  let result = 0
  for (const num of nums) {
    result += num
  }
  return result
}

// Arrow expression
const addWithArrow = (num1: number, num2: number): number => num1 + num2
console.log(addWithArrow(15, 65))

// Function expression, Anonymous function
const add = function (num1: number, num2: number): number {
	return num1 + num2
}
console.log(add(15, 25))

// Function type void
function greet(name: string): void {
	console.log(`Hello, ${name}`)
}

function noReturnValue(): void {
	// this function doesen't return a value (implicity returns undefined)
}

// Function type never
function throwError(message: string): never {
	throw new Error(message)
}
try {
    throwError("Kritik bir hata oluştu!");
    // Bu satırın altındaki hiçbir kod (catch bloğu dışında) çalışmaz.
    console.log("Bu satır asla çalışmaz."); 
} catch (e) {
    if(e instanceof Error) {
      console.log(e.message)
    }else{
      console.log("Bilinmeyen bir hata yakalandı: ",e)
    }
}


function sonsuzDongu(): never {
  while (true) {
    console.log("Program sonsuza kadar çalışıyor...");
    // İşletim sistemi bu süreci durdurana kadar bu döngü kırılmaz.
  }
}

// Kullanım:
// let x = sonsuzDongu(); // Bu fonksiyonu çağırmak, tarayıcıyı/Node.js'i dondurabilir.


type Sekil = "kare" | "daire" | "üçgen";

function islemYap(sekil: Sekil): number {
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
      const _exhaustivenessCheck: never = sekil; 
      return 0; // Bir değer döndürülmeli.
  }
}


// Union types
let age: string | number
age =  "ten"
// Literal types
let developer: "Frontend" | "Backend" | "Fullstack"
// nullable types
let birth: string | null
// type alis
type optionText1 = String
let birthday: optionText1 = "June" 
type optionText2 = String | Number
let child: optionText2 = 10 

type Employee = {
  name: String,
  age: Number,
  email?: String
}

const Alice:Employee = {
  name: "Alice",
  age: 30,
  email: "alice@gmail.com"
}

const Bob:Employee = {
  name: "Bob",
  age: 25
}

// intersection types
type firstType = {
  name: String,
  age: Number
}
type secondType = {
  address: String,
  phone: String
}
type combinedType = firstType & secondType
const person: combinedType = {
  name: 'John Doe',
  age: 30,
  address: "123 Main St.",
  phone: '0123456789'
}

// annotating an array of strings
let fruits: string[] = ['apple', 'banana', 'cherry']

for (let i=0;i<fruits.length; i++) {
  console.log(fruits[i])
}

// type annotations with multidimensional array
let arrayOne: Number[] = [1,2,3,4,5]
let arrayTwo: String[] = ["One", "Two", "Three", "Four", "Five"]
let arrayThree: (string | number)[] = ["one", 1, "two", 2]

// defining a tuple type
let article: readonly [number, string, boolean] = [11, "Title One", true]

// assigning a new tuple value to the 'article' variable
article = [12, 'Title Two', false]

// trying to push a new element into a tuple (will result in an error)
// article.push(13)
// article.push(13, 'Title Three', true)

console.log(article)

// destructuring the tuple into individual variables
const [id, title, published] = article
console.log(id)
console.log(title)
console.log(published)

// enums
enum direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}

const playerDirection: direction = direction.Down
console.log(playerDirection)

enum statusCode {
  NotFound = 404,
  Success = 200,
  Unauthorized = 401,
  Accepted 
}
console.log(statusCode.Accepted)

// interface
interface PersonEx1 {
  name: string;
  age: number;
}
const John: PersonEx1 = {
  name: 'John',
  age: 30
}

// define an interface 'Person' with a method 'greet'
interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}
const sarah: PersonEx2 = {
  name: 'sarah',
  age: 30,
  greet(message) {
    console.log(`${this.name} says: ${message}`)
  }
}

sarah.greet("Hello TypeScript");

// homepage interface declaration
interface Settings {
  readonly theme: boolean;
  font: string;
}

// articles page interface reopening
interface Settings {
  sidebar: boolean;
}

// contact page interface reopening
interface Settings {
  external: boolean;
}

// create an object 'userSettings' that adheres to the merged 'settings' interface
let userSettings: Settings = {
  theme: true,
  font: 'Poppins',
  sidebar: true,
  external: true
}

// this example is for educational purposes, but it is not going to work.
const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "lesson image test";
if(imgElement.complete){
  console.log(`image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
}else{
  imgElement.addEventListener("load",() => {
    console.log(`image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
  });
}
/*
  PROPERTIES
  alt: a string representing the alternate text for the image.
  height: the height of the image in pixels
  src: the source URL of the image.
  width: the width of the image in pixels
  METHODS
  complete: a boolean value indicating whether the image has finished loading
  decode(): Promise<void>: a method that returns a promise and resolve once the image is decoded.
  naturalHeight: the intrinsic of the image in pixels
  naturalWidth: the intrinsic width of the image in pixels
*/

// declaration syntax
// interface
interface PersonExInterface {
  name: string;
  age: number;
}
// type
type PersonExType = {
  name: string;
  age: number;
}

// interface
interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("woof");
  }
}

// type
type AnimalExType = {
  type: string;
}

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("woof!");
  }
}

// compatibility:
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const aCar: Car = {
  brand: "Toyota",
  model: "Corolla"
}

// CLASS
class Product {
  id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number){
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo():string {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
  }
}

const product1 = new Product(1, "Widget", 20.0);
console.log(product1.getProductInfo());

// class access modifiers
class MyClassPublic {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const instancePublic = new MyClassPublic("alex");
console.log(instancePublic.name);


class MyClassPrivate {
  private secret: string;
  constructor(secret: string){
    this.secret = secret;
  }
  revealSecret() {
    console.log(this.secret);
  }
}

const instancePrivate = new MyClassPrivate('Top Secret İnfo');
// console.log(instance.secret); // ths would in an error because secret is private
instancePrivate.revealSecret(); // this is a valid way to access the private property


class Parent {
  protected familyName: string;

  constructor(name: string) {
    this.familyName = name;
  }
}

class Child extends Parent {
  introduceFamily() {
    console.log(`Our family name is ${this.familyName}`)
  }
}

const parentEx = new Parent("Adem");
const childEx = new Child("Mehmet");

// console.log(parent.familyName); // this wolud result in an error because familyName is protected
childEx.introduceFamily();


// class accessors
class ProductExAccessors {
  // private property
  private _price: number;
  constructor(private id: number, private name: string) {
    this._price = 0;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    if(newPrice >= 0) {
      this._price = newPrice;
    }else{
      console.log("Price cannot be negative");
    }
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this._price}`;
  }
}

const productEx = new ProductExAccessors(1, "Widget");
console.log(productEx.getProductInfo());
productEx.price = 20.0
console.log(productEx.getProductInfo());
productEx.price = -5;


// -
class ProductStaticMembers {
  private static nextId: number = 1;
  constructor(private id: number, private name: string) {}
  static generateNextId(): number {
    return ProductStaticMembers.nextId++;
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

const product1static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Widget"
);

const product2static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Gadget"
);

console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());


// class implement interface
class ProductImplementInterface {
  private static nextId: number = 1;
  constructor(private id:number, private name: string) {}
  static generateNextId(): number {
    return ProductImplementInterface.nextId++;
  }
  getProductInfo(): string {
    return `Id: ${this.id}, Name: ${this.name}`;
  }
}

const product1implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),
  "widget"
);

const product2implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),
  "Gadget"
);

console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());


// abstract class and members
abstract class AbstractItem {
  private static nextId: number = 1;

  constructor(public id: number, protected name: string) {}

  static generateNextId(): number {
    return AbstractItem.nextId++;
  }

  abstract getItemInfo(): string;
}

class Item extends AbstractItem {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getItemInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

console.log(item1.getItemInfo());
console.log(item2.getItemInfo());


// polymorphism and override
abstract class AbstractEntity {
  private static nextId: number = 1;
  protected constructor(public id: number, protected name: string) {}
  static generateNextId(): number{
    return AbstractEntity.nextId++;
  }
  abstract getEntityInfo(): string;
}

class Entity extends AbstractEntity {
  constructor(id: number, name: string){
    super(id, name);
  }
  getEntityInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}