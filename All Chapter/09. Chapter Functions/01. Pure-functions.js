// type or function
// 1. Pure function
// 2. First class function 
// 3. Higher order function


// =============== 1. Pure function ===============
// 1. Returns always the same result if given the same parameters
// 2. Its execution doesn’ t depend on the state of the system.

// Pure function
function pureFuntion(argmt) {
    return argmt * argmt;
}
console.log(pureFuntion(2));
console.log(pureFuntion(3));
console.log(pureFuntion(5));


var product = 10;
function getProduct() {
    product = 100;
    console.log(product);
}
getProduct();

console.log(product);


// Object 
var product = {
    computer: 30000,
    ram: 2000,
    hardisk: 3000
}
console.log(product.computer);
// Normal function and not a pure function
function NanPureFunction(product) {
    product.computer = 100;
    product.ram = 200;
    product.hardisk = 1000;
    console.log(product);
}
console.log(NanPureFunction(product));
console.log(product.computer);

console.log(product);