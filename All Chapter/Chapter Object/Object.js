// Instantiating Objects

var myString = new String();
var myArray = new Array();

// Object 
var obj = new Object();
console.log(obj);
var obj = {}; // object literal method
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

var myObject = {
    myProperty: value,
    yourProperty: value,
    myMethod: function() {
        //code here
    },
    yourMethod: function() {
        //more code
    }
}

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

// You can chain it together:

obj.outfit.shoes; // hiking boots
obj["outfit"]["bottom"]; // jeans


// Assigning methods to an object
var greeting = {
    name: "Estelle",
    message: "this was written by ",
    welcome: function() {
        alert("Objects now make sense");
    },
    sayhi: function() {
        alert(this.message + this.name);
    }
}

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
String.prototype.capFirst = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
};

String.prototype.trim = function() {
    return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
};

Array.prototype.sortCaseInsensitive = function() {
    return this.sort(function(a, b) {
        return (String(a).toLowerCase() > String(b).toLowerCase()) ? 1 : -1
    });
};

Date.prototype.customFormat = function(formatString) {
    //The code for this is in the javascript date object article.
};