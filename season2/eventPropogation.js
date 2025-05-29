// container div is parent and button inside its child. We will see both event capturing and bubbling through examples.

// Capturing - Top -> Target
document.querySelector('#container').addEventListener('click', ()=>{
    console.log('container parent div called - capturing');
}, true);

document.querySelector('#clickMe').addEventListener('click', ()=>{
    console.log('button child called - capturing');
}, true); 

// Bubbling - Target -> Top
document.querySelector('#container').addEventListener('click', ()=>{
    console.log('container parent div called');
}); 

document.querySelector('#clickMe').addEventListener('click', ()=>{
    console.log('button child called');
}); 