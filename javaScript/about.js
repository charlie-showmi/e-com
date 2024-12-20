// Select elements
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navber');
const emailInput = document.querySelector('.form input');
const signUpButton = document.querySelector('.form button');
const marquee = document.querySelector('marquee');

// Mobile menu toggle
if (bar) {
    bar.addEventListener('click', () => {
        navbar.style.right = '0';
    });
}

if (close) {
    close.addEventListener('click', () => {
        navbar.style.right = '-100%';
    });
}

// Email validation and submission
signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert('Thank you for signing up!');
        emailInput.value = ''; // Clear input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Pause marquee on hover
if (marquee) {
    marquee.addEventListener('mouseover', () => marquee.stop());
    marquee.addEventListener('mouseout', () => marquee.start());
}
