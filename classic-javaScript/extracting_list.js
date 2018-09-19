// Extracting a List from a String


var sentence = 'This is one sentence. This is a sentence with a list of items:' +
'cherries, oranges, apples, bananas. That was the list of items.';
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start+1);
var listStr = sentence.substring(start+1, end);
// console.log(listStr);
var fruits = listStr.split(',');
console.log(fruits); // ['cherries', ' oranges', ' apples', ' bananas']


// var listStr = sentence.substr(start+1, end-start);
// var fruits = listStr.split(',');

// Advanced
fruits = listStr.split(',');
console.log(fruits); // [' cherries', ' oranges', ' apples', ' bananas']
fruits.forEach(function(elmnt,indx,arry) {
arry[indx] = elmnt.trim();
});
console.log(fruits); // ['cherries', 'oranges', 'apples", "bananas"]



// Simplifying the Code Using Chaining

var start = sentence.indexOf(":");
var end = sentence.indexOf(".", start+1);
var fruits = sentence.substring(start+1, end).split(",");