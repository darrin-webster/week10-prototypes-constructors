//console.log("connected");

//PRIMITIVE DATA TYPES

//1. NUMBERS
//	8
//	100
//	5.379

//2. Strings (numbers read as strings wont work as numeric values)
//	"connected"
//	"This is a String"
//	"D"
//	"7"

//3. BOOLEANS
//	true
//	false

//4. & 5
	//null
	//undefined //error (undefined is an error is javascript)

//VARIABLES

//var myVariable;			//declared variable
//	myVariable = 100;	//assigned value to variable

//varible delared and assigned a value all at once
//var myNewVar = "this is a new variable";

//var num = 8;

//var firstName = "Darrin";
//var lastName =	"Webster";

//DOT NOTATION
//document.write.();
//console.log();

//alert("This creates a popup");
//prompt("This is a prompt. How are you today")

// var firstName = prompt("What is your first name?");
// var lastName = prompt("what is your last last name?");

// document.write("Hello, " + firstName + " " + lastName +"!");

// COMPARISON OPERATORS (will always evealuate to true or false)

// <
// <=
// >=
// ==
// ===
// !=
// !==


// if (4 < 3) {
// 	console.log("if statement ran"); //if true
// } else {
// 	console.log("else statement ran"); //if false
// }

// LOGICAL OPERATORS
// && //BOTH SIDES MUST BE TRUE
// ||	//ONE SISDE MUST BE TRUE
// !   //RETURNS THE OPPOSITE

var userAge = prompt("How old are you?");

if(userAge >= 21) {
	console.log("You may enter");
} else if(userAge > 18 && userAge < 21) {
	console.log("You may enter, but you can't drink");
} else {
	console.log("You shall not pass!");
}







