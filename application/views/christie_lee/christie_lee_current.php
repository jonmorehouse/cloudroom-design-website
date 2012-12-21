<span class='trigger'>
	<?php 
		$counter = 5;
		echo ucwords(str_replace('_', ' ', $id, $counter));
	?>'s <br>Artwork</span>

<div class='slide_container'>

<div class='previous'>
		<img alt='previous' src='<?php echo base_url('resources/images/previous.png');?>' />
	</div>
	
	<div class='next'>
		<img alt='next' src='<?php echo base_url('resources/images/next.png');?>' />
	</div>
	<!--GALLERY IMAGES ARE DYNAMICALLY LOADED IN VIA AJAX-->
</div>


