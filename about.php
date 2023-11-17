<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rating = $_POST['rating']; // Rating value received from the client
    // Store the rating in your database or perform any other necessary operations.
    // Ensure proper security measures when interacting with a database.
    echo "Rating of $rating saved successfully!";
} else {
    http_response_code(405); // Method not allowed
}
?>
