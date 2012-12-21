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
		var element = $('#about_box');
		var length = element.children('div').length;
		var current = Math.ceil(Math.random()*length);
		var height_max = element.height();
		var width_max = element.width();
	 	var top = Math.floor(Math.random()*height_max);
		var left = Math.floor(Math.random()*width_max);
		element.children('div').fadeOut(time);
		var current_visible = element.children('.' + current);
		current_visible.delay(time).fadeIn(time);
		current_visible.css('left', left);
		current_visible.css('top', top);
}
$(document).ready(function(){
	if( navigator.userAgent.match(/Android/i)
 	|| navigator.userAgent.match(/webOS/i)
 	|| navigator.userAgent.match(/iPhone/i)
 	|| navigator.userAgent.match(/iPad/i)
 	|| navigator.userAgent.match(/iPod/i)
 	|| navigator.userAgent.match(/BlackBerry/i)
 	)
		browser = 'mobile';
	else
		browser = 'desktop';
});

$(document).ready(function(){
	time = 500;
	low = 0.3;
	// BASIC CONTRACT TRIGGER FUNCTIONS!
	contact_content('email');
	
	$('#contact .trigger').click(function(){
		var visibility = $('#contact .contact').css('display');
		if(visibility == 'none')
			contact_animation('show');
		else
			contact_animation('hide');
	});
	
	$('#contact .tab li').click(function(){
		var type = $(this).attr('class');
		contact_content(type);
	});
	
	// INDIVIDUAL CONTENT SCRIPTS
	$('#contact .content .email .submit').click(function(){
		email_submit();
	});
	
	phone_anchor();
	
	contact_status = 'outside';
	current_projects_status = 'outside';
	content_opacity_status = 'full';
	
	$('#contact').hover(function(){
		contact_status = 'inside';
	},function(){
		contact_status = 'outside';
	});
	
	$('#current_projects').hover(function(){
		current_projects_status = 'inside';	
	}, function(){
		current_projects_status = 'outside';
	});

	$(document).click(function(){
		open_area_click();
	});

// END DOCUMENT READY!
});

function contact_animation(type){

	var element = $('#contact .contact');
	if(type=='show')
		{
			$('#current_projects .slide_container').fadeOut(time);
			$('#about_box').fadeOut(time);
			element.show(time);
			page_content_opacity(0.3);
			contact_content('email');
			about_stop();
		}
	else if(type=='hide')
		{
			page_content_opacity(1.0);
			$('#about_box').show();
			element.hide(time);
			about_start();
		}
}

function contact_content(type){
	$('#contact .content').children().fadeOut(500);
	$('#contact .content').children().hide();
	$('#contact .content').children('.' + type).delay(200).fadeIn(200);
}

function email_submit(){
	var current = $('#contact .content .email');
	var url = base_url + 'contact/contact_email';
	var data = {
		'message': current.children('#message').val(),
		'email': current.children('#email').val()
		};
	
	$.ajax({
  		type: 'POST',
  		url: url,
  		data: data,
  		success: function(msg){
			$('#message').val("");
			$('#email').val("");
			$('#contact .content .email').hide(100);
			$('#contact .content .message').html(msg).fadeIn();
			$('#contact .content .message').show(100);
			$('#contact .content .message').delay(2000).hide(100);
			$('#contact .content .email').delay(2300).show(400);
		}
  	});
}

function phone_anchor(){
	if( navigator.userAgent.match(/Android/i)
 		|| navigator.userAgent.match(/webOS/i)
 		|| navigator.userAgent.match(/iPhone/i)
 		|| navigator.userAgent.match(/iPad/i)
 		|| navigator.userAgent.match(/iPod/i)
 		|| navigator.userAgent.match(/BlackBerry/i))
	{
		// MOBILE EXPERIENCE, DO NOTHING!
	}

	else
		{
			$('#contact .content .phone a').attr('href', '#');
		}
}

function page_content_opacity(type){
	var current_opacity = $('#container_content').css('opacity');
	if(type<1 && current_opacity==1)
		{
			$('#container_content').animate({
				opacity: type},time);
			content_opacity_status = 'low';
		}
	else if(type==1 && current_opacity<1)
		{
			$('#container_content').animate({
				opacity:type}, time);
			content_opacity_status = 'full';
		}	
}

function open_area_click(){
	if(current_projects_status == 'outside' && contact_status == 'outside' && content_opacity_status !='full')
		{
			$('#current_projects .slide_container').fadeOut(time);
			$('#contact .contact').fadeOut(time);
			page_content_opacity(1);
		}
	if(contact_status == 'outside')
		$('#contact .contact').fadeOut(time);
}$(document).ready(function(){
	$('#skills div').hover(function(){
		var index = $(this).index();
		dropdown = setTimeout(function(){li_dropdown('show', index)}, 800);
	}, function(){
		clearTimeout(dropdown);
		li_dropdown()
	});
});

function li_dropdown(type, index){
	if(type=='show')
		{
			index--;
			var element = $('#skills div:eq(' + index + ')').children('li');
			// element.animate({max-width: '100%'}, time);
			element.slideToggle(time);
		}
	else
		{
			$('#skills div li').fadeOut(time);
		}

	
}$(document).ready(function(){
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
	
}$(document).ready(function(){

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
}// THIS .click get content and put it in the bottom piece!
$(document).ready(function(){
	$('#portfolio_blurb .content:first').show();
	
	$('#portfolio_blurb .trigger').click(function(){
		$('#portfolio_blurb .content:first').next().fadeOut(time);
			var current = $('#portfolio_blurb .content:first').css('display');
			if(current=='none')
				$('#portfolio_blurb .content:first').fadeIn(time);
			else
				$('#portfolio_blurb .content').fadeOut(time);
	});
	
	$('#portfolio .slide').click(function(){
		var data = $(this).children('.content').html();
			portfolio_change(data);
	});
// 	END DOCUMENT READY FUNCTION
});

function portfolio_change(data){
	var element = $('#portfolio_blurb .content:first');
	element.fadeOut(time);
	element.next().html(" ");	
	element.next().delay(time).fadeIn(time).html(data);
}