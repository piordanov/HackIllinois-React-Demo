// listing out es6 features of javascript

let variable = 9; // this is a number I can change this however I want
variable = 10;
variable = 'string';

const constant = 9; // cannot be set to a new object

// template literals
let tl = ` 3 + 7 === ${3 + 7}`;

// rest spread operator

let obj = {
    x : 3,
    y: 4,
    z: 5
};

let { x, y, z } = obj; // spread values x, y, z to varX, varY, varZ, respectively


let f = (x, y, ...rest) => { // rest parameter represents an indefinite number of arguments as an array
    return (x + y) * a.length;
}

f(1,2,3,4,5,6); // === (1 + 2) * [3,4,5,6].length

function sum(x,y,z) {
    return x + y + z;
}
const numbers = [3,4,5]
sum(...numbers) // === 6


// arrow functions: just different syntax for writing function

function originalJSFunction(x, y) {
    return x + y;
}

let arrowFunction = (x, y) => x + y;
//OR 
let arrFunction = (x,y) => {
    return x + y;
}
// much clearer syntax

// we can do things like return functions
let applyAdd = (x) => {
    return (y) => x + y; 
}

applyAdd(3)(4) // === 7

// map creates a new array with the results of calling a provided function on every element in the calling array.
let doubledArray = [1,2,3].map((value, index) => value*2); // === [2,4,6]

// Returns the elements of an array that meet the condition specified in a callback function.
let gre2Array = [1,2,3].filter((value, index) => value >= 2); // === [2,3]

// reduce applies a function against an accumulator and each element of an array, left to right
let sum = [1,2,3].reduce((accumulator, currentValue) => accumulator + currentValue) // 1 + 2 + 3 === 6

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);
console.log(square.area());