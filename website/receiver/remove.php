<?php

if ($_GET["remove"] <> "")
{
	$file=fopen("messages.txt","r") or exit("Unable to open file!");

	$contents = fread($file, filesize("messages.txt"));

	$removed = str_replace($_GET["remove"], "", $contents);
	
	fclose($file);
	
	$file=fopen("messages.txt", "w+") or exit("couldn't open file for writing");
	
	foreach (explode("\n", $removed) as $line) 
	{
		if($line <> "")
		{
			if($line <> "\n")
				fwrite($file,str_replace("\n", "", $line)."\n");
		}
	}
	
	fclose($file);
}
?>
