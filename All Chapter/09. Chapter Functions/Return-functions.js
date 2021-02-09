// function person(msg) {
//     function student(name) {
//         return msg + ', ' + name;
//     }
//     return student;
// }
// var ms = person('Hello');
// console.log(ms);
// var st = ms('Rohim');
// console.log(st);



function base(b) {
    return function (n) {
        var rest = 1;
        console.log(b);
        for (var i = 0; i < b; i++) {
            rest *= n;
        }
        return rest;
    }
}
var bs = base(0);
console.log(bs(2));