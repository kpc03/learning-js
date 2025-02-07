// Easy to debug
// easy to test
// good for better performance by using react.memo - caching
// used in functional programming - react & redux

// Pure Function = Predictable + No side effects;

function multiply(param1, param2){
    return param1 * param2;
}
console.log(multiply(10, 20));
console.log(multiply(11, 22));

// Pure functions are the functions which always gives the same result for the same input.
function makeBlackCoffee() {
    return "Black Coffee";
}
console.log(makeBlackCoffee());

// Impure functions are those which actually update the outer variable.
let sugarLevel = 0;

function makeRandomCoffee() {
    sugarLevel += 1;
    return `Black Coffee with ${sugarLevel} sugar packets`;
}

console.log(makeRandomCoffee()); 
console.log(makeRandomCoffee()); 

