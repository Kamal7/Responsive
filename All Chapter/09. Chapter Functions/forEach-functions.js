// var arr = ['a', 'b', 'c'];
// arr.forEach(function callback(currentValue, [index], [array]) {}, [thisArg]);
// Step 01
var arr = [3, 4, 5, 6];
arr.forEach(function (value, index, arr) {
    console.log(value, index, arr);
});
// Step 02
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
    console.log(arr[index] = item * 10);
}
// Step 03
var sum = [1, 2, 3, 4, 5];
sum.forEach(function (value, index, arrs) {
    value;
    index;
    arrs;
});
// Step 04
var add = [1, 2, 3, 4, 5];
var sums = 0;
add.forEach(function (value, index, arrs) {
    sums += value;
});
console.log(sums);

// Step 05 forEach Details
var arrays = [1, 2, 3];
function forEachs(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
forEachs(arrays);


// Callback just value 
var arrys = [1, 2, 3, 4, 5, 6];
function foreaches(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        cb(arr[i])

    }
}
sums = 0;
foreaches(arrys, function (parms) {
    console.log(parms);
    sums += parms
})
console.log(sums);

// Callback function 
function forEach(arrs, callback) {
    for (var i = 0; i < arrs.length; i++) {
        callback(arrs[i], i, arrs);
    }
}
var sum = 0;
forEach(arrays, function (value, index, arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
    sum += value;
    console.log(arrays[index]);
    console.log(arrays[index] = value + 5);
});
sum;