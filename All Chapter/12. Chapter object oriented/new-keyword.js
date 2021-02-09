1. // Constructor Pattern
var ConstructorPattern = function constructorPattern(width, height) {
    this.width = width
    this.height = height
    this.print = function () {
        console.log('I am console log');
        this.properties();
        console.log(this);

    }
    this.properties = function () {
        console.log('My is width ' + this.width);
        console.log('My is height ' + this.height);
    }
}

// var result = new ConstructorPattern(23, 45);
// result.print();




function myNew(constructor) {
    var obj = {}
    console.log(obj);
    var objs = Object.setPrototypeOf(obj, constructor.prototype);
    console.log(objs);
    var argsArray = Array.prototype.slice.apply(arguments);
    console.log(argsArray);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}
var result = myNew(ConstructorPattern, 30, 40);
console.log(result);