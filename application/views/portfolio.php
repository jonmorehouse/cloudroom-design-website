<?php
	$this->header->index($id, $page_title, $css, $javascript);
	$this->load->view('site_wide/border');
	$this->load->view('site_wide/background');
	$this->load->view('site_wide/navigation_bar');
	$this->load->view('site_wide/contact/contact');
?>

<div id='container'>
	<div id='container_content'>
		<!-- WE WILL PUT A DIV INSIDE EACH SLIDE AND THEN PUT THEM  -->
		
		
		<div id='portfolio'>
			<h1>Coming Soon!</h1>
			<h2>Our portfolio is still a work in progress. Please contact us to see work for now!</h2>
			<!-- <?php
							for($i=1; $i<=6; $i++)
								$this->load->view('portfolio/portfolio_slide_' . $i);
						?> -->
		</div>
	
		<div id='portfolio_blurb'>
			<h1 class='trigger'>CloudRoomDesign<br>Portfolio</h1>
		
			<!-- FIRST CLASS IS THE CONTENT THAT GOES IN ORIGINALLY/KIND OF LIKE THE OVERVIEW -->

			<div class='content'>
				<?php $this->load->view('portfolio/portfolio_blurb');?>
			</div>
			
			<div class='content'>
			</div>
			
		</div>
		
	</div>
</div>