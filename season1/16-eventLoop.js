// Web Apis and its methods
// Browser
// Event loop
// callback queue / task queue
// registering a callback
// fetch
// promises and mutation observer
// microtask queue
// starvation of the task inside callback queue



// This shows the concept of how we are using web APIs like setTimeout and also shows that JS engine is using WEB apis provided by browser.
console.log("Start");

setTimeout(function cb(){
    console.log('callback');
}, 5000);

console.log("End");