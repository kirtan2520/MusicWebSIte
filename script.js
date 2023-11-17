document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = form.email.value;
        const mobile = form.mobile.value;
        const address = form.address.value;

        if (validateEmail(email) && validateMobile(mobile)) {
            // Form data is valid; you can send the data to your server or perform other actions here.
            alert("Booking successful!");
            form.reset(); // Clear the form after successful submission.
        }
    });

    function validateEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }

    function validateMobile(mobile) {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    }
});
