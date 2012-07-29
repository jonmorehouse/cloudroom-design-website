$(document).ready(function(){
	$('#current_projects .trigger').click(function(){
		visibility = $('#current_projects .slide_container').css('display');
		if(visibility=='none')
			current_projects('show');
		else
			current_projects();
	});
	
	$('#current_projects .slide_container .previous, #current_projects .slide_container .next').click(function(){
		var type=$(this).attr('class');
		current_project_slide(type);
	});

// END DOCUMENT READY FUNCTION
});

function current_projects(visibility){
	if(visibility=='show')
		{
			current_projects_visibility('show');
			$('#contact .contact').fadeOut(time);
			$('#current_projects .slide_container').children('.slide:first').show();
			page_content_opacity(low);
		}
	else
		{
			current_projects_visibility();
			page_content_opacity(1.0);
		}
		
}

function current_projects_visibility(type){
	var container = $('#current_projects .slide_container');
	container.fadeOut(400);
	if(type=='show')
		{
			container.fadeIn(400);
		}
}

function current_project_slide(type){
	

	
	var origin, position;
	position = "5%"; //this corresponds to the padding of the slide inside of the slide container

	
	// VARIABLE DECLARTIONS!
	var transition_speed = 1000;
	var element = $('#current_projects .slide_container');
	var length = element.children('.slide').length;
	var current = element.children('.slide:visible');
	var current_index = current.index();
	

// IF TYPE == NEXT WE WILL SET A VARIABLE AS LEFT OR RIGHT...
	if(type=='next')
		{
			origin = "-105%";
			var max = length -1
			if(current_index==max)
				next = element.children('.slide:first');
			else
				next = current.next();
		}
	else if(type=='previous')
		{
			origin = '105%';
			if(current_index==0)
			{
				next = element.children('.slide').last();
			}
			else
				next = current.prev();
		}
	// METHOD TO ANIMATE THE IMAGE!!!
	// PREPARING THE NEXT SLIDE TO WORK PROPERLY!
	next.css('left', origin);
	next.css('opacity', '0');
	next.show();
	
	current.animate({
			// right: origin,
			opacity: '0'
		}, time);
	
	next.animate({
			left: position,
			opacity: '1.0'
			}, transition_speed);
	
	current.fadeOut(time);
	
}