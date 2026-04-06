// Product data with actual images
const products = [
    // Arduino Boards
    {
        id: 1,
        name: "Arduino UNO R3",
        category: "arduino",
        price: 799,
        originalPrice: 999,
        image: "Arduino UNO.webp",
        description: "Microcontroller board based on ATmega328P",
        rating: "★★★★★"
    },
    {
        id: 2,
        name: "Arduino Mega 2560",
        category: "arduino",
        price: 1299,
        originalPrice: 1599,
        image: "Arduino mega.webp",
        description: "High-performance microcontroller with 54 I/O pins",
        rating: "★★★★★"
    },
    {
        id: 3,
        name: "Arduino Nano",
        category: "arduino",
        price: 599,
        originalPrice: 799,
        image: "arduino nano.webp",
        description: "Compact Arduino board for small projects",
        rating: "★★★★★"
    },
    {
        id: 4,
        name: "Arduino Mini",
        category: "arduino",
        price: 499,
        originalPrice: 699,
        image: "arduino mini.webp",
        description: "Ultra-compact microcontroller board",
        rating: "★★★★"
    },
    {
        id: 5,
        name: "Arduino Leonardo",
        category: "arduino",
        price: 899,
        originalPrice: 1199,
        image: "Arduino leonardo.webp",
        description: "Built-in USB connectivity microcontroller",
        rating: "★★★★★"
    },
    // Raspberry Pi Boards
    {
        id: 6,
        name: "Raspberry Pi 3 Model B+",
        category: "raspberry",
        price: 3499,
        originalPrice: 4299,
        image: "RASPBERRY Pi 3 MODEL B+.webp",
        description: "Complete small computer with WiFi and Bluetooth",
        rating: "★★★★★"
    },
    {
        id: 7,
        name: "Raspberry Pi Zero W",
        category: "raspberry",
        price: 1999,
        originalPrice: 2499,
        image: "RASPBERRY Pi Zero W.webp",
        description: "Ultra-compact Raspberry Pi with WiFi",
        rating: "★★★★★"
    },
    {
        id: 8,
        name: "Raspberry Pi Pico",
        category: "raspberry",
        price: 799,
        originalPrice: 999,
        image: "RASPBERRY Pi pico.webp",
        description: "Low-cost microcontroller board with RP2040",
        rating: "★★★★"
    },
    // ESP32 Boards
    {
        id: 9,
        name: "ESP32 DEVKIT",
        category: "esp",
        price: 699,
        originalPrice: 899,
        image: "ESP32 DEVKIT.webp",
        description: "WiFi and Bluetooth enabled development board",
        rating: "★★★★★"
    },
    {
        id: 10,
        name: "ESP-32S NodeMCU",
        category: "esp",
        price: 649,
        originalPrice: 849,
        image: "ESP-32S NodeMCU.webp",
        description: "Popular IoT microcontroller board",
        rating: "★★★★★"
    },
    // Sensors
    {
        id: 11,
        name: "Ultrasonic Sensors",
        category: "sensors",
        price: 249,
        originalPrice: 349,
        image: "Ultrasonic sensors.webp",
        description: "Non-contact distance measurement sensor",
        rating: "★★★★"
    },
    {
        id: 12,
        name: "Humidity Sensors",
        category: "sensors",
        price: 299,
        originalPrice: 399,
        image: "Humidity Sensors.webp",
        description: "Accurate temperature and humidity sensor",
        rating: "★★★★★"
    },
    {
        id: 13,
        name: "Gas Sensors",
        category: "sensors",
        price: 599,
        originalPrice: 799,
        image: "GAS Sensors.webp",
        description: "Multi-gas detection sensor module",
        rating: "★★★★"
    },
    {
        id: 14,
        name: "LDR Sensors (Light Dependent Resistor)",
        category: "sensors",
        price: 199,
        originalPrice: 299,
        image: "LDR Sensors.webp",
        description: "Light intensity detection sensor",
        rating: "★★★★"
    },
    {
        id: 15,
        name: "Rain Sensors",
        category: "sensors",
        price: 349,
        originalPrice: 499,
        image: "Rain sensors.webp",
        description: "Detects rain drops and moisture",
        rating: "★★★★"
    },
    {
        id: 16,
        name: "Soil Moisture Sensors",
        category: "sensors",
        price: 199,
        originalPrice: 299,
        image: "Soil Moisture Sensors.webp",
        description: "Measures soil moisture levels",
        rating: "★★★★★"
    },
    {
        id: 17,
        name: "Touch Sensors",
        category: "sensors",
        price: 149,
        originalPrice: 249,
        image: "Touch Sensors.webp",
        description: "Capacitive touch detection sensor",
        rating: "★★★★"
    },
    {
        id: 18,
        name: "Alcohol Sensors",
        category: "sensors",
        price: 699,
        originalPrice: 899,
        image: "Alcohol Sensors.webp",
        description: "Alcohol vapor detection sensor",
        rating: "★★★★"
    },
    {
        id: 19,
        name: "Water Flow Sensors",
        category: "sensors",
        price: 399,
        originalPrice: 549,
        image: "water flow sensors.webp",
        description: "Measures water flow rate",
        rating: "★★★★"
    },
    // Relay Modules
    {
        id: 20,
        name: "1 Channel Relay Module",
        category: "relay",
        price: 199,
        originalPrice: 299,
        image: "1 channel Relay Module.webp",
        description: "Single channel relay control module",
        rating: "★★★★"
    },
    {
        id: 21,
        name: "2 Channel Relay Module",
        category: "relay",
        price: 299,
        originalPrice: 449,
        image: "2 channel Relay Module.webp",
        description: "Dual channel relay control module",
        rating: "★★★★★"
    },
    {
        id: 22,
        name: "3 Channel Relay Module",
        category: "relay",
        price: 349,
        originalPrice: 499,
        image: "3 channel Relay Module.webp",
        description: "Three channel relay control module",
        rating: "★★★★"
    },
    {
        id: 23,
        name: "8 Channel Relay Module",
        category: "relay",
        price: 499,
        originalPrice: 699,
        image: "8 channel Relay Module.webp",
        description: "Eight channel relay control module",
        rating: "★★★★★"
    },
    {
        id: 24,
        name: "14 Channel Relay Module",
        category: "relay",
        price: 799,
        originalPrice: 1099,
        image: "14channel Relay Module.webp",
        description: "Fourteen channel relay control module",
        rating: "★★★★"
    },
    // Jumper Wires
    {
        id: 25,
        name: "Male to Male Jumper Wires",
        category: "jumper-wires",
        price: 149,
        originalPrice: 249,
        image: "Male to Male.webp",
        description: "40 piece male to male jumper wires",
        rating: "★★★★★"
    },
    {
        id: 26,
        name: "Male to Female Jumper Wires",
        category: "jumper-wires",
        price: 149,
        originalPrice: 249,
        image: "Male to Female.webp",
        description: "40 piece male to female jumper wires",
        rating: "★★★★★"
    },
    {
        id: 27,
        name: "Female to Female Jumper Wires",
        category: "jumper-wires",
        price: 149,
        originalPrice: 249,
        image: "Female to Female.webp",
        description: "40 piece female to female jumper wires",
        rating: "★★★★★"
    },
    {
        id: 28,
        name: "Probe Wires",
        category: "jumper-wires",
        price: 199,
        originalPrice: 299,
        image: "probe wire.jpg",
        description: "High-quality probe wires for multimeter",
        rating: "★★★★"
    },
    // Display
    {
        id: 29,
        name: "LCD Display 16x2",
        category: "display",
        price: 399,
        originalPrice: 549,
        image: "LCD Display.jpg",
        description: "16x2 character LCD display module",
        rating: "★★★★★"
    },
    // Accessories
    {
        id: 30,
        name: "WeMos OLED Display",
        category: "display",
        price: 599,
        originalPrice: 799,
        image: "WeMos OLED.webp",
        description: "128x64 OLED display module",
        rating: "★★★★"
    },
    // More Raspberry Pi Models
    {
        id: 31,
        name: "Raspberry Pi 1 Model A+",
        category: "raspberry",
        price: 1499,
        originalPrice: 1999,
        image: "RASPBERRY Pi 1 MODEL A+.webp",
        description: "Entry-level Raspberry Pi single-core processor",
        rating: "★★★★"
    },
    {
        id: 32,
        name: "Raspberry Pi 1 Model B+",
        category: "raspberry",
        price: 1799,
        originalPrice: 2299,
        image: "RASPBERRY Pi 1 MODEL B+.webp",
        description: "Classic Raspberry Pi with enhanced I/O",
        rating: "★★★★"
    },
    {
        id: 33,
        name: "Raspberry Pi 2 Model B",
        category: "raspberry",
        price: 2299,
        originalPrice: 2999,
        image: "RASPBERRY Pi 2 MODEL B.webp",
        description: "Quad-core Raspberry Pi for demanding projects",
        rating: "★★★★★"
    },
    {
        id: 34,
        name: "Raspberry Pi 3 Model B",
        category: "raspberry",
        price: 2799,
        originalPrice: 3599,
        image: "RASPBERRY Pi 3 MODEL B.webp",
        description: "With dual-core WiFi and Bluetooth",
        rating: "★★★★★"
    },
    {
        id: 35,
        name: "Raspberry Pi Zero",
        category: "raspberry",
        price: 1299,
        originalPrice: 1699,
        image: "RASPBERRY Pi Zero.webp",
        description: "Ultra-compact single-core processor",
        rating: "★★★★"
    },
    // More ESP32 Variants
    {
        id: 36,
        name: "ESP32 Generic",
        category: "esp",
        price: 549,
        originalPrice: 749,
        image: "esp32.webp",
        description: "Standard ESP32 WiFi and Bluetooth module",
        rating: "★★★★★"
    },
    {
        id: 37,
        name: "ESP32 Thing",
        category: "esp",
        price: 749,
        originalPrice: 999,
        image: "ESP32 Thing.webp",
        description: "Versatile ESP32 development board",
        rating: "★★★★★"
    },
    {
        id: 38,
        name: "HUZZAH32",
        category: "esp",
        price: 1199,
        originalPrice: 1599,
        image: "HUZZAH32.webp",
        description: "Feature-rich ESP32 development board",
        rating: "★★★★★"
    },
    {
        id: 39,
        name: "WEMOS LOLIN32",
        category: "esp",
        price: 699,
        originalPrice: 899,
        image: "WEMOS LOLIN 32.webp",
        description: "Compact WiFi development board",
        rating: "★★★★★"
    },
    // Additional Components
    {
        id: 40,
        name: "Logic Level Converter",
        category: "components",
        price: 299,
        originalPrice: 449,
        image: "OIP.webp",
        description: "Bidirectional level shifting circuit",
        rating: "★★★★"
    },
    {
        id: 41,
        name: "FTDI USB Serial Converter",
        category: "components",
        price: 499,
        originalPrice: 699,
        image: "OIP (1).webp",
        description: "USB to serial communication module",
        rating: "★★★★★"
    },
];

