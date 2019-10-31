//Statements & Loops!

var age = 9;
if ( age > 67 ) {
	document.write("Senior Citizen");
} else if(age < 10) {
	document.write("Child");
} else {
	document.write("Not Senior Citizen");
}


//Check weather a Number is Even or Odd
var number = prompt("Enter Number");
if (number % 2 == 0) {
    document.write(number + " is Even");
} else if (number % 2 == 1) {
	document.write(number + ' is Odd');
}


//Example #3
var numOfbooks = 5;
do {
    document.write(numOfbooks +" avaliable in book shop. 
");
    numOfbooks -= 12;
} while (numOfbooks > 0)
 


//Example #4

var numOfbooks = 5;
while (numOfbooks > 0) {
	document.write(numOfbooks +" avaliable in book shop. 
");
   numOfbooks--;	
}
