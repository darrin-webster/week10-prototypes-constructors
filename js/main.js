 // object constructor notation
// function Person(first, last) {
// 	this.firstname = first;
// 	this.lastname = last;
// }

// var Alexander = new Person('Alexamder' , 'The Great');

// Person.proptotype.getFullName = function() {
// 	return this.firstname + ' ' + this.lastname; 
// };
var resturants = [];


function Resturant(name, seats, cuisine, avgPrice, rating, array) {
	this.name = name;
	this.seats = seats;
	this.cuisine = cuisine;
	this.avgPrice = avgPrice;
	this.rating = rating;

	pushToArray(resturants, this)

}

function pushToArray(array, item) {
	array.push(item);
}

new Resturant ('Osha', 100, 'Thai', '$18', 4.5, resturants);
new Resturant('Subway', 10 , 'Sandwhiches', '$8', 1.3, resturants);
new Resturant('Lao Table', 90, 'LAotian', '$26', 4.7, resturants);