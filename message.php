
<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$subject = 'message from my website';
	$to = 'molefemcoco@gmail.com';

	$dbc = mysqli_connect('localhost', 'id3172322_faizo', 'Faizo4apple', 'id3172322_siteforms')
			or die('error connection to my sql');

	$query = "INSERT INTO data ( name , email , message )VALUES( '$name' , '$email' , '$message' )";
			

	$result = mysqli_query($dbc,$query)
				or die('Error querying database.');

	mysqli_close($dbc);

	mail($to,$subject,$name\n.$message,'from'.$email)

	 echo 'Thank you the form was successfully submitted.';
?>
