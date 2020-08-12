var result = new Function('width', 'height', `    
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
    }`);
var rslt = new result(5, 6);
console.log(rslt);