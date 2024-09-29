// HOISTING & CALL STACK DEMO

console.log(n); //undefined because in execution context the value is set undefines in 1st phase.
// console.log(x); // can't access before initialisation because let is also hoisted but not initialised as undefined.

var n = 2;
const x = 29;

console.log(n);

function square(num){ //here num is parameter
    var ans = num * num;
    return ans;

}
var square2 = square(n); //here n is an arugument
var square4 = square(4);

console.log(square2);

/*
CALL STACK DEMO in browser which show how the global context is created in call stack and then the function square comes in and once it is executed it gets popped out from the call stack and then global stack. We can check it using putting breakpoints on the source file we have.
*/

// arrow function acts as variable so when its is called before initialisation - its value will also be undefined.