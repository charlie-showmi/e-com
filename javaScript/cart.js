// Select necessary elements
document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.querySelector('#cart tbody');
    const subtotalElement = document.querySelector('#subtotal table');

    // Function to update the subtotal of a single row
    const updateRowSubtotal = (row) => {
        const price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('$', ''));
        const quantity = parseInt(row.querySelector('input[type="number"]').value);
        const subtotal = price * quantity;
        row.querySelector('td:nth-child(6)').textContent = `$${subtotal.toFixed(2)}`;
        return subtotal;
    };

    // Function to calculate and update the total
    const updateCartTotal = () => {
        let total = 0;
        cartTable.querySelectorAll('tr').forEach(row => {
            total += updateRowSubtotal(row);
        });
        subtotalElement.querySelector('tr:nth-child(1) td:nth-child(2)').textContent = `$${total.toFixed(2)}`;
        subtotalElement.querySelector('tr:nth-child(3) td:nth-child(2)').textContent = `$${total.toFixed(2)}`;
    };

    // Event listener for quantity changes
    cartTable.addEventListener('input', (event) => {
        if (event.target.type === 'number') {
            updateCartTotal();
        }
    });

    // Event listener for removing items
    cartTable.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            const row = event.target.closest('tr');
            row.remove();
            updateCartTotal();
        }
    });

    // Initial calculation of totals
    updateCartTotal();

    // Handle coupon application
    const couponInput = document.querySelector('#coupon input');
    const couponButton = document.querySelector('#coupon button');
    couponButton.addEventListener('click', () => {
        const couponCode = couponInput.value.trim();
        if (couponCode === 'SAVE10') {
            let total = parseFloat(subtotalElement.querySelector('tr:nth-child(3) td:nth-child(2)').textContent.replace('$', ''));
            total *= 0.9; // Apply a 10% discount
            subtotalElement.querySelector('tr:nth-child(3) td:nth-child(2)').textContent = `$${total.toFixed(2)}`;
            alert('Coupon applied! You saved 10%.');
        } else {
            alert('Invalid coupon code.');
        }
    });
});
