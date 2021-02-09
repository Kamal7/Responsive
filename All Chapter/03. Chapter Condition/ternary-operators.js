// conditional (ternary) operator


var n = 11;
var str = '';
if (n % 2 === 0) {
    str = "true";
} else {
    str = "false";
}
console.log(str);

var result = n % 2 === 0 ? 'true' : 'false'; //this is ternary operator
console.log(result);