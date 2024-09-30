var a = 10;
console.log(a);
console.log(window.a);
console.log(this.a);

console.log(this === window);
/*
    Shortest JS Program is the empty js file. 😀

    - If we don't even write anything in .js file, it stills create the global execution context and also created the window{}.
    - Its being created by the JS engine
    - JS engines also creates "this" variable which represents window{} only.
    
    WINDOW{} - window is actually a global object which is being created in GLOBAL EXECUTION CONTEXT.

    Every browser have its own JS engine, like:
    Chrome - V8
    Mozilla - SpiderMonkey
    Safari - JS core

    this === window // true

    GLOBAL SPACE - Its a space where variable & functions are created which are not a part of any other function. These variable & functions are attached to window{} object.
*/