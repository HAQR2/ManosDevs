// main.js - Este archivo contiene la lógica principal del sitio

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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg', 'py-3');
    } else {
        navbar.classList.remove('shadow-lg', 'py-3');
    }
});

// Scroll Indicator - desaparece al hacer scroll
window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const heroSection = document.getElementById('hero');
    
    if (scrollIndicator && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Calcular opacidad basada en el scroll
        // 0 scroll = opacidad 1, 300px scroll = opacidad 0
        let opacity = 1 - (scrollPosition / 300);
        
        // Limitar entre 0 y 1
        opacity = Math.max(0, Math.min(1, opacity));
        
        scrollIndicator.style.opacity = opacity;
        
        // Ocultar completamente después de 400px
        if (scrollPosition > 400) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
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
}

// Filtro de servicios
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.flip-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active', 'bg-neon-pink', 'text-white'));
        filterButtons.forEach(btn => btn.classList.add('bg-dark-card', 'text-gray-300'));
        
        // Add active class to clicked button
        button.classList.add('active', 'bg-neon-pink', 'text-white');
        button.classList.remove('bg-dark-card', 'text-gray-300');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter service cards
        serviceCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
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

// Filtro de proyectos
const filterProjectButtons = document.querySelectorAll('.filter-project-btn');
const projectCards = document.querySelectorAll('.project-card');

filterProjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterProjectButtons.forEach(btn => btn.classList.remove('active', 'bg-neon-pink', 'text-white'));
        filterProjectButtons.forEach(btn => btn.classList.add('bg-dark-card', 'text-gray-300'));
        
        // Add active class to clicked button
        button.classList.add('active');
        button.classList.remove('bg-dark-card', 'text-gray-300');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter project cards
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else if (card.classList.contains(`project-${filter}`)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
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
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.zIndex = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000);
}

// Particles effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.3 + 0.1;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        
        // Random color
        const colors = ['#FF006E', '#90EE90', '#FF6B35'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
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

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
            
            // Reset form
            this.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show confetti effect
            showConfetti();
        }, 2000);
    });
}

// Confetti effect
function showConfetti() {
    const colors = ['#FF006E', '#90EE90', '#FF6B35'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * window.innerWidth;
        const duration = Math.random() * 3 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${posX}px`;
        confetti.style.top = `-20px`;
        confetti.style.background = color;
        confetti.style.borderRadius = '50%';
        confetti.style.position = 'fixed';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        // Animation
        confetti.style.animation = `confettiFall ${duration}s linear forwards`;
        
        // Keyframes for fall animation
        const keyframes = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        
        // Add keyframes if not already added
        if (!document.getElementById('confetti-keyframes')) {
            const style = document.createElement('style');
            style.id = 'confetti-keyframes';
            style.textContent = keyframes;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Datos de proyectos para los modales
const projectsData = {
    'zen-travel': {
        title: 'ZEN TRAVEL',
        subtitle: 'Mobile App',
        description: 'Aplicación de reservas de viaje minimalista inspirada en la estética japonesa.',
        challenge: 'Diseño centrado en la calma y la claridad para reducir la ansiedad de planificación de viajes.',
        solution: 'Integración con múltiples APIs de aerolíneas y hoteles, con interfaz que prioriza la experiencia zen.',
        technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Figma'],
        tags: ['Mobile', 'UI/UX Design', 'React Native'],
        liveUrl: '#',
        color: 'from-neon-pink to-neon-green'
    },
    'high-fashion': {
        title: 'HIGH FASHION',
        subtitle: 'E-commerce Web',
        description: 'E-commerce de moda de lujo con experiencia de compra premium y realidad aumentada.',
        challenge: '',
        solution: 'Implementación de vista 360°, probador virtual con AR y proceso de checkout simplificado.',
        technologies: ['React', 'Next.js', 'Three.js', 'Stripe', 'AWS'],
        tags: ['Web', 'E-commerce', 'React'],
        liveUrl: '#',
        color: 'from-neon-green to-neon-orange'
    },
    'tech-solutions': {
        title: 'TECH SOLUTIONS',
        subtitle: 'Portal Corporativo',
        description: 'Portal corporativo para empresa tecnológica global con dashboard interactivo.',
        challenge: 'Unificar múltiples sistemas legacy en una plataforma moderna y escalable.',
        solution: 'Arquitectura microservicios con dashboard personalizable para cada departamento.',
        technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker'],
        tags: ['Web', 'Corporate', 'Vue.js'],
        liveUrl: '#',
        color: 'from-neon-orange to-neon-pink'
    }
};

// Modal functionality para proyectos
const projectModal = document.getElementById('projectModal');
const closeProjectModal = document.getElementById('closeProjectModal');
const modalContent = document.getElementById('modalContent');

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    // Crear contenido del modal
    modalContent.innerHTML = `
        <div class="project-hero bg-gradient-to-br ${project.color}">
            <div class="text-center relative z-10">
                <div class="text-8xl mb-6">${projectId === 'zen-travel' ? '✈️' : projectId === 'high-fashion' ? '👗' : '💻'}</div>
                <h3 class="text-4xl font-bold mb-2">${project.title}</h3>
                <p class="text-xl text-gray-300">${project.subtitle}</p>
            </div>
        </div>
        
        <div class="mb-8">
            <p class="text-xl text-gray-300 mb-6">${project.description}</p>
            
            <div class="project-tags">
                ${project.tags.map(tag => `
                    <span class="project-tag bg-${tag === 'Mobile' ? 'neon-pink' : tag === 'Web' ? 'neon-green' : 'neon-orange'}/20 text-${tag === 'Mobile' ? 'neon-pink' : tag === 'Web' ? 'neon-green' : 'neon-orange'}">
                        ${tag}
                    </span>
                `).join('')}
            </div>
        </div>
        
        <div class="section-divider"></div>
        
        <div class="project-details-grid">
            <div>
                <h4 class="text-2xl font-bold mb-4 text-neon-green">DESAFÍO</h4>
                <p class="text-gray-400">${project.challenge}</p>
            </div>
            <div>
                <h4 class="text-2xl font-bold mb-4 text-neon-pink">SOLUCIÓN</h4>
                <p class="text-gray-400">${project.solution}</p>
            </div>
        </div>
        
        <div class="mb-8">
            <h4 class="text-2xl font-bold mb-4">Tecnologías Utilizadas</h4>
            <div class="flex flex-wrap gap-3">
                ${project.technologies.map(tech => `
                    <span class="px-4 py-2 bg-dark-card text-gray-300 rounded-full border border-white/10">
                        ${tech}
                    </span>
                `).join('')}
            </div>
        </div>
        
        <div class="text-center pt-6 border-t border-white/10">
            <a href="${project.liveUrl}" class="live-site-btn">
                <i class="fas fa-external-link-alt"></i>
                Ver Sitio Live
            </a>
        </div>
    `;
    
    // Mostrar modal
    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    projectModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Event listeners para modal
if (closeProjectModal) {
    closeProjectModal.addEventListener('click', closeModal);
}

// Cerrar modal al hacer clic fuera
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
        closeModal();
    }
});

// Event listeners para tarjetas de proyectos
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Animate service cards on load
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate project cards on load
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Inicializar el scroll indicator con opacidad completa
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.transition = 'opacity 0.5s ease';
    }
});