var x = 50;     //outer var
function scope() {
    var x = 45;     //inner var
    console.log(x);
    function nested() {
        // var y = 100;
        console.log(x);
    }
    nested()
}
scope();