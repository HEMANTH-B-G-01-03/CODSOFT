document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    // Check user's preference from localStorage
    const mode = localStorage.getItem('mode');
    if (mode) {
        body.classList.add(mode);
    } else {
        // Default to dark mode if user preference is not set
        body.classList.add('dark-mode');
    }

    // Toggle between light and dark modes
    modeToggle.addEventListener('click', function () {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('mode', 'light-mode');
        }
    });
});