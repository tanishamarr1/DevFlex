// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Cerrar el menú móvil al hacer clic en un enlace
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Form submission - sends to FormSubmit via hidden iframe
document.querySelector('.contact-form').addEventListener('submit', function () {
    // NO e.preventDefault() - the form must submit to FormSubmit
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Mensaje Enviado ✓';
    button.style.background = '#10b981';
    button.disabled = true;

    const form = this;
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.disabled = false;
        form.reset();
    }, 3000);
});

// Cargar servicios dinámicamente
async function loadServices() {
    try {
        const response = await fetch('data/servicios.json');
        const services = await response.json();
        const grid = document.getElementById('services-grid');
        
        if (!grid) return;

        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card animate-on-scroll';
            card.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            grid.appendChild(card);
            observer.observe(card); // Muy importante: reactivar la animación al hacer scroll para estas tarjetas
        });
    } catch (error) {
        console.error('Error al cargar los servicios:', error);
    }
}

// Cargar productos dinámicamente
async function loadProducts() {
    try {
        const response = await fetch('data/productos.json');
        const products = await response.json();
        const container = document.getElementById('products-container');
        
        if (!container) return;

        products.forEach(product => {
            const div = document.createElement('div');
            div.classList.add('animate-on-scroll');

            if (product.type === 'featured') {
                div.classList.add('product-featured');
                
                let featuresHtml = '';
                if (product.features && product.features.length > 0) {
                    featuresHtml = '<div class="product-features">' + product.features.map(f => `
                        <div class="feature">
                            <span class="feature-icon">${f.icon}</span>
                            <div>
                                <h5>${f.title}</h5>
                                <p>${f.description}</p>
                            </div>
                        </div>
                    `).join('') + '</div>';
                }

                div.innerHTML = `
                    <div class="product-header">
                        <div class="product-logo">
                            <div class="sellvera-icon">${product.icon}</div>
                            <h3>${product.title}</h3>
                        </div>
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    </div>
                    <div class="product-content">
                        <h4>${product.subtitle}</h4>
                        <p>${product.description}</p>
                        ${featuresHtml}
                        <div class="product-actions">
                            ${product.primaryAction ? `<a href="${product.primaryAction.link}" class="btn btn-primary">${product.primaryAction.text}</a>` : ''}
                            ${product.secondaryAction ? `<a href="${product.secondaryAction.link}" class="btn btn-secondary">${product.secondaryAction.text}</a>` : ''}
                        </div>
                    </div>
                `;
            } else if (product.type === 'coming-soon') {
                div.classList.add('coming-soon');
                div.innerHTML = `
                    <div class="coming-soon-content">
                        <div class="coming-icon">${product.icon}</div>
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        ${product.action ? `
                        <div class="notify-btn">
                            <a href="${product.action.link}" class="btn btn-secondary">${product.action.text}</a>
                        </div>` : ''}
                    </div>
                `;
            }

            container.appendChild(div);
            observer.observe(div); // Reactivar la animación
        });
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

// Inicializar carga dinámica cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    loadProducts();
});