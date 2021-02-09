// Object in JavaScript 
// Instantiating Objects
var myString = new String();
console.log(typeof myString);
var myArray = new Array();
console.log(typeof myArray);
var obj = new Object();
console.log(typeof obj);


// Object 
var obj = new Object();
console.log(obj);
var obj = {}; // object literal method
console.log(typeof obj);
console.log(obj);
// Assigning properties to an object
obj.name = "Estelle";
obj["name"] = "Estelle";

var myname = obj.name;
console.log(myname);
var myname = obj["name"];
console.log(myname);


obj.for = "Estelle"; // produces an error
obj["for"] = "Estelle"; // allowed



// =========== Literal object syntax    ====================

// var myObject = {
//     myProperty: value,
//     yourProperty: value,
//     myMethod: function () {
//         //code here
//     },
//     yourMethod: function () {
//         //more code
//     }
// }
// console.log(myObject);

// ================= Object Literals ============
var obj = {
    name: "Estelle",
    gender: "Female",
    outfit: {
        top: "t-shirt",
        bottom: "jeans",
        shoes: "hiking boots"
    }
}
console.log(obj.name);
console.log(obj.gender);
console.log(obj.outfit);
console.log(obj.outfit.top);
var results = 'valueList'
console.log(obj[results]);

// You can chain it together:

console.log(obj.outfit.shoes); // hiking boots
console.log(obj["outfit"]["bottom"]); // jeans


// Assigning methods to an object
var greeting = {
    name: "Estelle",
    message: "this was written by ",
    welcome: function () {
        alert("Objects now make sense");
    },
    sayhi: function () {
        alert(this.message + this.name);
    }
}

var objects = {
    x: 10,
    y: 110,
    z: 120,
}
console.log(objects);
console.log(objects.x);
console.log(objects.x + objects.y);
console.log(objects.x = '30');
console.log(objects.a = 28);
console.log(objects.a);
objects['hello'] = 1000
console.log(objects);

// Remove Object Properties 
console.log(delete objects.a);
var deletepro = delete objects.a
console.log(deletepro);
console.log(objects);


// Compare Tow Objects 
var obj1 = {
    a: 10,
    b: 20,
}
var obj2 = {
    a: 10,
    b: 20,
}
if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true);
} else {
    console.log(true);
}
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

var objIterate = {
    a: 10,
    b: 20,
    c: 30
}
console.log('a' in objIterate);
console.log('x' in objIterate);

// for in loop 
for (i in objIterate) {
    console.log(i);
    console.log(objiterates[i]);
}
// Objects Method Provide
var objectMethodProvide = {
    a: 50,
    b: 40,
    c: 30
}
console.log(Object.keys(objectMethodProvide));
console.log(Object.values(objectMethodProvide));
console.log(Object.entries(objectMethodProvide));


// How To Assign Objects
var assignObjects = {
    a: 50,
    b: 40,
    c: 30
}
console.log(assignObjects);
var assignObjects2 = Object.assign({}, assignObjects)
assignObjects2.x = 100;
console.log(assignObjects2);


// JavaScript Object Properties and Methods

// 1. constructor property
// 2. prototype property

// used to assign new properties and methods to future instances of the object type.
// 3. hasOwnProperty()          method
// 4. isPrototypeOf()           method
// 5. propertyIsEnumerable()    method
// 6. toString()                method
// 7. toLocaleString()          method
// 8. valueOf()                 method

// Extending Objects
String.prototype.capFirst = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
};

String.prototype.trim = function () {
    return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
};

Array.prototype.sortCaseInsensitive = function () {
    return this.sort(function (a, b) {
        return (String(a).toLowerCase() > String(b).toLowerCase()) ? 1 : -1
    });
};

Date.prototype.customFormat = function (formatString) {
    //The code for this is in the javascript date object article.
};