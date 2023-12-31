<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
// header('Access-Control-Allow-Origin: *');

if(isset[$_POST]){

        $name=$_POST['name'];
        $mobile=$_POST['mobile'];
        $email=$_POST['email'];
        $message=$_POST['message'];
        $rating=$_POST['rating'];

        echo $response=json_encode(array($status=$_POST));
    
}



function emailing($name,$email){
    $mail = new PHPMailer(true);
    //email configuration                 
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ajmalkhan49256@gmail.com';                     //SMTP username
    $mail->Password   = 'xdjkihzqiroxrles';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465; 
    // email send and recive from 
    $mail->setFrom('ajmalkhan49256@gmail.com');
    $mail->addAddress('ajmalkhan49256@gmail.com');
    $mail->isHTML(true);    
    $mail->Subject='zontravel';
    $mail->Body='Thank you for contacting us our team is get back to you';
    // $mail->send();
    // if($mail->send()){
    //     echo "email send successfully";
    // }else{
    //     echo "email not send successfully";

    // }
    // $mail->clearAllRecipients( );
    return true;
}


?>