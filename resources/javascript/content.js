$(document).ready(function(){
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

	
}