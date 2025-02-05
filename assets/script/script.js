const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    const homeBase = document.querySelectorAll('.logo');

    homeBase.forEach(logo => {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });
});
