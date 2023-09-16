// script.js

function signIn() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform your sign-in logic here (e.g., validate credentials, make API requests)

    // For this example, let's simply display an alert with the entered username
    alert("Welcome, " + username + "!");
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('startRideBtn').addEventListener('click', function () {
        // Get the entered starting and ending locations
        var startLocation = document.getElementById('startLocation').value;
        var endLocation = document.getElementById('endLocation').value;

        // Perform any validation or processing as needed
        if (startLocation && endLocation) {
            // Simulate driver details (you can replace this with real data)
            var driverInfo = {
                name: "John Doe",
                email: "john@example.com",
                mobile: "123-456-7890",
                feedback: "Excellent driver",
                license: "ABC123",
                rating: "4.8"
            };

            // Populate the driver details in the HTML
            document.getElementById('driverName').textContent = driverInfo.name;
            document.getElementById('driverEmail').textContent = driverInfo.email;
            document.getElementById('driverMobile').textContent = driverInfo.mobile;
            document.getElementById('driverFeedback').textContent = driverInfo.feedback;
            document.getElementById('driverLicense').textContent = driverInfo.license;
            document.getElementById('driverRating').textContent = driverInfo.rating;

            // Show the driver details section
            document.querySelector('.driver-details').style.display = 'block';
        } else {
            alert('Please enter both starting and ending locations.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const aadharCardInput = document.getElementById('aadharCard');

    aadharCardInput.addEventListener('input', function () {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Rest of your code...
});
