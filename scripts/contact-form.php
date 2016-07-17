<?php

$emailFrom = "estellahom@gmail.com";
$emailTo = "estellahom@gmail.com";
$subject = "You've got mail!";
$name = Trim(stripslashes($_POST['name']));
// $Tel = Trim(stripslashes($_POST['Tel']));
$email = Trim(stripslashes($_POST['email']));
$message = Trim(stripslashes($_POST['message']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$body = "";
$body .= "Name: ";
$body .= $name;
$body .= "\n";
// $body .= "Tel: ";
// $body .= $Tel;
// $body .= "\n";
$body .= "Email: ";
$body .= $email;
$body .= "\n";
$body .= "\n";
$body .= "Message: ";
$body .= $message;
$body .= "\n";

// send email
$success = mail($emailTo, $subject, $body, "From: <$emailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=../contact-thanks.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>
