document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form
    let isValid = true;

    if (name.length < 5) {
        showError('nameError', 'Name must not be less than 5 characters.');
        isValid = false;
    }

    if (!email.includes('@')) {
        showError('emailError', 'Email Id should have @ character in it.');
        isValid = false;
    }

    if (phone === '123456789' || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
        showError('phoneError', 'Phone number must be a valid 10-digit number and not 123456789.');
        isValid = false;
    }

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
        showError('passwordError', 'Password cannot be "password", "name of the user", or less than 8 characters.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Password and confirm password should match.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block'; 
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.form-text.text-danger');
    errorElements.forEach(element => {
        element.innerText = '';
        element.style.display = 'none'; 
    });
}
