// interview question is - write a function for sum(2)(9)(8)
function sum(x){
    return function(y){
        return function(z){
            var add = x + y + z;
            console.log(add);
        }
    }
}

// example of closure in episode 14
function a(x){
    let i = 10; //if we move this a on line number 18 then what will happen? It will simply print the value of 'i' which is 10 because the variable has already assigned the memory in execution context. And its still in function a() and b() has access to the lexical environment of a().
    function b(){
        console.log(i, x);
    }
    return b;
}
var test = a("hello");
test(); //another way of calling closures

a("TEST B")(); //different way of calling closure function in single line.


// example of data hiding and encapsulation
function counter1(){
    var count = 0; //this variable is hidden inside counter() function which can be accessed without calling the function.
    return function incrementCounter(){
        count++; //closure with variable count
        console.log(count);
    }
}

counter1()();
counter1()();

function counter2(){
    var count = 10; //this variable is hidden inside counter() function which can be accessed without calling the function.
    return function incrementCounter(){
        count++; //closure with variable count
        console.log(count);
    }
}

var test = counter2();
test();
test();

/* These both above code print 1 1 and 11 12 why there is difference - because in counter1 we are directly calling the function and which start from the value 0 always. but in counter 2 the value is getting stored in variable test and when we are calling it again its referring to the oldest value in the variable and not the starting value. */


// another example of constructor function
function CounterVal(){
    var count = 50;
    this.incrementCounter = function() { //constructor function
        count++;
        console.log(count);
    }
    this.decrementCounter = function() { //constructor function
        count --;
        console.log(count);
    }
}

var counter1 = new CounterVal();
counter1.incrementCounter();
counter1.decrementCounter();
