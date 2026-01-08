// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});
// Generador de estrellas para el overlay
function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;
    
    // Crear 100 estrellas
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        
        // Tamaño aleatorio
        const sizes = ['small', 'medium', 'large'];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        
        // Color aleatorio
        const colors = ['', 'neon-pink', 'neon-green', 'neon-orange'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Posición aleatoria
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        // Duración y delay aleatorios
        const duration = Math.random() * 3 + 2; // 2-5 segundos
        const delay = Math.random() * 5; // 0-5 segundos
        
        // Configurar clases
        star.classList.add('star', size);
        if (color) star.classList.add(color);
        
        // Configurar posición y animación
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        
        // Algunas estrellas tendrán movimiento adicional
        if (Math.random() > 0.7) {
            star.classList.add('floating-star');
            star.style.animationDuration = `${Math.random() * 15 + 10}s`; // 10-25 segundos
        }
        
        starsContainer.appendChild(star);
    }
}
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-3');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.remove('py-3');
        navbar.classList.add('py-4');
    }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden') 
            ? '<i class="fas fa-bars text-xl"></i>' 
            : '<i class="fas fa-times text-xl"></i>';
    });
    
    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        });
    });
}

// Filtro de servicios
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.flip-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-neon-pink', 'text-white');
            btn.classList.add('bg-dark-card', 'text-gray-300');
        });
        
        // Agregar clase active al botón clickeado
        button.classList.add('active', 'bg-neon-pink', 'text-white');
        button.classList.remove('bg-dark-card', 'text-gray-300');
        
        const filter = button.getAttribute('data-filter');
        
        // Filtrar tarjetas de servicios
        serviceCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
    });
    
    slides[index].classList.add('active');
    slides[index].style.opacity = '1';
    slides[index].style.zIndex = '1';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-avance de slides cada 5 segundos
if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000);
    
    // Pausar slider al hacer hover
    const heroSection = document.getElementById('hero');
    let slideInterval = setInterval(nextSlide, 5000);
    
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSection.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
}

// Crear partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    // Limpiar partículas existentes
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Propiedades aleatorias
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.3 + 0.1;
        
        // Aplicar estilos
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        
        // Color aleatorio
        const colors = ['#FF006E', '#90EE90', '#FF6B35'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Cerrar menú móvil si está abierto
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            }
            
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Envío de formulario
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Mostrar estado de carga
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simular llamada a API
        setTimeout(() => {
            // Mostrar mensaje de éxito
            showNotification('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.', 'success');
            
            // Resetear formulario
            this.reset();
            
            // Restaurar botón
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Mostrar efecto de confeti
            showConfetti();
        }, 2000);
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-transform duration-300 ${
        type === 'success' ? 'bg-neon-green text-dark-bg' : 'bg-neon-pink text-white'
    }`;
    notification.textContent = message;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Efecto de confeti
function showConfetti() {
    const colors = ['#FF006E', '#90EE90', '#FF6B35'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        
        // Propiedades aleatorias
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * window.innerWidth;
        const duration = Math.random() * 3 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Aplicar estilos
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${posX}px`;
        confetti.style.top = `-20px`;
        confetti.style.background = color;
        confetti.style.borderRadius = '50%';
        confetti.style.position = 'fixed';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        // Animación
        confetti.style.animation = `confettiFall ${duration}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        // Remover confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Modal para proyectos
const projectModal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const projectCards = document.querySelectorAll('.project-card');

if (projectModal && closeModal) {
    closeModal.addEventListener('click', () => {
        projectModal.classList.add('hidden');
    });
    
    // Cerrar modal al hacer clic fuera
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.add('hidden');
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
            projectModal.classList.add('hidden');
        }
    });
    
    // Agregar eventos a las tarjetas de proyecto
    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3')?.textContent || 'Proyecto';
            const description = card.querySelector('p')?.textContent || 'Descripción del proyecto';
            const tags = Array.from(card.querySelectorAll('.project-tags span')).map(tag => tag.textContent);
            const imgSrc = card.querySelector('img').src;
            
            // Establecer contenido del modal
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalContent').innerHTML = `
                <div class="mb-6">
                    <img src="${imgSrc}" alt="${title}" class="w-full h-64 object-cover rounded-xl mb-4">
                    <p class="text-gray-300 mb-4">${description}</p>
                    
                    <div class="mb-6">
                        <h4 class="text-xl font-bold mb-2">Desafíos</h4>
                        <p class="text-gray-400">Crear una plataforma escalable que maneje miles de usuarios simultáneamente mientras mantiene una experiencia de usuario excepcional.</p>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-xl font-bold mb-2">Solución</h4>
                        <p class="text-gray-400">Implementamos una arquitectura moderna con React en el frontend y Node.js en el backend, utilizando AWS para escalabilidad.</p>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-xl font-bold mb-2">Resultados</h4>
                        <ul class="text-gray-400 list-disc pl-5 space-y-2">
                            <li>Aumento del 150% en conversiones</li>
                            <li>Reducción del 40% en tiempo de carga</li>
                            <li>98% de satisfacción del usuario</li>
                        </ul>
                    </div>
                    
                    <div class="flex flex-wrap gap-2">
                        ${tags.map(tag => `<span class="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            // Mostrar modal
            projectModal.classList.remove('hidden');
        });
    });
}

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();
    
    // Crear estrellas
    createStars();
    
    // Observar secciones para animaciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observar tarjetas de servicios
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observar tarjetas de proyectos
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Inicializar contadores para estadísticas
    const stats = document.querySelectorAll('.text-4xl.font-bold.bg-gradient-to-r');
    const statsSection = document.querySelector('#nosotros');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent) || 0;
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Animación de contadores
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
        }
    }, 16);
}

// Redimensionar partículas al cambiar tamaño de ventana
window.addEventListener('resize', createParticles);