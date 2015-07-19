
// Random number between range function.
function randomBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function deesignGenerate(){
    		var mainImgLeft = randomBetween(0, 188);
    		var mainImgTop = randomBetween(0, 88);

    		var smallImg1Left = randomBetween(0, 238);
    		var smallImg1Top = randomBetween(0, 148);

    		var smallImg2Left = randomBetween(0, 238);
    		var smallImg2Top = randomBetween(0, 148);

    		var titleLeft = randomBetween(0, 200);
    		var titleTop = randomBetween(0, 156);

    		var descriptionLeft = randomBetween(0, 158);
    		var descriptionTop = randomBetween(0, 148);

			$(".mainImg").css("left", mainImgLeft);
			$(".mainImg").css("top", mainImgTop);

			$(".smallImg1").css("left", smallImg1Left);
			$(".smallImg1").css("top", smallImg1Top);

			$(".smallImg2").css("left", smallImg2Left);
			$(".smallImg2").css("top", smallImg2Top);
	
			$(".title").css("left", titleLeft);
			$(".title").css("top", titleTop);

			$(".description").css("left", descriptionLeft);
			$(".description").css("top", descriptionTop);

			$('.showAndTell').empty();

			$(".showAndTell").append( 
				"mainImg Left: " + mainImgLeft + "<br />"
				 + "mainImg Top: " + mainImgTop + "<br /><br />"
				 + "smallImg1 Left: " + smallImg1Left + "<br />"
				 + "smallImg1 Top: " + smallImg1Top + "<br /><br />"
				 + "smallImg2 Left: " + smallImg2Left + "<br />"
				 + "smallImg2 Top: " + smallImg2Top + "<br /><br />"
				 + "title Left: " + titleLeft + "<br />"
				 + "title Top: " + titleTop + "<br /><br />"
				 + "description Left: " + descriptionLeft + "<br />"
				 + "description Top: " + descriptionTop

			);



			if ($('.title').overlaps('.description')) {
				console.log("overlap ahoy");
			};
		}


$( document ).ready(function() {
    console.log( "jQuery is firing. #gogogogogo" );

    deesignGenerate();

    $(".fullPage").click(function() {
   	deesignGenerate();
	});


});