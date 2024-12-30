window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)';
});
