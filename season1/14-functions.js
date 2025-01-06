//* Function Statement & Function Declarations are same
function a(){
    console.log('a called');
}
a();
/* 
    Function statements can never use anonymous functions
*/ 


//* Function Expression
var b = function (){
    console.log('b called');
}
/*
    The difference between function statement & function expression is of hoisting. If I call function a() before even defining the function it will print whatever the function is returning but if I call b() which is function expression before its defined then it will throw typeError and says b is not an function.

    Why its stating the b() is not a function - because right now on its a variable which is undefined and not yet a function until it reached line no 8;

    They can use anonymous functions.
*/

//* Anonymous Functions
var c = function () { //without name function is anonymous function
    console.log('c called');
}
/*
    function without a name is called anonymous function.
    it doesn't have its own identity.
    function (){} - this will throw syntax error as its mandatory to give names to function as per ECMA script.
    Anonymous functions are used where functions can be used as values.
*/

//* Named Function Expression

