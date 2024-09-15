document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const svgMenu = document.getElementById('svg-menu');

    let toggler = false;

    const paths = {
        open: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z',
        close: 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'
    };

    menuToggle.addEventListener('click', () => {
        toggler = !toggler;
        navLinks.classList.toggle('active');
        svgMenu.setAttribute('d', toggler ? paths.open : paths.close);
        console.log('Menu toggled');
    });
});
