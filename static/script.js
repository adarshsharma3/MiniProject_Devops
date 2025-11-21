// localStorage key for storing orders
const STORAGE_KEY = 'orders_data';
const ROWS_PER_PAGE = 25;
let currentPage = 1;

// Initialize the application
document.addEventListener("DOMContentLoaded", function() {
    initializeNavigation();
    initializeOrderForm();
    loadOrders();
    updateOrderCount();
});

// Initialize navigation
function initializeNavigation() {
    const btnOrders = document.getElementById("btn-orders");
    const btnAddOrder = document.getElementById("btn-add-order");
    const orderListContent = document.getElementById("order-list-content");
    const addOrderContent = document.getElementById("add-order-content");

    btnOrders.addEventListener("click", function() {
        setActiveNav(btnOrders);
        setActiveSection(orderListContent);
        currentPage = 1;
        loadOrders();
    });

    btnAddOrder.addEventListener("click", function() {
        setActiveNav(btnAddOrder);
        setActiveSection(addOrderContent);
    });
}

function setActiveNav(activeBtn) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

function setActiveSection(activeSection) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    activeSection.classList.add('active');
}

// Initialize order form
function initializeOrderForm() {
    const form = document.getElementById("add-order-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Generate a unique ID for the order
        const orderId = Date.now().toString();
        
        const order = {
            id: orderId,
            user_id: document.getElementById("user_id").value.trim(),
            product_code: document.getElementById("product_code").value.trim(),
            product_quantity: parseInt(document.getElementById("product_quantity").value),
            order_date: document.getElementById("order_date").value,
            store_code: document.getElementById("store_code").value.trim()
        };
        
        // Get existing orders from localStorage
        const orders = getOrdersFromStorage();
        
        // Add new order
        orders.push(order);
        
        // Save back to localStorage
        saveOrdersToStorage(orders);
        
        // Reset form
        form.reset();
        
        // Switch to order list and reload
        document.getElementById("btn-orders").click();
        updateOrderCount();
        
        // Show success notification
        showNotification("Order created successfully! 🎉");
    });
}

// Get orders from localStorage
function getOrdersFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Save orders to localStorage
function saveOrdersToStorage(orders) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

// Update order count in sidebar
function updateOrderCount() {
    const orders = getOrdersFromStorage();
    const countElement = document.getElementById("order-count");
    const count = orders.length;
    countElement.textContent = `${count} ${count === 1 ? 'order' : 'orders'}`;
}

// Load and display orders with pagination
function loadOrders(page = 1) {
    currentPage = page;
    const orders = getOrdersFromStorage();
    
    // Sort orders by order date (newest first), then by user_id
    orders.sort((a, b) => {
        if (a.order_date !== b.order_date) {
            return b.order_date.localeCompare(a.order_date); // Newest first
        }
        return a.user_id.localeCompare(b.user_id);
    });
    
    // Calculate pagination
    const totalRows = orders.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / ROWS_PER_PAGE));
    const startIndex = (page - 1) * ROWS_PER_PAGE;
    const endIndex = startIndex + ROWS_PER_PAGE;
    const currentPageOrders = orders.slice(startIndex, endIndex);
    
    // Display orders
    displayOrders(currentPageOrders);
    
    // Display pagination
    displayPagination(page, totalPages, totalRows);
}

// Display orders in cards
function displayOrders(orders) {
    const container = document.getElementById("orders-container");
    container.innerHTML = "";
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <div class="empty-state-text">No orders found</div>
                <div class="empty-state-subtext">Click "New Order" to create your first order!</div>
            </div>
        `;
        return;
    }
    
    orders.forEach(order => {
        const card = createOrderCard(order);
        container.appendChild(card);
    });
}

// Create order card element
function createOrderCard(order) {
    const card = document.createElement("div");
    card.className = "order-card";
    
    // Format date for display
    const orderDate = order.order_date || "";
    const formattedDate = orderDate ? new Date(orderDate + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }) : "N/A";
    
    card.innerHTML = `
        <div class="order-card-header">
            <div class="order-id">#${order.id.slice(-6)}</div>
            <div class="order-date">${formattedDate}</div>
        </div>
        <div class="order-details">
            <div class="order-detail-item">
                <span class="order-detail-label">👤 User ID</span>
                <span class="order-detail-value">${order.user_id || "N/A"}</span>
            </div>
            <div class="order-detail-item">
                <span class="order-detail-label">🏷️ Product</span>
                <span class="order-detail-value">${order.product_code || "N/A"}</span>
            </div>
            <div class="order-detail-item">
                <span class="order-detail-label">🔢 Quantity</span>
                <span class="order-badge">${order.product_quantity || 0}</span>
            </div>
            <div class="order-detail-item">
                <span class="order-detail-label">🏪 Store</span>
                <span class="order-detail-value">${order.store_code || "N/A"}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Display pagination controls
function displayPagination(page, totalPages, totalRows) {
    const paginationDiv = document.getElementById("pagination");
    
    if (totalPages <= 1 && totalRows === 0) {
        paginationDiv.innerHTML = "";
        return;
    }
    
    let paginationHTML = `<span>Showing ${((page - 1) * ROWS_PER_PAGE) + 1}-${Math.min(page * ROWS_PER_PAGE, totalRows)} of ${totalRows}</span>`;
    
    if (totalPages > 1) {
        if (page > 1) {
            paginationHTML = `<a href="#" class="pagination-link" data-page="${page - 1}">← Previous</a> ` + paginationHTML;
        }
        
        if (page < totalPages) {
            paginationHTML = paginationHTML + ` <a href="#" class="pagination-link" data-page="${page + 1}">Next →</a>`;
        }
    }
    
    paginationDiv.innerHTML = paginationHTML;
    
    // Add event listeners to pagination links
    paginationDiv.querySelectorAll('.pagination-link').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetPage = parseInt(this.getAttribute('data-page'));
            loadOrders(targetPage);
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
}

// Show notification
function showNotification(message) {
    // Create a simple notification element
    const notification = document.createElement("div");
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement("style");
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
