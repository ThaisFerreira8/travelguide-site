// Funcionalidades do Site TravelGuide

// Navegação Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Scroll suave para seção de recomendações
function scrollToRecommendations() {
    const recommendationsSection = document.getElementById('recommendations');
    if (recommendationsSection) {
        recommendationsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Efeito de parallax no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Animação de contadores na página Sobre Nós
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('K') ? 'K+' : 
                    counter.textContent.includes('%') ? '%' : 
                    counter.textContent.includes('/') ? '/7' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = counter.textContent;
            }
        };
        
        updateCounter();
    });
}

// Observador de interseção para animações
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animar contadores quando a seção de estatísticas for visível
            if (entry.target.classList.contains('about-stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.recommendation-card, .value-card, .faq-item, .about-stats');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter dados do formulário
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validação básica
            if (!data.name || !data.email || !data.subject || !data.message) {
                showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Validação de e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Simular envio do formulário
            showMessage('Enviando mensagem...', 'success');
            
            setTimeout(() => {
                showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
    
    function showMessage(text, type) {
        if (formMessage) {
            formMessage.textContent = text;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Ocultar mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
});

// Efeito de hover nas imagens das recomendações
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.image-item');
    
    imageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Sistema de recomendações interativo
class TravelRecommendationSystem {
    constructor() {
        this.preferences = {
            budget: '',
            duration: '',
            interests: [],
            climate: '',
            activity: ''
        };
    }
    
    // Coletar preferências do usuário
    collectPreferences() {
        // Esta função seria expandida para coletar preferências reais
        // Por enquanto, retorna dados de exemplo
        return {
            budget: 'medium',
            duration: '1-2 weeks',
            interests: ['beach', 'culture', 'adventure'],
            climate: 'tropical',
            activity: 'relaxation'
        };
    }
    
    // Gerar recomendações baseadas nas preferências
    generateRecommendations() {
        const preferences = this.collectPreferences();
        const recommendations = [];
        
        // Lógica de recomendação seria implementada aqui
        // Por enquanto, retorna recomendações estáticas
        return [
            {
                type: 'beach',
                destination: 'Caribe',
                description: 'Perfeito para relaxamento em praias paradisíacas',
                match: 95
            },
            {
                type: 'temple',
                destination: 'Japão',
                description: 'Ideal para experiências culturais e espirituais',
                match: 88
            },
            {
                type: 'country',
                destination: 'França',
                description: 'Excelente para arte, cultura e gastronomia',
                match: 92
            }
        ];
    }
}

// Inicializar sistema de recomendações
const recommendationSystem = new TravelRecommendationSystem();

// Efeito de digitação no título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de digitação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Smooth scroll para todos os links internos
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Adicionar classe de animação quando elementos entram na viewport
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Aplicar animação aos cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.recommendation-card, .value-card, .faq-item');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(card);
    });
});

// Sistema de busca de destinos (funcionalidade futura)
function searchDestinations(query) {
    const destinations = [
        { name: 'Caribe', type: 'beach', country: 'Vários' },
        { name: 'Japão', type: 'temple', country: 'Japão' },
        { name: 'França', type: 'country', country: 'França' },
        { name: 'Brasil', type: 'beach', country: 'Brasil' },
        { name: 'Tailândia', type: 'temple', country: 'Tailândia' },
        { name: 'Itália', type: 'country', country: 'Itália' }
    ];
    
    return destinations.filter(dest => 
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.type.toLowerCase().includes(query.toLowerCase()) ||
        dest.country.toLowerCase().includes(query.toLowerCase())
    );
}

// Adicionar funcionalidade de busca (placeholder para futuras implementações)
function initializeSearch() {
    // Esta função seria expandida para implementar busca real
    console.log('Sistema de busca inicializado');
}

// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    console.log('TravelGuide - Sistema carregado com sucesso!');
});
