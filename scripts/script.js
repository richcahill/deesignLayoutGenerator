
// Random number between range function.
function randomBetween(min,max){
    
    return Math.floor(Math.random()*(max-min+1)+min);

}

// Empty arrays setup for no div collisions


var posXmin = [];
var posXmax = [];
var posYmin = [];
var posYmax = [];

var divs = ["mainImg","smallImg1","smallImg2"];

// Random left 

function randomPos(selector,axis){

	var foo = $(".fullPage").css(axis);
	var foo = parseInt(foo, 10);

	var bar = $('.' + selector).css(axis);
	var bar = parseInt(bar, 10);

	var margin = randomBetween(0, foo - bar);

	if (axis == "width") {
		$('.' + selector).css("left", margin + "px");
		posXmin.push(margin);
		posXmax.push(margin + bar)
	} else if (axis == "height") {
		$('.' + selector).css("top", margin + "px");
		posYmin.push(margin);
		posYmax.push(margin + bar)
	}

}


function deesignGenerate(){

	// empty the storage arrays
	posXmin = [];
	posXmax = [];
	posYmin = [];
	posYmax = [];
	

	for (var i = 0; i < divs.length; i++) {
		randomPos(divs[i],"width");
		randomPos(divs[i],"height")
		console.log("min: " + posXmin[i] + "," + posYmin[i] + "   " + "max: " + posXmax[i] + "," + posYmax[i]);
	};


}


$( document ).ready(function() {
    console.log( "jQuery is firing" );

    deesignGenerate();

    $(".fullPage").click(function() {
   	deesignGenerate();
	});


});