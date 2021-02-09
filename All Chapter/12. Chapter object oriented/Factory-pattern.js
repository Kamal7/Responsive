// Factory Pattern
var factoryPattern = function factoryPattern(width, height) {
    return {
        width: width,
        height: height,
        print: function () {
            console.log('I am console log');
            this.properties();
            console.log(this);

        },
        properties: function () {
            console.log('My is width ' + this.width);
            console.log('My is height ' + this.height);
        }
    }
}
var result = factoryPattern(10, 20);
console.log(result);
result.print();

var result2 = factoryPattern(100, 200);
console.log(result2);
result2.print();