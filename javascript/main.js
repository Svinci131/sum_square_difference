// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


var array = []
var arrayOfSquares = [];
	maxNum = 100; 

function fillArray (array){
	for (var i = 1; i <= maxNum; ++i ) {
		array.push (i)
	}
        return array; 
}

function fillArrayofSquares (array){
	for (var i = 1; i <= maxNum; ++i ) {
		//console.log(Math.pow(i,2))
		array.push (Math.pow(i,2))
	}
        return array; 
}


function total (array) {

	var sum = array.reduce(function(prev, cur) {
		return prev + cur;
		
		});
	return sum;
};


var sumOfTheSquares = (total(fillArrayofSquares(arrayOfSquares)));
var squareOfSum = (Math.pow((total(fillArray(array))),2));
var difference = (squareOfSum-sumOfTheSquares);

console.log (difference);

		