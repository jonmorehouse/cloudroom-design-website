<div id='contact'>
	<div class='trigger'>
		<span>
		<?php
			$string = 'contact';
			$letters = str_split($string);
				foreach($letters as $value)
					echo $value . "<br>";
		?>
		</span>
	</div>
	
	<div class='contact'>

		<h1>Contact CloudRoom Design</h1>

		<div class='content'>
			<?php
			$this->load->view('site_wide/contact/email');
			$this->load->view('site_wide/contact/facebook_temp');
			$this->load->view('site_wide/contact/linkedin_temp');
			$this->load->view('site_wide/contact/twitter_temp');
			$this->load->view('site_wide/contact/phone');
			?>
			<div class='message'></div>
		</div>
	
		<div class='tab'>
			<li class='email'><img src='<?php echo base_url('resources/images/icons/email.png');?>' alt='email_icon' /></li>
			<li class='phone'><img src='<?php echo base_url('resources/images/icons/phone.png');?>' alt='phone_icon' /></li>
			<li class='facebook'><img src='<?php echo base_url('resources/images/icons/facebook.png');?>' alt='facebook_icon' /></li>
			<li class='linkedin'><img src='<?php echo base_url('resources/images/icons/linkedin.png');?>' alt='linked_icon' /></li>
			<li class='twitter'><img src='<?php echo base_url('resources/images/icons/twitter.png');?>' alt='twitter_icon' /></li>
		</div>
	</div>
</div>