// Universal discount for all products (makes electronics more affordable)
const globalDiscountPercent = 25; // 25% discount
products.forEach(product => {
    const discountedPrice = Math.round(product.originalPrice * (100 - globalDiscountPercent) / 100);
    product.price = discountedPrice;
});

let cart = [];
let filteredProducts = [...products];
let isProcessingPayment = false;

// DOM Elements
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const productsGrid = document.getElementById('products-grid');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const paymentModal = document.getElementById('payment-modal');
const paymentTotal = document.getElementById('payment-total');
const paymentMethod = document.getElementById('payment-method');
const paymentQRCodeText = document.getElementById('payment-qr-text');
const paymentQRCodeImg = document.getElementById('payment-qr-img');
const cardNumber = document.getElementById('card-number');
const cardExpiry = document.getElementById('card-expiry');
const cardCvc = document.getElementById('card-cvc');
const cardName = document.getElementById('card-name');
const cardForm = document.getElementById('card-form');
const upiPanel = document.getElementById('upi-panel');
const paymentTabs = document.querySelectorAll('.payment-tab');
const checkoutBtn = document.getElementById('checkout-btn');
const payNowBtn = document.getElementById('pay-now-btn');
const cancelPaymentBtn = document.getElementById('cancel-payment-btn');
const closeBtns = document.querySelectorAll('.close');
const cartCount = document.getElementById('cart-count');
const adminLoginBtn = document.getElementById('admin-login-btn');
const adminLoginModal = document.getElementById('admin-login-modal');
const adminLoginForm = document.getElementById('admin-login-form');
const adminUsername = document.getElementById('admin-username');
const adminPassword = document.getElementById('admin-password');
const adminDashboardModal = document.getElementById('admin-dashboard-modal');
const adminDashboardContent = document.getElementById('admin-dashboard-content');
const adminLogoutBtn = document.getElementById('admin-logout-btn');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const contactForm = document.getElementById('contact-form');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
    loadCart();
});

