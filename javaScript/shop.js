document.addEventListener('DOMContentLoaded', () => {
    // Get cart button elements
    const cartButtons = document.querySelectorAll('.cart');
    // const cartCountElement = document.querySelector('.fa-bag-shopping');

    // Simulated cart storage (replace with actual cart logic if needed)
    let cartCount = 0;

    // Update cart count display
    const updateCartCount = () => {
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        } else {
            const cartIcon = document.querySelector('.fa-bag-shopping');
            if (cartIcon) {
                const countElement = document.createElement('span');
                countElement.classList.add('cart-count');
                countElement.textContent = cartCount;
                // cartIcon.appendChild(countElement);
            }
        }
    };

    // Add event listener to all cart buttons
    cartButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link action
            cartCount++;
            updateCartCount();
            alert('Item added to cart!');
        });
    });

    // Initialize cart count display
    updateCartCount();
});


// Email validation and submission

document.querySelector('.form .normal').addEventListener('click', function () {
    const emailInput = document.querySelector('.form input[type="text"]');
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Thank you for signing up with the email: ${email}`);
    emailInput.value = ""; // Clear the input field
});
