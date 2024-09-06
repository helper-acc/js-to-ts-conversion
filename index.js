// Line 1-10: Basic math functions
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {string|number}
 */
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Line 11-20: String manipulation functions
/**
 * @param {string} str
 * @returns {string}
 */
function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * @param {string} str
 * @returns {string}
 */
function toLowerCase(str) {
  return str.toLowerCase();
}

/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Line 21-30: Array handling functions
/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  return Math.max(...arr);
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMin(arr) {
  return Math.min(...arr);
}

// Line 31-40: Boolean operations
/**
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isOdd(num) {
  return num % 2 !== 0;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPositive(num) {
  return num > 0;
}

// Line 41-50: Object handling
/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 * @property {boolean} isStudent
 */

/** @type {Person} */
const person = {
  name: "John",
  age: 30,
  isStudent: false
};

/**
 * @param {Person} person
 * @returns {string}
 */
function getPersonInfo(person) {
  return `Name: ${person.name}, Age: ${person.age}, Is student: ${person.isStudent}`;
}

// Line 51-70: Loop examples
for (let i = 1; i <= 10; i++) {
  console.log("Number: " + i);
}

/** @type {number[]} */
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log("Array item: " + arr[i]);
}

// Line 71-80: Conditional example
/**
 * @param {number} num
 * @returns {string}
 */
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
/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Line 91-100: Map, filter, reduce example
/** @type {number[]} */
const numbers = [1, 2, 3, 4, 5];
/** @type {number[]} */
const squaredNumbers = numbers.map(num => num * num);
/** @type {number[]} */
const evenNumbers = numbers.filter(num => num % 2 === 0);
/** @type {number} */
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Line 101-120: More array methods
/** @type {string[]} */
const names = ["Alice", "Bob", "Charlie", "David"];
/** @type {string[]} */
const upperCaseNames = names.map(name => name.toUpperCase());

/**
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split('').filter(char => vowels.includes(char)).length;
}

console.log("Vowels in 'hello': " + countVowels("hello"));

// Line 121-140: Working with dates
/** @type {Date} */
const today = new Date();
console.log("Today's date: " + today);

/**
 * @param {Date} date
 * @returns {string}
 */
function getFormattedDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

console.log("Formatted date: " + getFormattedDate(today));

// Line 141-160: Simple class example
class Car {
  /**
   * @param {string} make
   * @param {string} model
   * @param {number} year
   */
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /**
   * @returns {string}
   */
  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar.getCarInfo());

class Human {
  /**
   * @param {string} name
   * @param {number} height
   * @param {number} weight
   * @param {number} age
   */
  constructor(name, height, weight, age) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get weight() {
    return this._weight;
  }

  set name(name) {
    this._name = name;
  }

  set age(age) {
    this._age = age;
  }

  set height(height) {
    this._height = height;
  }

  set weight(weight) {
    this._weight = weight;
  }

  /**
   * @returns {string}
   */
  getHumanData() {
    return `${this.name} ${this.age} ${this.height} ${this.weight}`;
  }
}

const student = new Human("Jason", 22, 183, 77);
const student2 = new Human("Denis", 21, 175, 63);

let students = [];
students.push(student);
students.push(student2);

console.log(students);

// Line 161-180: Handling promises
/**
 * @param {string} url
 * @returns {Promise<string>}
 */
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Fetched data from ${url}`);
    }, 1000);
  });
}

fetchData("https://example.com").then(data => console.log(data));
