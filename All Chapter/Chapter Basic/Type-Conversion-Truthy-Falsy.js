console.log(typeof('john'));
console.log(typeof(3.14));
console.log(typeof(NaN));
console.log(typeof(false));
console.log(typeof([1, 2, 3, 4]));
console.log(typeof({ name: 'john', age: 34 }));
console.log(typeof(new Date()));
console.log(typeof(function() {}));
console.log(typeof(myCar));
console.log(typeof(null));

// always falsy values:
// 01. false
// 02. 0(zero)
// 03. '' or ""(empty string)
// 04. null
// 05. undefined
// 06. NaN

// always truthy values:
// 01. '0'(a string containing a single zero)
// 02. 'false'(a string containing the text “false”)
// 03. [](an empty array)
// 04. { } (an empty object)
// 05. function() { } (an “empty” function)


var string = 'string';
var strgNum = '100';
var numb = 10;
// Number()
console.log(typeof(Number(strgNum)));
console.log(typeof(Number.parseInt(strgNum)));
console.log(typeof(Number.parseFloat(strgNum)));
console.log(strgNum + numb);
console.log(strgNum * numb);

// String()
console.log(typeof(String(numb)));
console.log(typeof(numb.toString()));

// Infinity
console.log(Number(Infinity));
console.log(typeof(Number(Infinity)));
console.log(String(Infinity));
console.log(typeof(String(Infinity)));
console.log(Boolean(Infinity));
console.log(typeof(Boolean(Infinity)));