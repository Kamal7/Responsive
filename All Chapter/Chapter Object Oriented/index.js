function myFunctions() {
    console.log(this);

    console.log(this.a + this.b);

}

myFunctions.call({
    a: 30,
    b: 40
});

myFunctions.call({
    a: 300,
    b: 400
});