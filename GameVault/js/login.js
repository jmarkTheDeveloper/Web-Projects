const signInBtn = document.getElementById('googleSignInBtn');
const errorMsg = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

// Check if user is already logged in and allowed
auth.onAuthStateChanged(user => {
    if (user) {
        const userEmail = user?.email?.toLowerCase();
        const allowedEmails = ALLOWED_EMAILS.map(e => e.toLowerCase());

        if (allowedEmails.includes(userEmail)) {
            // Valid user, redirect to main site
            localStorage.setItem('hasLoggedInBefore', 'true');
            window.location.replace('/');
        } else {
            // Logged in but not allowed - sign them out immediately
            auth.signOut();
            showError(`Access Denied: ${user.email} is not registered. Pls avail the gamepass first`);
        }
    }
});

// Handle result when user returns from a Google Redirect (mobile flow)
auth.getRedirectResult().then((result) => {
    if (result && result.user) {
        const userEmail = result.user.email?.toLowerCase();
        const allowedEmails = ALLOWED_EMAILS.map(e => e.toLowerCase());

        if (allowedEmails.includes(userEmail)) {
            localStorage.setItem('hasLoggedInBefore', 'true');
            window.location.replace('/');
        } else {
            auth.signOut();
            showError(`Access Denied: ${result.user.email} is not registered. Please buy the gamepass first.`);
        }
    }
}).catch((error) => {
    console.error("Redirect Auth Error:", error);
    showError("Sign-in was cancelled or failed. Please try again.");
});

// Update Welcome text based on first-time visit
document.addEventListener('DOMContentLoaded', () => {
    const loginTitle = document.querySelector('.login-title');
    const hasLoggedIn = localStorage.getItem('hasLoggedInBefore');

    if (!hasLoggedIn && loginTitle) {
        loginTitle.innerHTML = 'Hi welcome! <span class="wave">👋</span>';
    } else if (loginTitle) {
        loginTitle.innerHTML = 'Welcome back <span class="wave">👋</span>';
    }
});

signInBtn.addEventListener('click', () => {
    errorMsg.classList.add('hidden');

    const originalText = signInBtn.innerHTML;
    signInBtn.innerHTML = '<span class="wave">⏳</span> Connecting to Google...';
    signInBtn.style.pointerEvents = 'none';

    // Always use popup — it does NOT require third-party cookies (unlike redirect).
    // This fixes the Brave "legacy Google Sign-In" cookie prompt on mobile.
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const userEmail = user?.email?.toLowerCase();
            const allowedEmails = ALLOWED_EMAILS.map(e => e.toLowerCase());

            if (allowedEmails.includes(userEmail)) {
                localStorage.setItem('hasLoggedInBefore', 'true');
                window.location.replace('/');
            } else {
                auth.signOut();
                signInBtn.innerHTML = originalText;
                signInBtn.style.pointerEvents = 'auto';
                showError(`Access Denied: ${user.email} is not registered. Please buy the gamepass first.`);
            }
        })
        .catch((error) => {
            console.error("Auth Error:", error);

            if (error.code === 'auth/popup-blocked') {
                // Popup was blocked by the browser — fall back to redirect
                auth.signInWithRedirect(provider).catch(() => {
                    signInBtn.innerHTML = originalText;
                    signInBtn.style.pointerEvents = 'auto';
                    showError("Unable to open Google sign-in. Try opening this site in your default browser.");
                });
            } else if (
                error.code === 'auth/cancelled-popup-request' ||
                error.code === 'auth/popup-closed-by-user'
            ) {
                signInBtn.innerHTML = originalText;
                signInBtn.style.pointerEvents = 'auto';
                showError("Sign-in was cancelled. Please try again.");
            } else {
                signInBtn.innerHTML = originalText;
                signInBtn.style.pointerEvents = 'auto';
                showError("Sign-in failed. Please check your connection and try again.");
            }
        });
});

function showError(message) {
    errorText.textContent = message;
    errorMsg.classList.remove('hidden');
}
