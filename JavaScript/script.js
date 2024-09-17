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
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the navbar element
    const navbar = document.querySelector('.navbar');
    
    // Get the height of the navbar
    const navbarHeight = navbar.offsetHeight;
    
    // Use the height in CSS or JavaScript calculations
    const fullScreenBackground = document.querySelector('.full-screen-background');
    fullScreenBackground.style.height = `calc(100vh + ${navbarHeight}px)`; 
    fullScreenBackground.style.marginTop = `-${navbarHeight}px`;

});
// document.addEventListener("DOMContentLoaded", function () {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");

//     // Function to handle changes based on the media query result
//     function handleMediaQueryChange(e) {
//         if (e.matches) {
//             // If the screen width is less than 768px
//             document.getElementById("section-1-p-tag").textContent = "Educating entrepreneurs for the world.";
//         } else {
//             // If the screen width is greater than or equal to 768px
//             document.getElementById("section-1-p-tag").textContent = "Turn to bright solutions and elevate your décor with ceiling lights. Educating entrepreneurs for the world.";
//         }
//     }

//     // Initial check when the page loads
//     handleMediaQueryChange(mediaQuery);

//     // Add an event listener to detect changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
// });
