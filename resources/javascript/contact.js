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
		var current, type;
		type = $(this).attr('class');
		contact_content(type);
		current_tab(current, type);
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
}

function current_tab(current, type){
	if(type=='add')
		current.addClass('current');
	else
		current.removeClass('current');
}
