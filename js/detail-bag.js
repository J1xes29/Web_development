document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('add-to-card-btn');
    const addToBagBtn = document.getElementById('add-to-bag-btn');
    const cartPopup = document.getElementById('add-to-cart-popup');
    const bagPopup = document.getElementById('add-to-bag-popup');
    const successPopup = document.getElementById('success-bag-popup');
    const thankYouPopup = document.getElementById('thank-you-popup');
    const closeCartPopupBtn = document.getElementById('close-cart-popup');
    const closeBagPopupBtn = document.getElementById('close-bag-popup');
    const closeSuccessPopupBtn = document.getElementById('close-success-bag-popup');
    const returnHomeBtn = document.getElementById('return-home-btn');

    // Show add to cart popup
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            cartPopup.classList.remove('hidden');
        });
    }

    // Show add to bag popup
    if (addToBagBtn) {
        addToBagBtn.addEventListener('click', function () {
            bagPopup.classList.remove('hidden');
        });
    }

    // Close add to cart popup
    if (closeCartPopupBtn) {
        closeCartPopupBtn.addEventListener('click', function () {
            cartPopup.classList.add('hidden');
        });
    }

    // Close add to bag popup
    if (closeBagPopupBtn) {
        closeBagPopupBtn.addEventListener('click', function () {
            bagPopup.classList.add('hidden');
        });
    }

    // Show success popup after adding to bag
    const confirmBagBtn = document.getElementById('confirm-bag-btn');
    if (confirmBagBtn) {
        confirmBagBtn.addEventListener('click', function () {
            bagPopup.classList.add('hidden');
            successPopup.classList.remove('hidden');
        });
    }

    // Close success popup
    if (closeSuccessPopupBtn) {
        closeSuccessPopupBtn.addEventListener('click', function () {
            successPopup.classList.add('hidden');
        });
    }

    // Close thank you popup and return to home
    if (returnHomeBtn) {
        returnHomeBtn.addEventListener('click', function () {
            thankYouPopup.classList.add('hidden');
            window.location.href = 'home.html';
        });
    }
});

// Update total price in the cart
document.getElementById('cart-quantity').addEventListener('input', function() {
    updateCartTotal();
});

function updateCartTotal() {
    const quantity = parseInt(document.getElementById('cart-quantity').value) || 1;
    const price = 2500; // Price of the item
    const total = quantity * price;
    document.getElementById('cart-total').textContent = `$${total}`;
}

// Show thank-you popup after ordering
document.getElementById('order-btn').addEventListener('click', function() {
    document.getElementById('add-to-cart-popup').classList.add('hidden');
    document.getElementById('thank-you-popup').classList.remove('hidden');
});

// Close thank-you popup and return to home
document.getElementById('return-home-btn').addEventListener('click', function() {
    window.location.href = 'home.html';
});

// Update total price in the bag
document.getElementById('bag-quantity').addEventListener('input', function() {
    updateBagTotal();
});

function updateBagTotal() {
    const quantity = parseInt(document.getElementById('bag-quantity').value) || 1;
    const price = 2500; // Price of the item
    const total = quantity * price;
    document.getElementById('bag-total').textContent = `$${total}`;
}