// Setup Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    cartBtn.addEventListener('click', openCart);
    checkoutBtn.addEventListener('click', openPayment);
    closeBtns.forEach(btn => btn.addEventListener('click', closeModals));
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCart();
    });
    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) closePayment();
    });
    paymentTabs.forEach(button => button.addEventListener('click', () => {
        const method = button.dataset.method;
        setPaymentMethod(method);
    }));
    paymentMethod.addEventListener('change', () => {
        if (!upiPanel.classList.contains('hidden')) updatePaymentQRCode();
    });
    payNowBtn.addEventListener('click', completePayment);
    cancelPaymentBtn.addEventListener('click', closePayment);
    adminLoginBtn.addEventListener('click', openAdminLogin);
    adminLoginForm.addEventListener('submit', handleAdminLogin);
    adminLogoutBtn.addEventListener('click', closeAdminDashboard);
    adminLoginModal.addEventListener('click', (e) => {
        if (e.target === adminLoginModal) closeAdminLogin();
    });
    adminDashboardModal.addEventListener('click', (e) => {
        if (e.target === adminDashboardModal) closeAdminDashboard();
    });
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    contactForm.addEventListener('submit', handleFormSubmit);
    window.addEventListener('beforeunload', saveCart);
}

// Display Products
function displayProducts() {
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">No products found</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image"><img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>
            <div class="product-body">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-rating">${product.rating}</p>
                <div class="product-price">
                    <span class="price-current">₹${product.price}</span>
                    <span class="price-original">₹${product.originalPrice}</span>
                    <span class="product-discount">${discount}% OFF</span>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Filter Products
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || product.category === category;
        const matchesPrice = !priceRange || checkPriceRange(product.price, priceRange);
        
        return matchesSearch && matchesCategory && matchesPrice;
    });

    displayProducts();
}

