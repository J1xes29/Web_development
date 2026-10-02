document.addEventListener('DOMContentLoaded', function() {
    const getElement = function(id) {
        return document.getElementById(id);
    };

    const openPopup = function(buttonId, popupId) {
        const button = getElement(buttonId);
        const popup = getElement(popupId);

        if (button && popup) {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                popup.classList.remove('hidden');
            });
        }
    };

    const closePopup = function(buttonId, popupId) {
        const button = getElement(buttonId);
        const popup = getElement(popupId);

        if (button && popup) {
            button.addEventListener('click', function() {
                popup.classList.add('hidden');
            });
        }
    };

    openPopup('add-to-card-btn', 'add-to-cart-popup');
    openPopup('add-to-bag-btn', 'add-to-bag-popup');
    closePopup('close-cart-popup', 'add-to-cart-popup');
    closePopup('close-bag-popup', 'add-to-bag-popup');
    closePopup('close-success-bag-popup', 'success-bag-popup');

    const confirmBagButton = getElement('confirm-bag-btn');
    const bagPopup = getElement('add-to-bag-popup');
    const successPopup = getElement('success-bag-popup');
    if (confirmBagButton && bagPopup && successPopup) {
        confirmBagButton.addEventListener('click', function() {
            bagPopup.classList.add('hidden');
            successPopup.classList.remove('hidden');
        });
    }

    const orderButton = getElement('order-btn');
    const cartPopup = getElement('add-to-cart-popup');
    const thankYouPopup = getElement('thank-you-popup');
    if (orderButton && cartPopup && thankYouPopup) {
        orderButton.addEventListener('click', function() {
            cartPopup.classList.add('hidden');
            thankYouPopup.classList.remove('hidden');
        });
    }

    const returnHomeButton = getElement('return-home-btn');
    if (returnHomeButton) {
        returnHomeButton.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
    }

    const priceElement = getElement('detail-bag-price');
    const price = priceElement
        ? Number.parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ''))
        : Number.NaN;

    if (!Number.isFinite(price)) {
        return;
    }

    [
        ['cart-quantity', 'cart-total'],
        ['bag-quantity', 'bag-total']
    ].forEach(function(ids) {
        const quantityInput = getElement(ids[0]);
        const totalElement = getElement(ids[1]);

        if (!quantityInput || !totalElement) {
            return;
        }

        const updateTotal = function() {
            const quantity = Math.max(1, Number.parseInt(quantityInput.value, 10) || 1);
            quantityInput.value = String(quantity);
            totalElement.textContent = '$' + (price * quantity).toLocaleString('en-US', {
                maximumFractionDigits: 2
            });
        };

        quantityInput.addEventListener('input', updateTotal);
        updateTotal();
    });
});
