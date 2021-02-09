//========== CallBack Fuctions ========== 
function sum(a, b) {
    return a + b;
}
function sample(a, b) {
    c = a + b;
    d = a - b;
    return sum(c, d)
}
console.log(sample(3, 4));


// function callback 
function sumcall(a, b) {
    return a + b;
}

function callback(a, b, xy) {
    x = a + b;
    console.log(x);
    y = a - b;
    console.log(y);
    result = xy(x, y);
    return result;
}
var cboo = callback(15, 5, sumcall);
console.log(cboo);

var result = callback(10, 5, function (ao, bo) {
    return ao - bo;
})
console.log(result);

var result = callback(10, 5, function (ao, bo) {
    return ao + bo;
})
console.log(result);