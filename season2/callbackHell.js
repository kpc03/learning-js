// Callback hell is a situation where one callback is inside another callback and so on. This situation is also called pyramid od doom. It makes the code difficult to debug and read.

// example - suppose in an e-commerce website there is cart

const cart = ["pants", "skirts", "shirts"];

createOrder(cart, function(orderId){
    proceedToPayments(orderId, function(){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        })
    })
});

// The above example shows the problem of callback hell which makes the code horizontally log and not easy to debug. There will be many open ended cases to write the code above way.
// Inversion of Control



