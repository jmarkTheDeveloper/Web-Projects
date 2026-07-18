// Prevent right click
document.addEventListener('contextmenu', event => event.preventDefault());

// Prevent keyboard shortcuts for developer tools and view source
document.addEventListener('keydown', (e) => {
    // Prevent F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    // Prevent Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }
    // Prevent Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
    // Prevent Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }
});
