function toggleForms() {
        var loginForm = document.getElementById('loginForm');
        var signupForm = document.getElementById('signupForm');
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    }

    function validateLogin() {
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;
        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return false;
        }
        alert('Login successful!');
    }

    function validateSignup() {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
            return false;
        }
        alert('Sign-up successful!');
    }