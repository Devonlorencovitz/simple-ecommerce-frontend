document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.forEach(item => {
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <h3>Product ${item.productId}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${item.quantity * 10}</p>
        `;
        cartList.appendChild(productElement);
    });

    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * 10, 0);
    totalPriceElement.textContent = totalPrice;
});
