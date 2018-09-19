// Swapping Words in a String Using Capturing Parentheses

var name = "Sani Kamal";
var re = /^(\w+)\s(\w+)$/;
var newname = name.replace(re,"$2, $1");