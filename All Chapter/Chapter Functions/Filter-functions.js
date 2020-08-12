var array = [];
array.filter(function (value, index, arr) {});


var array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];
array.filter(function (value) {
    console.log(value);
});


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);


// 01. Step
var hello = array.filter(function (params) {
    return params >= 10;
});
console.log(hello);

// 02. Step
function isBigEnough(value) {
    return value >= 10
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filtered);

// Implementing Filter 
var array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (var i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}
console.log(array.filter(isPrime));

function myfilters(arr, cd) {

    var newArr = [];
    for (var i; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}
var hei = myfilters(array, function (value) {
    return value > 4;
});
console.log(hei);