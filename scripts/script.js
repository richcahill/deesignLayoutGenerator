

// PUT ALL THE CLASSES YOU WANT RANDOMISED IN HERE

var divs = ["mainImg","smallImg1"];



// Random number between range function.
function randomBetween(min,max){
    
    return Math.floor(Math.random()*(max-min+1)+min);

}

// Empty arrays setup for no div collisions


var posXmin = [];
var posXmax = [];
var posYmin = [];
var posYmax = [];

// Random left 

function randomPos(selector,axis,i){

	console.log(i);


	// So checks can be run, recreate function here.
	function awesome(selector,axis,i){

		var foo = $(".fullPage").css(axis);
		var foo = parseInt(foo, 10);

		var bar = $('.' + selector).css(axis);
		var bar = parseInt(bar, 10);

		var margin = randomBetween(0, foo - bar);

		if (axis == "width") {
			$('.' + selector).css("left", margin + "px");
			posXmin[i] = margin;
			posXmax[i] = margin + bar;
			// posXmin.push(margin);
			// posXmax.push(margin + bar)
		} else if (axis == "height") {
			$('.' + selector).css("top", margin + "px");
			posYmin[i] = margin;
			posYmax[i] = margin + bar;
			// posYmin.push(margin);
			// posYmax.push(margin + bar)
		}

	}

	awesome(selector,axis,i);


	if (posXmin[i-1] != null){
			
		console.log("checking overlap");


		while (posXmin[i] > posXmin[i-1] || posYmin[i] > posYmin[i-1] ) {
			awesome(selector,axis,i);
		}	

	}

}


function deesignGenerate(){

	// empty the storage arrays
	posXmin = [];
	posXmax = [];
	posYmin = [];
	posYmax = [];
	

	for (var i = 0; i < divs.length; i++) {

		randomPos(divs[i],"width",i);
		randomPos(divs[i],"height",i);
		
		
	};


}

// ACTUALLY RUN THE DAMN THING

$( document ).ready(function() {
    console.log( "jQuery is firing" );

    deesignGenerate();

    $(".fullPage").click(function() {
   	deesignGenerate();
	});


});