<?php
// Retrieve form data
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

// Send email
$to = "talha.solutionq786@gmail.com"; // Change to your email address
$subject = "New Contact Form Submission";
$body = "Name: $name\nEmail: $email\nMessage: $message";

if (mail($to, $subject, $body)) {
    http_response_code(200);
} else {
    http_response_code(500);
}
?>
