function myFun() {
    console.log(this.a);
}
myFun()

function myFuns(c, d) {
    console.log(this.a, this.b + c + d);
}
myFuns.call({ a: 20, b: 30 }, 20, 30);
