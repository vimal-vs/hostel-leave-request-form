<?php
$to = 'vimalchan24@gmail.com';
$subject = 'test';
$message = 'test'; 
$from = 'srmisthostelreqform@gmail.com';
 
// Sending email
if(mail($to, $subject, $message)){
    echo 'Your mail has been sent successfully.';
} else{
    echo 'Unable to send email. Please try again.';
}
?>