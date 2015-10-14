

// PUT ALL THE IDs YOU WANT RANDOMISED IN HERE

var divs = ["smallImage", "quote","textBlock1","textBlock2","textBlock3"];





// Random number between range function.
function randomBetween(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);

}

// Collision detection

function collision($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;

	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
}


function testDivOverlaps () {

	var count = 0;

	for (var i = 0; i < divs.length; i++) {

		for (var k = 0; k < divs.length; k++) {

			if (collision($("#"+divs[i]), $('#'+divs[k]))){
				count++;
			}

		}


	}
	console.log(count - divs.length);
	if (count > (divs.length)) {
		return true;
	};

}



// Random left

function randomPos(selector,axis){


		var foo = $(".fullPage").css(axis);
		var foo = parseInt(foo, 10);

		var bar = $('#' + selector).css(axis);
		var bar = parseInt(bar, 10);

		var margin = randomBetween(0, foo - bar);

    if (axis == "width") {
			$('#' + selector).css("left", margin + "px");
			$(".showAndTell").append(selector + " left: " + (margin+5) + "<br />");
		} else if (axis == "height") {
			$('#' + selector).css("top", margin + "px");
			$(".showAndTell").append(selector + " top: " + (margin+5) + "<br /><br />");
		}
}


function deesignGenerate(){



	for (var i = 0; i < divs.length; i++) {

		randomPos(divs[i],"width",i);
		randomPos(divs[i],"height",i);

	}

	while(testDivOverlaps()){

		$(".showAndTell").empty();
		for (var i = 0; i < divs.length; i++) {

			randomPos(divs[i],"width",i);
			randomPos(divs[i],"height",i);

		}

	}

}

function showAndTell (argument) {
	// body...
}

// ACTUALLY RUN THE DAMN THING

$( document ).ready(function() {
    console.log( "jQuery is firing" );


    $(".fullPage").click(function() {
    	console.log("New layout");
   		console.time("gen");
   		deesignGenerate();
   		console.timeEnd("gen");
	});

});
