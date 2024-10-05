function a() {
    var b = 10;
    be();
    function be() {
        console.log(b);
    }
    
}
// var b = 20; // can we access this variable in function a()
a();

const img1 = document.createElement("img");
img1.src = "../demo-images/closure.png"
img1.height = 300;

const img2 = document.createElement("img");
img2.src = "../demo-images/lexical-env.png"
img2.height = 300;

const container = document.getElementById("container");
container.appendChild(img1);
container.appendChild(img2);

/*
    scope in JS is directly related to LEXICAL ENVIRONMENT. Once we understand Lexical Env, it will be easy to understand scope, scope chain and closures also.

    ABOVE EXAMPLE - Explanation
    When we console.log b variable in a(), it will find the variable in local env of function a(). What will print - undefined or not defined but when the code is executed it prints 20. HOW?
    ANS - 

    Another scenario - if we declare & initialize the variable b inside any function and console it outside the function then it will throw error of not defined.

    SCOPE - It means where you can access variable and functions in our code. 2 aspects to it. 
    1. What is the scope of variable b?
    2. Is b inside the scope of function be()?

    when we run the program, global execution context is created in call stack, where in memory function a() will be there, function a() is invoked and another Execution context is created and in that same EC1 of function a() variable b and function be() will be there in memory part. Then EC2 is created for function be() but there is nothing to return and reserve space so it will be empty.

    LEXICAL ENV - Wherever an Execution Context is created, a Lexical Environment is also created. Lexical environment is a combination of local memory + the lexical environment of its parent.

    eg: be() Lexical Env = Local Memory + Lexical Env of function a();

    Lexical terms means in hierarchy, in order to. Where the code is physically present in the code. like be() is present in a().

    JS engine finds the variable first in the local env, and if its not present in the local env then it will go to lexical env of its parent.

    be() lexical parent is a() and a() lexical parent is global context.

    Scope Chain - Its the way of finding variables first in local memory and then in the lexical env of its parent and it goes on till JS engine finds nothing for that variable or a value for that variable. This method of finding variables in different lexical env is called scope chain.

    Demo of scope in browser.

    closure in demo in be() - little example of closure where be() is enclosed inside a(). be() has access to lexical env and scope of a(). 
*/