document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateUsername() && validateEmail() && validatePassword()) {
            // Form is valid, submit it
            alert('Form submitted successfully!');
            // You can also submit the form programmatically using:
            // form.submit();
        }
    });
    
    function validateUsername() {
        const usernameValue = username.value.trim();
        
        if (usernameValue === '') {
            displayError(username, 'Username is required');
            return false;
        } else {
            displayError(username, '');
            return true;
        }
    }
    
    function validateEmail() {
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            displayError(email, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            displayError(email, 'Email is invalid');
            return false;
        } else {
            displayError(email, '');
            return true;
        }
    }
    
    function validatePassword() {
        const passwordValue = password.value.trim();
        
        if (passwordValue.length < 6) {
            displayError(password, 'Password must be at least 6 characters');
            return false;
        } else {
            displayError(password, '');
            return true;
        }
    }
    
    function displayError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
    }
});
