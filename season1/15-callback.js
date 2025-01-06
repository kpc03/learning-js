// Callback Functions
setTimeout(function (){ console.log("timer after 5s") }, 5000);

function x(y){ //y is a parameter which is type function and it returns function if we console it else it prints y the string.
    console.log("x");
    console.log(y);
    console.log(typeof(y));
}

x(function y(){ //function y() is passed here as an argument to the x() which is called FIRST CLASS FUNCTIONS.
    console.log("y");
});

// Event Listeners
document.getElementById("clickMe")
.addEventListener("click", function xyz(){
    console.log("Button Clicked");
})
/* 
    -function xyz() is a callback function and here we added an event listener click on the element which has "clickMe" id.
*/

// Event Listeners inside a closure
function handleEvent(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked", ++count);
    })
}
handleEvent(); 


// Remove event listeners and garbage collector

