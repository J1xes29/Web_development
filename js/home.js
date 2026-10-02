const profilePopup = document.getElementById('profile-popup');
const profileLink = document.querySelector('.header-icon.profile a');
const closeProfileButton = document.getElementById('close-profile-popup');

if (window.location.hash === '#profile-popup' && profilePopup) {
    profilePopup.classList.remove('hidden');
}

if (profileLink && profilePopup) {
    profileLink.addEventListener('click', function(event) {
        event.preventDefault();
        profilePopup.classList.remove('hidden');
    });
}

if (closeProfileButton && profilePopup) {
    closeProfileButton.addEventListener('click', function() {
        profilePopup.classList.add('hidden');
    });
}

const loginButton = document.getElementById('login-btn');
if (loginButton && profilePopup) {
    loginButton.addEventListener('click', function() {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const errors = [];

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
            profilePopup.classList.add('hidden');
        }
    });
}

const registerLink = document.getElementById('register-link');
if (registerLink) {
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Redirecting to registration form...');
    });
}

const returnHomeButton = document.getElementById('return-home-btn');
if (returnHomeButton) {
    returnHomeButton.addEventListener('click', function() {
        window.location.href = 'home.html';
    });
}
