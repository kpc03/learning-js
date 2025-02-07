// sum(1,3,4,5,5,10,100) 

function sum(...param){
    let totalSum = 0;
    console.log(param);
    for(let i = 0; i<param.length; i++){
        totalSum = totalSum + param[i];
    }
    return totalSum;
}
console.log(sum(2,4,5));

function sum(...params){
    let totalSum = 0;
    totalSum = params.reduce((acc, curr) => acc + curr, 0);
    return totalSum;
}
console.log(sum(21,32,43));






