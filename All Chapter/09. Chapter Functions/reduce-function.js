// 01. Step
// var array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];
// var result = array.reduce(function (prev, current) {
//     return prev + current;
// });
// console.log(result);

// 02. Step
// var max = array.reduce(function (prev, current) {
//     return Math.max(prev, current);
// });
// console.log(max);

// 03. Step
// var min = array.reduce(function (prev, current) {
//     return Math.min(prev, current);
// });
// console.log(min);



// Implementing reduce 
var arrays = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function reducer(arrays, callback, increase) {
    for (var i = 0; i < arrays.length; i++) {
        increase = callback(increase, arrays[i]);
    }
    return increase;
}
var sums = reducer(arrays, function (prev, currt) {
    return prev + currt;
}, arrays[0]);
console.log(sums);

var max = reducer(arrays, function (prev, currt) {
    return Math.max(prev, currt);
}, arrays[0]);
console.log(max);

var min = reducer(arrays, function (prev, currt) {
    return Math.min(prev, currt);
}, arrays[0]);
console.log(min);