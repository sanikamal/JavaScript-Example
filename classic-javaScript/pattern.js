// Replacing Patterns with New Strings


var searchString = "Now is the time, this is the tame";
var re = /t\w{2}e/g;
var replacement = searchString.replace(re, "place");
console.log(replacement); // Now is the place, this is the place

// Using buildin RegEx

var re = new RegExp('t\\w{2}e',"g");
var p = searchString.replace(re,"place");
console.log(p);