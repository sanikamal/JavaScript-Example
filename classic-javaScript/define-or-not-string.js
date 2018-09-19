// Checking for an Existing, Nonempty String


if (typeof unknownVariable === 'string' && unknownVariable.length > 0){
    // custom code ges here
}


// The JavaScript typeof operator returns the type of a variable. 
// The list of possible returned values are:

// • number if the variable is a number
// • string if the variable is a string
// • boolean if the variable is a Boolean
// • function if the variable is a function
// • object if the variable is null, an array, or another JavaScript object
// • undefined if the variable is undefined


if(((typeof unknownVariable != "undefined" && unknownVariable) &&
(typeof unknownVariable.valueOf() == "string"))){
    // custom code goes here
}