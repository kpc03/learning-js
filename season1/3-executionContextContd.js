var n = 2;
function square(num){ //here num is parameter
    var ans = num * num;
    return ans;
}

var square2 = square(n); //here n is an arugument
var square4 = square(4);

/* 2 phases are there when execution context is created 
    1. Memory Creation Phase
    2. Code Execution Phase

    In first phase JS engine will allocate space in memory to all the variables and functions.

    now, lets take an above example

    ---------------------------------
    | MEMORY      |     CODE        |
    ---------------------------------
    n: undefined
    square: {}
    square2: undefined
    square4: undefined

    In phase 2 the value 2 is assigned to varible n and then it will move to fucntion invocation.
*/

/* 
    FUNCTION INVOCATION - When you see function name with these paranthesis it means the function is executed.
    Whenever a new function is involed a new EXECUTION CONTEXT is created.
*/

/* 
    return keyword states that now the function is returning the control back to execution context.

    When the whole fucntion is executed - the execution context related to that particular function will be deleted.
*/

/*
    CALL STACK - In JS engine call stack is a place where the execution context creation, updation and deletion happens. On first place global EC stays & when a function is invoked EC1 is created and when the execution is done EC1 is popped out from the call stack and so on with other function and one time with global EC.

    Call stack is also called by other names and which are:
    - call stack
    - execution context stack
    - program stack
    - control stack
    - runtime stack
    - machine stack

    CALL STACK also maintains the "order of execution of EXECUTION CONTEXT"
*/