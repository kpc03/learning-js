// Function Invocation & Variable Environment

var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

/* 
    output of this above program is
    10
    100
    1

    As per execution context - global context has set in which x value in first phase is undefined and then its 1. On line no 4 when function a() is called it will create new EC1 which will have its own x value undefined and then 10 and its printing on console so our first console output will be 10. Then this EC1 is being deleted from the call stack.

    Now on line no 5, b() function is called and it will go to line no 13 and another EC2 is created in call stack and in this x value is first undefined and then it sets to 100. Another output will be 100. After this, EC2 is also being deleted from call stack.

    Now on line no 6, the control is in now global execution context and the value there of x is 1 and hence 1 is logged out on console.
    
*/