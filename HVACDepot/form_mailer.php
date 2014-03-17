
<?php

/* These are the variable that tell the subject of the email and where the email will be sent.*/

$emailSubject = 'Question from HVACDepot.com';
$mailto = 'mike.harmanos@gmail.com';

/* These will gather what the user has typed into the fieled. */

$nameField = $_POST['name'];
$emailField = $_POST['email'];
$questionField = $_POST['question'];
$phoneField = $_POST['phone'];

/* This takes the information and lines it up the way you want it to be sent in the email. */

$body = <<<EOD
<br><hr><br>
Name: $name <br>
Email: $email <br>
Phone: $phone <br>
Question: $question <br>
EOD;

$headers = "From: $email\r\n"; // This takes the email and displays it as who this email is from.
$headers .= "Content-type: text/html\r\n"; // This tells the server to turn the coding into the text.
$success = mail($mailto, $emailSubject, $body, $headers); // This tells the server what to send.

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Form Mailer</title>
</head>

<body>
<form id="form1" name="form1" method="post" action="form_mailer.php">
<table width="455" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="175" height="44" align="center"><label for"name">name</label></td>
    <td width="280"><input name="name" type="text" id="name" size="30" />
      </td>
  </tr>
  <tr>
    <td height="45" align="center"><label for="email">email</label></td>
    <td><input name="email" type="text" id="email" size="30" /></td>
  </tr>
  <tr>
    <td height="41" align="center"><label for="question">question</label></td>
    <td><textarea name="question" cols="30" rows="5" id="question"></textarea></td>
  </tr>
  <tr>
    <td height="38">&nbsp;</td>
    <td><label>
      <input type="submit" name="Submit" id="Submit" value="Submit" />
    </label></td>
  </tr>
</table>

</form>
</body>
</html>