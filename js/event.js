// Add fade-in animation on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in').forEach(function(element) {
        element.classList.add('active');
    });
});

// Show popup when "Regist Here" is clicked
document.getElementById('event-register-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registration-popup').classList.remove('hidden');
});

// Close popup
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('registration-popup').classList.add('hidden');
});

// Form validation and submission
document.getElementById('submit-btn').addEventListener('click', function() {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const birthDate = document.getElementById('birth-date').value.trim();
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;

    let errors = [];

    if (fullName === '') {
        errors.push('Full Name is required.');
    }
    if (email === '' || !email.includes('@')) {
        errors.push('A valid Email is required.');
    }
    if (phoneNumber === '' || isNaN(phoneNumber)) {
        errors.push('A valid Phone Number is required.');
    }
    if (birthDate === '') {
        errors.push('Birth Date is required.');
    }
    if (gender === '') {
        errors.push('Gender is required.');
    }
    if (!terms) {
        errors.push('You must agree to the Terms of Service.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        document.getElementById('registration-popup').classList.add('hidden');
        document.getElementById('thank-you-popup').classList.remove('hidden');
    }
});

// Close thank-you popup and return to home
document.getElementById('return-home-btn').addEventListener('click', function() {
    window.location.href = 'home.html';
});
