document.addEventListener('DOMContentLoaded', () => {
    // Splash screen logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            document.body.style.overflow = '';
            document.body.classList.add('fade-in-active');
        }, 2000);
    } else {
        document.body.classList.add('fade-in-active');
    }

    // Set active class on navbar depending on current page
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
