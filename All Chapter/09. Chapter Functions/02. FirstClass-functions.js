//========== Frist Class Fuctions ========== 
function example(a, b) {
    return a + b;
}

// 1. A function store in variable

var storeVariable = example(2, 4);
console.log(storeVariable);
console.log(typeof storeVariable);


// 2. A function store in array

var storeArray = [];
storeArray.push(example);
console.log(storeArray);
console.log(storeArray[0](10, 10));

// 3. A function store in Object

var storeObject = {
    sum: example
}
console.log(storeObject);

console.log(storeObject.sum(34, 23))

// 4. Create function as need
setTimeout(() => {
    console.log('I have create function');
}, 3000);