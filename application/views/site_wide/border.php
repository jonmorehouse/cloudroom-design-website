<!-- BORDERS! -->
<?php
$sides = array(0=>'left', 1=>'right', 2=>'bottom', 3=>'top');
foreach($sides as $value)
	echo "\n<div id='" . $value . "' class='border'></div>";
?>