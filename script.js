$(document).ready( function() { 

	for(i = 0; i<16; i++) {
		$('.maindiv').append('<div class = "square"></div>'); //creates an inital array of 16 squares
		}
	$(".square").mouseenter(function() {
		$(this).css("background-color", "black");
	});
	$(".button").click(function(){
		var side = prompt("Please enter a number of squares per side");
		var sidelength = (Math.floor(400/side)).toString() +"px";
		console.log(sidelength);
		$('.square').remove();	
		for(i = 0; i < (side); i++) {
			for(j = 0; j < side; j++) {
				$('.maindiv').append('<div class = "square"></div>');
				$(".square").css("width", sidelength);
				$(".square").css("height", sidelength);	
			}
		}
	$(".square").mouseenter(function() {
		console.log("Entered square");
		$(this).css("background-color", "black");
	});
	});
	
});
