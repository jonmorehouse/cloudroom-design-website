<?php
// GENERIC SITE WIDE VIEW FILES. IT IS HERE FOR EASE OF USE AND THE ABILITY TO ADD USERS IN THE FUTURE
$this->header->index($id, $page_title, $css, $javascript);
$this->load->view('site_wide/border');
$this->load->view('site_wide/background');
$this->load->view('site_wide/navigation_bar');
$this->load->view('site_wide/contact/contact');
?>

<div id='container'> 
		<!--CONTAINER IS 10% LARGER THAN WIDTH TO HIDE THE SCROLL BAR! -->
	<div id='container_content'>

		<div id='bio'>
			<?php
			$this->load->view($id . '/' . $id . '_bio', $id);
			?>
		</div>
	
		<div id='skills'>
			<h1>
			<?php
			$counter = 3;
			echo ucwords(str_replace('_', ' ', $id , $counter)) . '\'s Skills'; 
			?>
			</h1>
			<?php
			$this->load->view($id . '/' . $id . '_skills', $id);
			?>
		</div>
	</div><!-- END OF CONTAINER_CONTENT -->
</div><!-- END OF CONTAINER-->

<!-- CURRENT PROJECTS GOES INSIDE OF CONTAINER_CONTENT IF YOU WANT IT TO SCROLL WITH THE PAGE -->
<div id='current_projects'>
	<?php
	$this->load->view($id . '/' . $id . '_current', $id);
	?>
</div>



<!-- ID IS PASSED TO EACH VIEW -->
