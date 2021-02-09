

function Person(name) {
    this.name = name;
}
var p1 = new Person('ali')
var result = Object.getPrototypeOf(p1)
console.log(result);
console.log(Person.prototype);