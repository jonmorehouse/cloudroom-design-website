// THIS .click get content and put it in the bottom piece!
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