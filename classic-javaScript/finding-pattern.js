// Finding and Highlighting All Instances of a Pattern


// The RegExp exec() method executes the regular expression, returning null if a match
// is not found, or an object with information about the match, if found.

var searchString = "Now is the time and this is the time and that is the time";
var pattern = /t\w*e/g;
var matchArray;
var str = "";
// check for pattern with regexp exec, if not null, process
while((matchArray = pattern.exec(searchString)) != null) {
str+="at " + matchArray.index + " we found " + matchArray[0] + "\n";
}
console.log(str);