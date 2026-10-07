const cartItems = document.querySelectorAll('.cart-item');
const cartTotalQtyEl = document.getElementById('cart-total-qty');
const sidebarTotalQtyEl = document.getElementById('sidebar-total-qty');
const sidebarTotalPriceEl = document.getElementById('sidebar-total-price');

function updateCart() {
    let globalQty = 0;
    let globalPrice = 0;

    cartItems.forEach(item => {
        const basePrice = parseFloat(item.getAttribute('data-price'));
        const qtyInput = item.querySelector('.qty-input');
        const itemTotalValueEl = item.querySelector('.item-total-value');

        let qty = parseInt(qtyInput.value);
        if (isNaN(qty) || qty < 1) {
            qty = 1;
            qtyInput.value = 1;
        }

        const itemTotalPrice = basePrice * qty;
        itemTotalValueEl.textContent = itemTotalPrice.toFixed(2);

        globalQty += qty;
        globalPrice += itemTotalPrice;
    }); // <-- Chú ý: Phải có đủ cả } và )

    cartTotalQtyEl.textContent = globalQty;
    sidebarTotalQtyEl.textContent = globalQty;
    sidebarTotalPriceEl.textContent = globalPrice.toFixed(2);
}

cartItems.forEach(item => {
    const btnDecrease = item.querySelector('.btn-decrease');
    const btnIncrease = item.querySelector('.btn-increase');
    const qtyInput = item.querySelector('.qty-input');

    btnDecrease.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value);
        if (currentQty > 1) {
            qtyInput.value = currentQty - 1;
            updateCart();
        }
    }); // <-- Chú ý dấu đóng

    btnIncrease.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value);
        qtyInput.value = currentQty + 1;
        updateCart();
    }); // <-- Chú ý dấu đóng

    qtyInput.addEventListener('change', () => {
        updateCart();
    }); // <-- Chú ý dấu đóng
}); // <-- Chú ý dấu đóng

updateCart();