$(document).ready(function(){

	$('#background_slideshow .slide').hide();
	$('#background_slideshow .slide:first').show();
	
	setInterval(function () {
		next_slide();
		
	}, 6500);
});

function next_slide(){
	var current = $('#background_slideshow .slide:visible');
	current.fadeOut('800');
	if(current.is(':last-child'))
		$('#background_slideshow .slide:first').show();
	else
		current.next().fadeIn('800');
}