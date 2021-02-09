// ==========================
// String in JavaScript 
//==============================

// 'string' "string"
// Numeric Literal
// String Literal
// Boolean Literal 


// String Literal
var string = 'Hello World'
// String() constructor
new String(string)
String(string)

console.log(string);
console.log(String);
console.log(String(string));

// String() constructor
var numberString = 1000;
console.log(String(numberString));
var result = numberString.toString();
console.log(result);

// Escape characters in JavaScript
// \b	Backspace
// \f	Form Feed
// \n	New Line 
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator
// \'	Single quote
// \"	Double quote
// \\	Backslash

var doubleEscape = "They call it an \"escape\" character";
console.log(doubleEscape);
var singleEscape = 'They call it an \'escape\' character';
console.log(singleEscape);


// String Methods 
// length()
// lastIndexOf()
// indexOf()
// search()
// slice(start, end)
// substring(start, end)
// substr(start, length)
// toLocaleLowerCase
// toLocaleUpperCase
// trim
// charAt
// startsWith
// split


var a = 'I am'
var b = 'hello world this is     string methods'
result = a.concat(' ', b);
console.log(result);
reuslt2 = result.charAt(5);
console.log(reuslt2);
result3 = result.startsWith('I am');
console.log(result3);
result4 = result.endsWith('methods');
console.log(result4);
result5 = result.toLocaleLowerCase()
console.log(result5);
result6 = result.toLocaleUpperCase();
console.log(result6);
result7 = result.trim();
console.log(result7);


console.log('      space       trim'.trim());
result8 = result.split(' ');
console.log(result8);