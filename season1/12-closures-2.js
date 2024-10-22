function x(){
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 10000)
    console.log("Learning Javascript") //first this will print and then the value of i which is coming from setTimeout.
}

x(); /* output will be: Learning Javascript 1*/


// another scenario of printing numbers from 1 to 5 in each second
function z(){
    for(let i = 1; i<=5; i ++){
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
}
z();

// another scenario where you can't use the let keyword and have to use only var - use CLOSURES
function w(){
    for(var i = 1; i<=5; i++){
        function close(i){
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
w();



/*
    ------------NOTES------------------   
    Javascript waits for none. It will not wait at the setTimeout line no of code that why it prints the line no 6.

    line no 3 forms a closure and its takes the reference of i. This callback function is saved somewhere and attaches a timer of give ms. Once the timer expires it takes the function put it in call stack and runs it. thats how setTimeout works.
*/