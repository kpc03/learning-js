// Any function which takes another function as argument or returns any function is called HIGHER ORDER FUNCTION.

// example
function a(){ //a is a callback function
    console.log("hello");
}
function b(a){ //here b is a higher order function
    a();
}

// Traditional to Modular coding example by taking out area, circumference and diameter from radius of multiple values in an array.
const radius = [3, 2, 4, 6];

// for area calculation
const calculateArea = function(radius){
    const output = [];
    radius.forEach(element => {
        output.push(Math.PI * element * element);
    });
    return output
}
console.log(calculateArea(radius));

// for circumference calculation
const calculateCircumference = function(radius){
    const output = [];
    radius.forEach(element => {
        output.push(2 * Math.PI * element);
    });
    return output
}
console.log(calculateCircumference(radius));

// for diameter calculation
const calculateDiameter = function(radius){
    const output = [];
    radius.forEach(element => {
        output.push(2 * element);
    });
    return output
}
console.log(calculateDiameter(radius));

/* THE ISSUE IN THE ABOVE CODE IS SO MUCH REPETITION OF OUTPUT[] AND FOREACH LOOP WHICH IS AGAINST THE PRINCIPLE OF DRY(DON'T REPEAT YOURSELF) 
SOLUTION IS FUNCTIONAL PROGRAMMING BY CREATING A HIGHER ORDER FUNCTION
*/

// OPTIMIZED SOLUTION
const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

const calculate = function(arr, logic){ //HIGHER ORDER FUNCTION
    const output = [];
    arr.forEach(element => {
        output.push(logic(element));
    });
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log('Printing through map function - ', radius.map(area));

// AKSHAY ALSO EXPLAINED THAT LINE NO 61-67 ACTUALLY WORKED SAME AS .MAP() WHERE IT TRAVERSE THE ARRAY AND RETURNS THE ARRAY.

console.log(Array.prototype);





