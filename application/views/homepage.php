<?php
// HOMEPAGE VIEW COMPILATION
	$this->header->index($id, $page_title, $css, $javascript);
	$this->load->view('site_wide/border');
	$this->load->view('site_wide/background');
	$this->load->view('site_wide/navigation_bar');
	$this->load->view('homepage/about_box');
	$this->load->view('site_wide/contact/contact');
?>

