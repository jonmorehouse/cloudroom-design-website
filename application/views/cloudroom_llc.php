<?php
$this->header->index($id, $page_title, $css, $javascript);
$this->load->view('site_wide/border');
$this->load->view('site_wide/background');
$this->load->view('site_wide/navigation_bar');
$this->load->view('site_wide/contact/contact');
?>

<div id='container'>
	<div id='container_content'>
		<div id='cloudroom_llc'>
			<?php $this->load->view('cloudroom/content');?>
		</div>
	</div>
</div>