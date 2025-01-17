// Demo of forEach loop and also understood variable shadowing

const number = [12,23,34,45,56,67,78,89];
number.forEach(function(number, index){
    console.log(`${number} ${index}`);
    console.log(number.length);
});

number.forEach(function(item){
    console.log(item);
    console.log(number.length);
});


function x(){
    console.log("hello");
}

function y(x){
    x();
}