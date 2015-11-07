/* CURRENTLY IN: javascript/main.js */

//a2 +b2 = c2 and a + b + c = 1000.
//find abc


// start with triples and add them all 
var pSquares = [];

///get squares
for (var i = 999; i >= 1; i--) {
	 if ((Math.sqrt(i)).toString().length === 1) {
	 	pSquares.push(i, Math.sqrt(i))
	 	pSquares.sort(function(a, b){return a-b});

	 	
	}
}

for (var j = 0; j <=pSquares.length; ++j){
	if (pSquares[j] === pSquares[j + 1] ) {
		pSquares.splice([j + 1], 1); 
	}
}
////////////////



// pSquares.forEach (function (i) {
// 	var j = i 
// 	console.log(pSquares[i], j+1)
// });
console.log (pSquares)
//count backward from 999 by twos - 
//997 is it a perfect square?  