<!-- THIS FILE USES current_projects.js -->

<span class='trigger'>
	<?php 
		$counter = 5;
		echo ucwords(str_replace('_', ' ', $id, $counter));
	?>'s <br>Current Projects</span>

<div class='slide_container'>
	<div class='slide'>
		<?php 
		$this->load->view($id . '/current/' . $id . '_current_1.php'); 
		?>
	</div>
			
	<div class='slide'>
	<?php
	 $this->load->view($id . '/current/' . $id . '_current_2.php'); ?>
	</div>
			
	<div class='slide'>
		<?php 
		$this->load->view($id. '/current/' . $id . '_current_3.php'); ?>
	</div>
	<!-- TO ADD ANOTHER SLIDE, simply recreate the above and continue counter. File will go in id/current/id_current_*.php -->
	
	<div class='previous'>
		<img alt='previous' src='<?php echo base_url('resources/images/previous.png');?>' />
	</div>
	
	<div class='next'>
		<img alt='next' src='<?php echo base_url('resources/images/next.png');?>' />
	</div>
</div>