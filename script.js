// script.js - Purely additive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 1. Floating Tech Orbs Animation (New Elements)
    createFloatingOrbs();
    
    // 2. Binary Background Effect (New Elements)
    createBinaryBackground();
    
    // 3. Scroll-triggered Animations (Non-invasive)
    setupScrollAnimations();
});

// ===== NEW FUNCTIONS ONLY ===== //

function createFloatingOrbs() {
    const colors = ['#1a365d', '#2c5282', '#4299e1'];
    for (let i = 0; i < 3; i++) {
        const orb = document.createElement('div');
        orb.className = `tech-orb orb-${i+1}`;
        orb.style.setProperty('--orb-color', colors[i]);
        document.body.appendChild(orb);
    }
}

function createBinaryBackground() {
    const bg = document.createElement('div');
    bg.className = 'binary-bg';
    for (let i = 0; i < 20; i++) {
        const stream = document.createElement('div');
        stream.className = 'binary-stream';
        stream.style.left = `${Math.random() * 100}vw`;
        stream.style.animationDelay = `${Math.random() * 5}s`;
        bg.appendChild(stream);
    }
    document.body.appendChild(bg);
}

function setupScrollAnimations() {
    // Only animates new elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-level').forEach(el => {
        observer.observe(el);
    });
}

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});