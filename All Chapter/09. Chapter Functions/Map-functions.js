// ========== Map ========== 

var arr = [1, 2, 3]
var returnArr = arr.map(function (value) {
    return 3;
})
console.log(returnArr);

arrays = [];
arrays.map(function (value, index, arr) { });

arr = [1, 2, 3];
var result = arr.map(function (params) {
    console.log(params);
    console.log(params * params);
    return Math.random() * 100;

});
console.log(result);

// pure function and return square value
// 01. Step 
function map(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var assigns = arr[i] * arr[i];
        console.log(assigns);
        newArr.push(assigns);
    }
    return newArr;
}
console.log(map(arr));

// 02. Step 
function maps(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var assigns = callback(arr[i], i, arr);
        console.log(assigns);
        newArr.push(assigns);
    }
    return newArr;
}
console.log(maps(arr, function (value) {
    return value * value * value;
}));
console.log(maps(arr, function (value) {
    return value * 10;
}));