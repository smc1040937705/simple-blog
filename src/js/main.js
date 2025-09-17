// Simple Blog JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Simple Blog loaded successfully');
    
    // Add some basic functionality
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigation clicked:', this.textContent);
        });
    });
});
