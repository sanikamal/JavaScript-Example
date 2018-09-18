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