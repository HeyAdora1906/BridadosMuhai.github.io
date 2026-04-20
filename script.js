// --- Mobile Menu Toggle ---
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- Sticky Navbar Effect ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        header.style.background = 'rgba(10, 23, 11, 0.98)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(10, 23, 11, 0.95)';
    }
});

// --- Reviews Carousel Logic ---
const slides = document.querySelectorAll('.review-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 5000);

// --- Interactive Menu Filtering Logic ---
const filterBtns = document.querySelectorAll('.filter-btn');
const dishCards = document.querySelectorAll('.dish-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to the clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        dishCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.classList.remove('hide');
                card.style.animation = 'none';
                card.offsetHeight; /* trigger reflow */
                card.style.animation = null; 
            } else {
                card.classList.add('hide');
            }
        });
    });
});