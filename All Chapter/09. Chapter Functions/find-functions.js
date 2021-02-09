var arrays = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];
// 01. Step 
var aoo = arrays.find(function (value) {
    return value === 9;
});
console.log(aoo);
// 02. Step 
var boo = arrays.findIndex(function (value) {
    return value === 9;
});
console.log(boo);


// Implementing Find 
function find(arrays, callback) {
    for (var i = 0; i < arrays.length; i++) {
        if (callback(arrays[i])) {
            return arrays[i];
        }
    }
}
var finds = find(arrays, function (value) {
    return value === 9;
});
console.log(finds);

function findIndex(arrays, callback) {
    for (var i = 0; i < arrays.length; i++) {
        if (callback(arrays[i])) {
            return i;
        }
    }
}
var finds = findIndex(arrays, function (value) {
    return value === 9;
});
console.log(finds);