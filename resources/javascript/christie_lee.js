$(window).load(function(){
	$('#current_projects .slide_container').children('.slide:first').show();
		gallery_load();
	
	// THE FOLLOWING IS NOT NECESSARY BECAUSE IT IS NOT LOADING THE CLICK BUTTONS LATER!
	// $('#current_projects').on('click', '.next, .previous', function(){
	// 	var direction;
	// 	direction = $(this).attr('class');
	// 	current_project_slide(direction);
	// });
});

function gallery_load(){	
	url = base_url + 'christie_lee/gallery_loader';

	$.ajax({
			url: url,
			type: 'get',
			success:function(msg){
				$('#current_projects .slide_container').prepend(msg);
			}
	});
}