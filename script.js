// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear previous content
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
            `;
            cartContainer.appendChild(div);
        });
    }
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        localStorage.removeItem('cart');
        alert("Order placed successfully!");
        cart = []; // Clear the cart array
        displayCart(); // Update the cart view
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    displayCart();
}

function toggleCart() {
    const productList = document.getElementById('product-list');
    const cartSection = document.getElementById('cart-section');
    const viewCartBtn = document.getElementById('view-cart-btn');

    if (cartSection.style.display === 'none') {
        // Show cart section and hide product list
        productList.style.display = 'none';
        cartSection.style.display = 'block';
        viewCartBtn.innerText = 'Back to Products';
    } else {
        // Show product list and hide cart section
        productList.style.display = 'block';
        cartSection.style.display = 'none';
        viewCartBtn.innerText = 'View Cart';
    }

    displayCart();
}

// Display cart on page load
displayCart();
