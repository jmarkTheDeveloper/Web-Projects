// ==========================================
// CLIENT-SIDE SECURITY & DEVS DETERRENT
// ==========================================

// 1. Prevent right click context menu
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

// 2. Prevent keyboard shortcuts for developer tools and view source
document.addEventListener('keydown', (e) => {
    const key = (e.key || '').toLowerCase();
    
    // Prevent F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && key === 'u') {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+S (Save Page)
    if (e.ctrlKey && key === 's') {
        e.preventDefault();
        return false;
    }
});

// 3. Prevent dragging text and images
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// 4. Repeatedly clear console to hide logs
setInterval(() => {
    console.clear();
}, 1000);

// 5. Anti-Debugging Loop (Stalls execution if Inspect/Console is opened)
const antiDebug = () => {
    try {
        (function() {
            (function a() {
                try {
                    (function b(i) {
                        if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                            (function() {}).constructor('debugger')();
                        } else {
                            debugger;
                        }
                        b(++i);
                    }(0));
                } catch (e) {
                    setTimeout(a, 1000);
                }
            }());
        }());
    } catch (err) {}
};

// Initiate anti-debug check on load
antiDebug();
setInterval(antiDebug, 2000);

