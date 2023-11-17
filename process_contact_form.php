<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $eventDate = $_POST["event_date"];
    $eventTime = $_POST["event_time"];

    // Create the email message
    $to = "your_email@example.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Event Date: $eventDate\n";
    $message .= "Event Time: $eventTime\n";

    // Send the email
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission. We will contact you shortly.";
    } else {
        echo "Sorry, there was an error. Please try again later.";
    }
} else {
    // If the form was not submitted via POST, redirect or display an error message.
    echo "Invalid request.";
}
?>
