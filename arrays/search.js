// Searching Through an Array

// To search an array for a specific value and get the array element index if found


var animals = new Array("dog","cat","seal","elephant","walrus","lion","cat","tiger","monkey");
console.log(animals.indexOf("elephant")); 
// prints 3
console.log(animals.indexOf("cat"));
 // prints 1
console.log(animals.lastIndexOf("cat")); 
// prints 5

// Both methods can take a starting index, setting where the search is going to start:
var animals = ["dog","cat","seal","walrus","lion", "cat"];
console.log(animals.indexOf("cat",2));
console.log(animals.lastIndexOf("cat",4));

// Array method findIndex(), providing a function that tests each array value,
// returning the index of the array element when the test is successful.
var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
var over = nums.findIndex(function(element) {
return (element >= 100);
});
console.log(nums[over]);