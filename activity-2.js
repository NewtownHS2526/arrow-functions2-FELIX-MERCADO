// Activity 2: Functions with Single Parameter to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
function greet(name) {
    return "Hello, " + name + "!";
}
// Convert to arrow function:

const greet = (name) => {
    return "Hello, " + name + "!";
}

// Problem 2
function square(number) {
    return number * number;
}
// Convert to arrow function:

const square = (number) => {
    return number * number;
}

// Problem 3
function double(value) {
    return value * 2;
}
// Convert to arrow function:

const double = (value) => {
    return value * 2;
}

// Problem 4
function isEven(num) {
    return num % 2 === 0;
}
// Convert to arrow function:

const isEven = (num) => {
    return num % 2 === 0;
}

// Problem 5
function capitalize(str) {
    return str.toUpperCase();
}
// Convert to arrow function:

const capitalize = (str) => {
    return str.toUpperCase();
}

// Problem 6
function getLength(text) {
    return text.length;
}
// Convert to arrow function:

const getLength = (text) => {
    return text.length;
}

// Problem 7
function addOne(x) {
    return x + 1;
}
// Convert to arrow function:

const addOne = (x) => {
    return x + 1;
}

// Problem 8
function isPositive(n) {
    return n > 0;
}
// Convert to arrow function:

const isPositive = (n) => {
    return n > 0;
}

// Problem 9
function reverseString(s) {
    return s.split("").reverse().join("");
}
// Convert to arrow function:

const reverseString = (s) => {
    return s.split("").reverse().join("");
}

// Problem 10
function getType(value) {
    return typeof value;
}
// Convert to arrow function:

const getType = (value) => {
    return typeof value;
}