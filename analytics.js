// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9rbZT9H4miq0ZPQG-Fy56_4dOcScT-qk",
    authDomain: "personal-website-the-sequel.firebaseapp.com",
    projectId: "personal-website-the-sequel",
    storageBucket: "personal-website-the-sequel.firebasestorage.app",
    messagingSenderId: "927225859804",
    appId: "1:927225859804:web:e826011a4ef3bdde47ae19",
    measurementId: "G-71ZLEK7GPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);