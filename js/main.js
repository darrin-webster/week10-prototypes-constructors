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

// var userAge = prompt("How old are you?");

// if(userAge >= 21) {
// 	console.log("You may enter");
// } else if(userAge > 18 && userAge < 21) {
// 	console.log("You may enter, but you can't drink");
// } else {
// 	console.log("You shall not pass!");
// }


// var testOne = "What kind of variable am I?"
// ; //the answer should either be a declared variable or a string variable

// var testTwo = 256; //number

// var testThree = false; //boolean

// var testFour = 'true'; //string 

// var testFive = '128'; //string

// var testSix = " "; //string



// var testOne = "hello" + "there"; // string "hellothere"
// ; 
// var testTwo = '100' + 28;	// string 10028

// var testThree = true + 3; 	// number 4 

// var testFour = 'false' + 5; //string false5

// var testFive = '128' - 3; // number 125

// var testSix = "" * 9; // number 0

// var testSeven = 'zero' - 1; // number NaN

// var testEight = 'five'.length; // number 4

// var testNine = 'five'[0] + 'ever'; // string fever

// var testTen = 'a' > 'b'; // boolean false

// var testEleven = 'number'.length < 7; //boolean true

// var testTwelve = '12' == 12; //boolean true

// var testThirteen = 'twelve' == 12; //boolean false

// var testFourteen = '14' === 14;  //boolean false

// var testFifteen =  'Hi there'[0] + 'open sesame'[2] + 'alohaora'[1] + 'eulalia'[4] + 'harkonnen'[4] +'BATMAN!'[6]; //string "Hello"


// var string1 = "Hello, ";

// var string2 = "my name is ";

// var string3 = "Darrin Webster.";

// var combinedStrings = string1 + string2 + string3;

// console.log(combinedStrings);
//Hello, my nam is Darrin Webster


// var num1 = 8;

// var num2 = 52;

// var num3 = 60;

// var combinedNumbers = num1 + num2 + num3;
// console.log(combinedNumbers);

//120


// var mixedNum1 = 10;

// var mixedString1 = "ten";

// var mixedNum2 = "10";

// var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

// console.log(mixedConcatenation);
//1010ten 




// var num4 = 5;

// var num5 = 0;

// if(num4 > 1) {
// 	console.log("Num4 is greatr than 1")
// } else {
// 	console.log("num4 is NOT greater than 1")
// };
// num4 is greater than 1


// var num4 = 5;

// var num5 = 0;

// if (num4 < num5 || num4 === num5) {
// 	console.log("If statement ran!");
// } else if (num5 === "0" || true) {
// 	console.log("Else if statement ran");
// } else {
// 	console.log("Else statetment ran");
// };
//Else statement ran


// var num4 = 5

// var num5 = 0

// if (num4 > num5 && num4 === num5) {
// 	console.log("If statement ran!");
// } else if (num5 === "0" || true) {
// 	console.log("Else Else statement ran");
// } else {
// 	console.log("Else statement ran");
// }
//Else statement ran

// var string1 = "this is a string";

// for(var i = 0; i < string1.length; i = i + 1) {
// 	console.log(i, string1[i]);
// }
//15 this is a string

var string2 = "coding";

var total = 0;

for(var i = 0; i < string2.length; i++) {
	total = total + i;
};

console.log(total);

//5
