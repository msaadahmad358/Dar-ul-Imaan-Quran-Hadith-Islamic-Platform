// load-navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('navbar-container');
    if (!container) return;

    // 1. Fetch the navbar.html file
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => {
            // 2. Inject it into the page
            container.innerHTML = html;

            // 3. Automatically highlight the active page
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const links = container.querySelectorAll('.nav-links a');
            
            links.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
            // Fallback display if navbar fails (e.g., opened via file://)
            container.innerHTML = `<header class="app-header"><a href="index.html" class="brand" style="color:var(--primary); text-decoration:none; padding: 20px;">A-Imaan Islamic (Navbar Load Error - Please use a Local Server)</a></header>`;
        });
});