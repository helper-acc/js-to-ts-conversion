// Line 1-10: Basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Line 11-20: String manipulation functions
function toUpperCase(str) {
  return str.toUpperCase();
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Line 21-30: Array handling functions
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// Line 31-40: Boolean operations
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isPositive(num) {
  return num > 0;
}

// Line 41-50: Object handling
const person = {
  name: "John",
  age: 30,
  isStudent: false
};

function getPersonInfo(person) {
  return `Name: ${person.name}, Age: ${person.age}, Is student: ${person.isStudent}`;
}

// Line 51-70: Loop examples
for (let i = 1; i <= 10; i++) {
  console.log("Number: " + i);
}

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log("Array item: " + arr[i]);
}

// Line 71-80: Conditional example
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Line 81-90: Recursion example
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Line 91-100: Map, filter, reduce example
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Line 101-120: More array methods
const names = ["Alice", "Bob", "Charlie", "David"];
const upperCaseNames = names.map(name => name.toUpperCase());

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split('').filter(char => vowels.includes(char)).length;
}

console.log("Vowels in 'hello': " + countVowels("hello"));

// Line 121-140: Working with dates
const today = new Date();
console.log("Today's date: " + today);

function getFormattedDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

console.log("Formatted date: " + getFormattedDate(today));

// Line 141-160: Simple class example
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar.getCarInfo());

class Human {
  constructor(name, height, weight, age) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.age = age;
  }
//Getters
get name(){
    return name;
}
get age(){
    return age;
}
get height(){
    return height;
}
get weight(){
    return weight;
}
//Setters
set name(name){
    this._name = name;
}
set age(age){
    this._age = age;
}
set height(height){
    this._height = height;
}
set weight(weight){
    this._weight = weight;
}
  getHumanData() {
    return `${this.name} ${this.age} ${this.height} ${this.weight}`;
  }
}

const student = new Human("Jason",22,183,77);
const student2 = new Human("Denis",21,175,63);

let students = [];
students.push(student);
students.push(student2);

console.log(students);

// Line 161-180: Handling promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Fetched data from ${url}`);
    }, 1000);
  });
}

fetchData("https://example.com").then(data => console.log(data));
