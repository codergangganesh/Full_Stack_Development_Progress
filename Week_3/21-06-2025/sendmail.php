<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mannamganeshbabu8@gmail.com"; // Replace with your email
    $subject = "New Product Enquiry";

    // Sanitize inputs
    $name     = htmlspecialchars($_POST["name"]);
    $email    = htmlspecialchars($_POST["email"]);
    $phone    = htmlspecialchars($_POST["phone"]);
    $address  = htmlspecialchars($_POST["address"]);
    $district = htmlspecialchars($_POST["district"]);
    $enquiry  = htmlspecialchars($_POST["enquiry"]);

    $message = "You have received a new enquiry:\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Address: $address\n";
    $message .= "District: $district\n";
    $message .= "Enquiry: $enquiry\n";

    $headers = "From: $email";

    // Optional: Save uploaded image path (not as attachment)
    if (isset($_FILES['productImage']) && $_FILES['productImage']['error'] === 0) {
        $uploadDir = "uploads/";
        if (!is_dir($uploadDir)) mkdir($uploadDir);
        $filePath = $uploadDir . basename($_FILES["productImage"]["name"]);
        if (move_uploaded_file($_FILES["productImage"]["tmp_name"], $filePath)) {
            $message .= "\nImage uploaded: " . $filePath;
        }
    }

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your enquiry has been sent successfully!";
    } else {
        echo "Mail sending failed. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
