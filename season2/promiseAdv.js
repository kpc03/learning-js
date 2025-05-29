// taking example of cart from an ecommerce store
const cart = ["shirt", "top", "pants", "cap"];

const promise = createOrder(cart);

promise.then(function (orderId){ //attaching a callback function to the promise.
    console.log(orderId);
});

function createOrder(cart){
    // creating new promise constructor
    const pr = new Promise(function(resolve, reject){
        // whole logic of create order
        // create order
        // validate cart
        // get order Id
        if(!validateCart(cart)){
            const err = new Error("The cart is not valid");
            reject(err);
        }
        // logic for createOrder - getting orderId from db
        const orderId = 12345;
        if(orderId){
            resolve(orderId);
        }
    })
    return pr;
}

function validateCart(orderId){
    return true;
}