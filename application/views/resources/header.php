<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">

<head>
	<meta http-equiv="X-UA-Compatible" value="IE=9">
	<meta http-equiv="X-UA-Compatible" value="IE=8">
	<meta http-equiv="X-UA-Compatible" value="IE=7">
	<meta name='description' content='CloudRoom Design is a web development company based out of Los Angeles. Run by USC student Jon Morehouse CloudRoom can complete any programming project imaginable.' />
	<meta name='keywords' content='Web Design, Web Development, Programming, Apps, Iphone, Android, Ios, CSS, HTML, CSS3, HTML5 PHP, SQL, NOSQL, RUBY, NODE' />

<title><?php echo $page_title;?></title>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<?php

	foreach($css as $value)//NEED TO PUT SOMETHING IN HERE TO ACCOUNT FOR LESS VS CSS
		echo "\n\t<link rel='stylesheet" . $site_status . "' type='text/css' href='"
			. base_url('resources/css/' . $value)
			. "' />";

	echo "\n\n\t<script type='text/javascript'>\n\t\tbase_url='" . site_url('/') . "';\n\t</script>";

	foreach($javascript as $value)
			echo"\n\t<script type='text/javascript' src='"
				. base_url('resources/javascript/' . $value)
				. "'></script>";
	echo "\n";
	?>
</head>

<body>