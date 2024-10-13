document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.getElementById('nav-links');
            const links = navLinks.getElementsByTagName('a'); 
        
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('toggle');
            });
        
            // Function to close the menu
            function closeMenu() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('toggle');
            }
        
            Array.from(links).forEach(link => {
                link.addEventListener('click', closeMenu);
            });
            
        });
});