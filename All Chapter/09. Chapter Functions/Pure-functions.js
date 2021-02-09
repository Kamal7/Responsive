// type or function
// 1. Pure function
// 2. First class function 
// 3. Higher order function


// =============== 1. Pure function ===============
// 1. always returns the same result given same parameters
// 2. Its execution doesn’ t depend on the state of the system.

var n = 10;
function sqr() {
    return n * n;
}
sqr();
console.log(sqr());


// Object 
var product = {
    computer: 30.000,
    ram: 2000,
    hardisk: 3000
}

// Normal function 
function NanPureFunction(product) {
    product.computer = 100;
    product.ram = 200;
    product.hardisk = 1000;
    console.log(product);
}
console.log(NanPureFunction(product));
console.log(product);