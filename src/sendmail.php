<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $to = 'anshumansingh13as@gmail.com'; // Specify your email address
    $subject = 'Email Subscription';
    $message = "A user with email $email has subscribed.";
    $headers = 'From: no-reply@example.com' . "\r\n" .
                'Reply-To: no-reply@example.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for subscribing!";
    } else {
        echo "Error in sending email.";
    }
} else {
    // Redirect back or handle as needed
    header('Location: index.html'); // Adjust the redirection location as necessary
    exit;
}
?>