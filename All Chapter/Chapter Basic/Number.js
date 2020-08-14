var n = 100;
var nf = 10.0;
var nn = 45;
console.log(nn);
var numb = Number(45.45);
console.log(numb);
// parseFloat
var floatNumb = 45.54;
console.log(Number.parseFloat(floatNumb));
var parInt = 45.45;
// parseInt
console.log(Number.parseInt(parseInt));
// MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
// Infinity
console.log(1 / 0);
// NaN or Not a number
console.log('number' / 34);

// Number.prototype.toFixed() 
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456));
console.log(financial(0.004));
console.log(financial('1.23e+5'));