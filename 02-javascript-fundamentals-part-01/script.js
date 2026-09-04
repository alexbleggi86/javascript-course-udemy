// 01. values and variables

// - value - the most fundamental unit of information we have in programming
// - variable - a container to store a value

// - declaring a variable named 'firstName' and assigning to it the value of 'John'
// let firstName = "John";

// - variable naming conventions:

// - can only contain numbers, letters, underscore or dollar sign
// - cannot start with a number
// - cannot contain reserved keywords
// - should use camelCase (convention)
// - should not start with capital letter (convention)
// - should be descriptive (convention)

//////////////////////////////////////////////////

// 02. data types

// - the value holds a data type
// - the variable stores a value which holds a data type
// - javascript has a dynamic data typing, it automatically determines the data type of a value when it is stored in a variable

// - number, string and boolean:

// console.log(typeof true); // result: boolean
// console.log(typeof 25); // result: number
// console.log(typeof "true"); // result: string

// - undefined

// undefined is both the value and the type.

// let firstName;
// console.log(firstName); // result: undefined
// console.log(typeof firstName); // result: undefined

// - null

// null is both the value and the type.
// let firstName = null;
// console.log(firstName); // result: undefined
// console.log(typeof firstName); // result: Object (bug in the language)

// - dynamic typing

// let javascript = true;
// console.log(typeof javascript); // result: boolean

// javascript = 'true';
// console.log(typeof javascript); // result: string

//////////////////////////////////////////////////

// 03. let, const and var

// - let

// let number = 25;
// number = 26;

// 'let' may not be initialized with a value
// let number2;
// number2 = 26;

// - const

// 'const' cannot be mutated
// const number = 25;
// number = 26; // error

// 'const' must be initialized with a value
// const number2; // error

// - var

// should be avoided in ES6
// javascript will create the variable in the global object
// var number = 25;
// number = 26;

//////////////////////////////////////////////////

// 04. strings and template literals

// - strings

// const firstName = 'John';
// const job = 'teacher';
// const birthYear = 1990;
// const currentYear = 2035;

// const john = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
// console.log(john); // result: "I'm John, a 45 years old teacher!""

// console.log('String with \n\
// multiple \n\
// lines');

// result:
// 'String with
// multiple
// lines'

// - template literals

// const firstName = 'John';
// const job = 'teacher';
// const birthYear = 1990;
// const currentYear = 2035;

// const john = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
// console.log(john); // result: "I'm John, a 45 years old teacher!""

// console.log(`
// String with
// multiple
// lines
// `);

// result:
// 'String with
// multiple
// lines'

//////////////////////////////////////////////////

// 05. taking decisions: if / else Statements

// const age = 15;

// if (age >= 18) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// result: 'false'

//////////////////////////////////////////////////

// 06. type conversion and coercion

// - type conversion - when a type is explicitly converted

// const number = '25';
// console.log(Number(number), number); // result: 25 '25'
// console.log(Number(number) + 5); // result: 30
// console.log(Number('John')); // result: NaN (nota a number: whenever a operation fails to produce a new number)
// console.log(typeof NaN); // result: number
//console.log(String(25), 25); // result: '25' 25

// - type coercion - when javascript automatically convert types
// it happens whenever an operator is dealing with values that have different types.

// console.log('Number ' + '25'); // result: 'Number 25'
// console.log('Number ' + 25); // result: 'Number 25' (+ operator triggers String coercion)
// console.log(`Number ${25}`); // result: 'Number 25' (template literals triggers String coercion)
// console.log('25' - '10' - 3); // result: 12 (mathematical operators other than the + operator, trigger Number coercion)
// console.log('25' > '1'); // result: true (comparison operators trigger Boolean coercion)
