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




// this is closure function 
function foo() {
    var x = 10;
    function closure() {
        console.log(x);
    }
    return closure;
}
var doo = foo();
console.dir(doo);