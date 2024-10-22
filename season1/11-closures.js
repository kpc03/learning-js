// function x(){
//     var a = 3;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);

// z();


function outer() {
    var x = 10;
    function inner() {
        var y = 5;
        console.log(x+y);
        x = 20;
    }
    return inner;
}
    
var innerFunc = outer();
innerFunc();
innerFunc();