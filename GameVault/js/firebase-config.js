/* ==========================================
   FIREBASE CONFIGURATION
   ==========================================
   This file connects your website to Google's Authentication servers.
   Follow the Walkthrough guide to get these keys from the Firebase Console.
   ========================================== */

const firebaseConfig = {
    apiKey: "AIzaSyB2N7cV173hC8hjmmw3A0KhTY1StClMLCQ",
    authDomain: "gamevault-1fe9a.firebaseapp.com",
    projectId: "gamevault-1fe9a",
    storageBucket: "gamevault-1fe9a.firebasestorage.app",
    messagingSenderId: "67714416711",
    appId: "1:67714416711:web:e888e2bc3bb05806ddb162",
    measurementId: "G-92PYVYNK4J"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// LOCAL persistence is the default for web, no need to set it explicitly
// which avoids page-load race conditions.

// ==========================================
// ALLOWED EMAILS SECURITY LIST
// ==========================================
// Only the emails perfectly matching the ones in this list will be allowed in.
// Everyone else will get an "Access Denied" error.
const ALLOWED_EMAILS = [
    "jaemarkalmeria08@gmail.com",
    "princesskaeleenloisse.sumalpong.cvt@eac.edu.ph",
    "trixjgallardo@gmail.com",
    "carloadonsyo@gmail.com"
];
