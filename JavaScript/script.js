document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links-menu');
    const svgMenu = document.getElementById('svg-menu');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    const stickyOffset = navbar.offsetTop;
    let toggler = false;

    const paths = {
        open: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z',
        close: 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'
    };

    menuToggle.addEventListener('click', () => {
        toggler = !toggler;
        navLinks.classList.toggle('active');
        svgMenu.setAttribute('d', toggler ? paths.open : paths.close);
        navLinks.style.top = `${navbarHeight}px`;
        if(!navbar.classList.contains('sticky')){
            navbar.classList.toggle('isticky');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the navbar element
    const navbar = document.querySelector('.navbar');
    
    // Get the height of the navbar
    const navbarHeight = navbar.offsetHeight;
    
    // Select the full-screen background element
    const fullScreenBackground = document.querySelector('.full-screen-background');

    // Set margin-top to ensure it appears directly under the navbar
    fullScreenBackground.style.marginTop = `-${navbarHeight}px`;
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const stickyOffset = navbar.offsetTop; // Get the distance of the navbar from the top of the document
    
    // Function to add/remove sticky class based on scroll position
    function handleStickyNavbar() {
        if (window.pageYOffset >= stickyOffset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
    
    // Attach the scroll event to handle the sticky behavior
    window.addEventListener('scroll', handleStickyNavbar);
});
