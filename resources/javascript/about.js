// THIS IS FOR THE ABOUT BLURBS TO MOVE AROUND THE SITEEEE

// MAYBE PUT UP SOME KIND OF CONTAINER DIV???

$(document).ready(function(){
	
	setTimeout(function(){
		$('#about_box').children('div:first').fadeIn(time);
	}, 500);
	about_timer = setInterval(function(){about_show_interval();}, 6000);
	
	
});

function about_start(){
		$('#about_box').children('div').fadeOut(time);
		clearInterval(about_timer);
		about_timer = setInterval(function(){about_show_interval();}, 6000);
}
	
function about_stop(){
		$('#about_box').children().fadeOut(time);
		clearInterval(about_timer);
}

function about_show_interval(){
	// FULLY FUNCTIONING!
		var element, length, current, height_max, width_max, top, left, current_visible;
		
		element = $('#about_box');
		length = element.children('div').length;
		
		current = element.children('div:visible');

		if(current.index()==length-1)
			current_visible = element.children('div').first();
		else
			current_visible = current.next();
		
		height_max = element.height();
		width_max = element.width();
		
	 	top = Math.floor(Math.random()*height_max);
		left = Math.floor(Math.random()*width_max);

		element.children('div').fadeOut(time);
		
		setTimeout(function(){

				current_visible.css('left', left);
				current_visible.css('top', top);
			current_visible.fadeIn(time);
		},time*2);
	
}
