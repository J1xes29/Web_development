// Show profile popup when profile icon is clicked
document.querySelector('.header-icon.profile a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('profile-popup').classList.remove('hidden');
});

// Close profile popup
document.getElementById('close-profile-popup').addEventListener('click', function() {
    document.getElementById('profile-popup').classList.add('hidden');
});

// Handle login validation
document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let errors = [];

    if (email === '' || !email.includes('@')) {
        errors.push('A valid Email is required.');
    }
    if (password === '') {
        errors.push('Password is required.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Login successful!');
        document.getElementById('profile-popup').classList.add('hidden');
    }
});

// Handle registration link
document.getElementById('register-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirecting to registration form...');
});

// Close thank-you popup and return to home
document.getElementById('return-home-btn').addEventListener('click', function() {
    window.location.href = 'home.html';
});
