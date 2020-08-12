var x = 10; // global execution context
function foo() {
    // Execution context(foo)
    var y = 20;

    function bar() {
        // Execution context(bar)
        var z = 30;
        var output = x + y + z;
        return output;
    }
    // End execution context(bar)
    return bar()
    // End execution context(foo)
}
var result = foo();
console.log(result);


function closer() {
    var c = 20;

    function doo() {
        console.log(c);
    }
    return doo;
}
var loo = closer();
console.dir(loo);