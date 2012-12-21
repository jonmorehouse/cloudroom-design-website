<?php

class Contact extends CI_Controller{
	
	function __construct()
	{
		parent::__construct();
		$this->config->load('resources');
	}
	
	function contact_email(){
	// VARIABLE DECLARATIONS
		$message = $this->input->post('message');
		$email = $this->input->post('email');
		$email_message = "\n\nMessage from: " . $email
			. "\nMessage: " . $message
			. "\n**END MESSAGE**\n\n";
		$subject = "CloudRoomDesign Contact Message";
	
	// SENDING MAIL
		$email_recipients = $this->config->item('administrator_email');
		foreach($email_recipients as $value)
			mail($value, $subject, $email_message);
		
	//AJAX RETURN
		echo "<h1>Thank you for contacting CloudRoomDesign.</h1>";
	}	
}