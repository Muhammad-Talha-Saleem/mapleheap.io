function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../contact.php", true); // Change the URL to your server-side script
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // Adjusted content type

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Email sent successfully
                alert("Email sent successfully!");
                // Optionally, you can reset the form here
            } else {
                // Error sending email
                alert("Failed to send email. Please try again later.");
            }
        }
    };

    var data = "name=" + encodeURIComponent(name) +
               "&email=" + encodeURIComponent(email) +
               "&message=" + encodeURIComponent(message);
    xhr.send(data);
}
