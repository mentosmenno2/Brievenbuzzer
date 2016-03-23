<?php

if ($_GET["to"] <> "" && $_GET["msg"] <> "" && $_GET["subject"] <> "")
{
	$to = $_GET["to"];
	$msg = $_GET["msg"];
	$subj = $_GET["subject"];
	
	$result = mail($to, $subj, $msg);
	
	print("Sent successfully: " . $result);
}

?>