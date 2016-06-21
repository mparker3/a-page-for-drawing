$(document).ready( function() { 

	for(i = 0; i<16; i++) {
		$('.maindiv').append('<div class = "square"></div>');
		}
	$(".square").mouseenter(function() {
		$(this).css("background-color", "black");
	});
})