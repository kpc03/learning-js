// Promise is an OBJECT which represents the EVENTUAL completion or failure from an asynchronous operation.
/* Promises has 3 states:
    - Pending
    - Fulfilled
    - Rejected
*/
// Promise is a constructor function 
// Promise gives trust and guarantee - because you can resolve promise just once and only 3 states are there. 
// Promises are immutable - that means the result cant be changes and can only be used only.



const promise = new Promise(() => {});
console.log(promise);

/* When you console it -
    - Prototype
    - PromiseStates
    - PromiseResult
*/

// The problem with callback hell can be resolved using Promises.
// example

createOrder(cart)
.then(function(){
    proceedToPayments(orderId)
})
.then(function(){
    showOrderSummary(paymentInfo)
})
.then(function(){
    updateWalletBalance();
})

// Promise Chaining - we have to always return the promise inside promise chain otherwise will loose some data.
// Above example is Promise Chain



