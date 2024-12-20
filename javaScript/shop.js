document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation menu toggle
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const navbar = document.getElementById("navber");
  
    if (bar) {
      bar.addEventListener("click", () => {
        navbar.classList.add("active");
      });
    }
  
    if (close) {
      close.addEventListener("click", () => {
        navbar.classList.remove("active");
      });
    }
  
    // Add to cart functionality (placeholder action)
    const cartButtons = document.querySelectorAll(".cart");
    cartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Item added to cart!");
      });
    });
  
    // Smooth scrolling for pagination links
    const paginationLinks = document.querySelectorAll("#pagination a");
    paginationLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = event.target;
        if (target.getAttribute("href") === "#") {
          alert("Pagination link clicked"); // Placeholder action
        }
      });
    });
  
    // Newsletter form submission
    const newsletterForm = document.querySelector("#newsletter .form");
    const emailInput = newsletterForm.querySelector("input");
    const signUpButton = newsletterForm.querySelector("button");
  
    signUpButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (emailInput.value.trim() === "") {
        alert("Please enter a valid email address.");
      } else {
        alert(`Thank you for signing up, ${emailInput.value.trim()}!`);
        emailInput.value = "";
      }
    });
  });
  