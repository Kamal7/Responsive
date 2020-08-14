// Syntax
var strings1 = 'Strings';
var strings2 = "Strings";
// Parameters
var strings3 = String('Hello World');
console.log(strings3);
var strings4 = String(3456);
console.log(strings4);
var strings5 = String(345.3456);
console.log(strings5);
// Template literals
var template = `hello world`;
var template1 = `hello!
 world!`;
var template2 = `hello ${who}`;
var template_tags = `<a>${who}</a>`;
// Method
var longString = "This is a very long string which needs " +
    "to wrap across multiple lines because " +
    "otherwise my code is unreadable.";