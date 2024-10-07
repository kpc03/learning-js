    let b = 20+1; // separate space inside SCRIPT
    const c = 30+2; // separate space inside SCRIPT

{
    var a = 10;
    let b = 20;  //separate space inside BLOCK
    const c = 30;  //separate space inside BLOCK
    console.log(a);
    console.log(b);
    console.log(c);
}
    console.log(a);
    console.log(b);
    console.log(c);

    let x = 10;
    {
        let x = 20;
        {
            // let x = 30; // so if I comment this so it will find for a variable in its lexical parent which is outside this 19 no line scope and the value is 20.
            console.log('x', x);
        }
        console.log('x', x);
    }
    console.log('x', x);


/*
    Blocks - Blocks are defined by {} its a valid JS code. Blocks are also known as COMPOUND STATEMENTS. Its like combining multiple JS statement in one set of block. Grouping together multiple statements inside {} and can be used where single statement is required.

    -------------------------------------------------

    Block Scope - what all variables and functions inside any block {}.

    b and variable c are now in BLOCK scope in SCOPE tab on browser.

    and if we try to console outside the curly braces - let n const variables will throw reference error that its not defined.

    Block scope also follows lexical scope.

    -------------------------------------------------

    Shadowing - its a situation in which a variable in outer scope and a variable in inner scope has same name.

    let a = 10;
    {
        let a = 20;
    }
    so here inside block scope a is shadowing the outer scope variable a without changing its value.

    Its basically used to understand the scope and also it has no effect on outer variable so same name can be used.

    It also work same for the case of function block.

    Illegal Shadowing - You can't shadow the let variable with var.

    -------------------------------------------------

    Lexical scope also works the same in block scope as well.

    let a = 10;
    {
        let a = 20;
        {
            let a = 30;
            console.log(a);
        }
        console.log(a);
    }
    console.log(a);

    -------------------------------------------------

    
*/