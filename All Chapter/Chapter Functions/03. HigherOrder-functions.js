//========== Higher Order Fuctions ========== 

function higherOrderfunction(a, b, func) {
    var c = a + b;
    console.log(c);
    var d = a - b;
    console.log(d);
    return function () {
        var m = func(a, b);
        console.log(m);
        return c * d * m;
    }
}
var higherOrder = higherOrderfunction(10, 5, example);
console.log(higherOrder());