
a = 10;
console.log(a);
var b = 20;

img1 = document.createElement('img');
img1.src="../demo-images/tdz.png";
img1.height= "500";

img2 = document.createElement('img');
img2.src="../demo-images/reference-error.png";
img2.height= "500";
img2.style.marginLeft= "20px";

const container = document.getElementById("container");
container.appendChild(img1);
container.appendChild(img2);

/*
    How to know whether let variable is hoisted or not?
    - In browser we saw that SCRIPT and GLOBAL in scope window and a is undefined so that means memory is allocated.

    so in the above code we can console the variable b before initializing it because of hoisting and the memory is allocated to it in GLOBAL scope and initial value is undefined but in case of variable a its not in GLOBAL space - let and const variable have different space inside SCRIPT. a is assigned this kind of value where its mentioned <value unavailable> in it and we can't access let and const variables without initializing them.

    error which comes is REFERENCE ERROR.

    let and const have separate memory space.

    ---------------------------------------------

    Temporal Dead Zone - its the time since when the let and const variable are hoisted till they are being initialized(until some value is assigned to these variables). Time between hoisting and initialization.

    Until and unless a variable is DECLARED or INITIALIZED it stays in TDZ in case of let and const.

    ---------------------------------------------

    Whenever you try to access any variable which is TEMPORAL DEAD ZONE - JS engine throws you a reference error.

    ---------------------------------------------

    let and const are more strict than var
    you can't reassign a value to let and const and then syntax error comes. Then JS engine will not run the program.

    In const variables, initialization is expected where u r declaring the variable. else it will throw the syntax error of "missing initializer in const declaration".

    ---------------------------------------------

    Syntax Error - These are those errors which are not correct as per the grammar of Javascript or you can the rules of JS.
    eg: If I type const b; it will give syntax error because as per JS const variable should be initialized when we are declaring it.
    
    Reference Error - When JS tries to fetch any variable and its not present in the code or else not yet available then it will this error.
    eg: if I console.log(a) before initializing it and considering its let variable then it will throw reference error as it is in TDZ.

    Type Error - These error comes when you try to call something which is not it type.
    eg: let num = 5;
    num(); // Type error as num is variable not a function.
    
    ---------------------------------------------

    - use let and const mostly.
    - always put the declaration and initialization at the top of the code. Its also called shrinking the TDZ and reduce the unwanted errors.

*/  