// Check Price Range
function checkPriceRange(price, range) {
    switch(range) {
        case '0-500': return price <= 500;
        case '500-1000': return price > 500 && price <= 1000;
        case '1000-5000': return price > 1000 && price <= 5000;
        case '5000+': return price > 5000;
        default: return true;
    }
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = total;
}

// Open Cart Modal
function openCart() {
    displayCartItems();
    cartModal.classList.remove('hidden');
}

// Close Cart Modal
function closeCart() {
    cartModal.classList.add('hidden');
}

function openPayment() {
    const totalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    paymentTotal.textContent = `Total Amount: ₹${totalValue}`;
    payNowBtn.textContent = `Pay ₹${totalValue}`;
    cardNumber.value = '';
    cardExpiry.value = '';
    cardCvc.value = '';
    cardName.value = '';
    paymentMethod.value = 'gpay';
    paymentQRCodeImg.classList.add('hidden');
    setPaymentMethod('card');
    updatePaymentPanels();
    paymentModal.classList.remove('hidden');
}

function closePayment() {
    paymentModal.classList.add('hidden');
}

function openAdminLogin() {
    adminLoginModal.classList.remove('hidden');
}

function closeAdminLogin() {
    adminLoginModal.classList.add('hidden');
}

function openAdminDashboard() {
    adminDashboardModal.classList.remove('hidden');
}

function closeAdminDashboard() {
    adminDashboardModal.classList.add('hidden');
}

function closeModals() {
    closeCart();
    closePayment();
    closeAdminLogin();
    closeAdminDashboard();
}

function setPaymentMethod(method) {
    paymentTabs.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.method === method);
    });
    if (method === 'card') {
        cardForm.classList.remove('hidden');
        upiPanel.classList.add('hidden');
    } else {
        cardForm.classList.add('hidden');
        upiPanel.classList.remove('hidden');
        updatePaymentQRCode();
    }
}

function updatePaymentPanels() {
    const selectedTab = document.querySelector('.payment-tab.active');
    if (selectedTab) {
        setPaymentMethod(selectedTab.dataset.method);
    }
}

