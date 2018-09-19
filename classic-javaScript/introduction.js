// Differentiating Between a JavaScript Object,Primitive, and Literal

// A JavaScript literal represents a value of a specific type, such as a quoted string (String),
// floating-point number (Number), or boolean (Boolean):
"this is a string"
1.45
true
// A JavaScript primitive is an instance of a particular data type, and there are five such in
// the language: String, Number, Boolean, null, and undefined. The following are examples
// of JavaScript primitives:
"this is a string"
null
// Of the primitive data types, three have complementary constructor objects: String,
// Number, and Boolean. These objects provide access to the built-in properties and
// methods that allow us to do more than simple assignment and subsequent access:
var str1 = "this is a string";
console.log(str1.length); // using String object's length property
// Many of the examples in this book use the console.log() function
// to display JavaScript results. “The Console Is Your Friend” on page 589
// provides a quick how-to on accessing the JavaScript console in
// modern browers, and Appendix A also provides directions for setting
// up your environment and running the code snippets found in
// the solutions.
// Discussion
// It may seem as if we’re working with simple strings or numbers when we declare a
variable:
var str1 = "this is a simple string";
// However, we’re actually creating doorways into an extensive set of functionality.
// Without reliance on JavaScript objects, we can assign a string, number, or boolean value
// to a variable and then access it at a later time. However, if we want to do more with the
// variable, we’ll need to use the data type’s complementary JavaScript object and its
// properties.
// As an example, if we want to see the length of a string, we’ll access the String object’s
// length property:
var str1 = "this is a simple string";
console.log(str1.length); // prints out 23 to browser console



// There are exactly five primitive data types in JavaScript: string, number, boolean, null,
// and undefined. Only the string, number, and boolean data types have complementary
// constructor objects. The actual representation of strings, floating-point numbers, integers,
// and booleans are literals:
var str1 = "this is a simple string"; // the quoted string is the literal
var num1 = 1.45; // the value of 1.45 is the literal
var answer = true; // the values of true and false are boolean literals

// We can create primitive boolean, string, and number variables either by using a literal
// representation or using the object without using the new operator:
var str1 = String("this is a simple string"); // primitive string
var num1 = Number(1.45); // primitive number
var bool1 = Boolean(true); // primitive boolean


// To deliberately instantiate an object, use the new operator:
var str2 = new String("this is a simple string"); // String object instance
var num2 = new Number(1.45); // Number object instance
var bool2 = new Boolean(true); // primitive boolean

// You can quickly tell the difference between a primitive and an object instance when you
// compare an object instance to a literal value using strict equality. For example, running
// the following code in a browser:
var str1 = String("string");
var num1 = Number(1.45);
var bool1 = Boolean(true);
if (str1 === "string") {
console.log('equal');
}
if (num1 === 1.45) {
    console.log('equal');
    }
    if (bool1 === true) {
    console.log('equal');
    }
    var str2 = new String("string");
    var num2 = new Number(1.45);
    var bool2 = new Boolean(true);
    if (str2 === "string") {
    console.log('equal');
    } else {
    console.log('not equal');
    }
    if (num2 === 1.45) {
    console.log('equal');
    } else {
    console.log('not equal');
    }
    if (bool2 === true) {
    console.log('equal');
    } else {
    console.log('not equal');
    }


// test for object
    var num1 = 1.45;
    var num2 = new Number(1.45);
    console.log(typeof num1); // prints out number
    console.log(typeof num2); // prints out object