function updatePaymentQRCode() {
    if (upiPanel.classList.contains('hidden')) return;

    const method = paymentMethod.value;
    const totalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const labelMap = {
        gpay: 'GPay',
        paytm: 'Paytm',
        phonepe: 'PhonePe'
    };

    const upiId = 'dhivadhivakar29k@oksbi';
    const upiName = 'Dhivakar Dhiva';
    const upiData = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${totalValue}&cu=INR&tn=ElectroHub+Order`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiData)}`;

    paymentQRCodeText.textContent = `Scan this QR code using ${labelMap[method]} (UPI: ${upiId}) to pay ₹${totalValue}`;
    paymentQRCodeImg.src = qrUrl;
    paymentQRCodeImg.alt = `${labelMap[method]} payment QR code for ${upiId}`;
    paymentQRCodeImg.classList.remove('hidden');
}

function completePayment() {
    if (cart.length === 0) {
        showNotification('Your cart is empty. Add products before payment.');
        return;
    }

    if (isProcessingPayment) {
        return;
    }

    const isCardPayment = !cardForm.classList.contains('hidden');
    if (isCardPayment && !validateCardDetails()) {
        showNotification('Please enter valid card details to proceed.');
        return;
    }

    const totalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const methodLabel = isCardPayment ? 'Card' : paymentMethod.options[paymentMethod.selectedIndex].text;

    isProcessingPayment = true;
    payNowBtn.disabled = true;
    payNowBtn.textContent = `Processing ₹${totalValue}...`;

    showNotification(`Processing ${methodLabel} payment. Please wait...`);

    simulatePaymentTransfer(totalValue, methodLabel)
        .then(() => {
            cart = [];
            updateCartCount();
            saveCart();
            closePayment();
            closeCart();
            showNotification('Payment successful! Your order is confirmed.');
        })
        .catch(() => {
            showNotification('Payment failed. Please try again.');
        })
        .finally(() => {
            isProcessingPayment = false;
            payNowBtn.disabled = false;
            payNowBtn.textContent = `Pay ₹${totalValue}`;
        });
}

function simulatePaymentTransfer(amount, method) {
    // Simulate backend transfer completion; replace with real API call in production.
    return new Promise((resolve) => {
        setTimeout(resolve, 1800);
    });
}

function handleAdminLogin(e) {
    e.preventDefault();
    const username = adminUsername.value.trim().toLowerCase();
    const password = adminPassword.value.trim();

    if (username !== 'admin@electrohub.com' || password !== 'Admin@123') {
        showNotification('Invalid admin credentials. Please try again.');
        return;
    }

    adminUsername.value = '';
    adminPassword.value = '';
    closeAdminLogin();
    updateAdminDashboard();
    openAdminDashboard();
}

function updateAdminDashboard() {
    const totalProducts = products.length;
    const categories = [...new Set(products.map(item => item.category))].length;
    const activeCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const catalogValue = products.reduce((sum, item) => sum + item.price, 0);

    adminDashboardContent.innerHTML = `
        <div class="dashboard-summary">
            <div class="dashboard-card">
                <h3>Products in Catalog</h3>
                <p>${totalProducts}</p>
            </div>
            <div class="dashboard-card">
                <h3>Categories</h3>
                <p>${categories}</p>
            </div>
            <div class="dashboard-card">
                <h3>Current Cart Items</h3>
                <p>${activeCartItems}</p>
            </div>
            <div class="dashboard-card">
                <h3>Catalog Value</h3>
                <p>₹${catalogValue}</p>
            </div>
        </div>
        <p class="dashboard-note">Admin dashboard is a demo panel for managing your store. Orders and backend sync would appear here once backend integration is added.</p>
    `;
}

function validateCardDetails() {
    const card = cardNumber.value.replace(/\s+/g, '');
    const expiry = cardExpiry.value.trim();
    const cvc = cardCvc.value.trim();
    const name = cardName.value.trim();

    const validCard = /^\d{16}$/.test(card);
    const validExpiry = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry);
    const validCvc = /^\d{3,4}$/.test(cvc);
    const validName = name.length >= 3;

    return validCard && validExpiry && validCvc && validName;
}

// Display Cart Items
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px; color: #64748b;">Your cart is empty</p>';
        cartTotal.textContent = '₹0';
        return;
    }

    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">₹${item.price} x ${item.quantity}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    }).join('');

    cartTotal.textContent = `₹${total}`;
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            displayCartItems();
            updateCartCount();
            saveCart();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCartItems();
    updateCartCount();
    saveCart();
    showNotification('Item removed from cart');
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// Handle Contact Form
function handleFormSubmit(e) {
    e.preventDefault();
    showNotification('Thank you! We will contact you soon.');
    contactForm.reset();
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
