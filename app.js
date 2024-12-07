// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Firebase config (replace with your own Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyCgvU-sI8bvRMo_7gHTjyZ2-eJ7ewzKzwE",
    authDomain: "hackatone-eae39.firebaseapp.com",
    projectId: "hackatone-eae39",
    storageBucket: "hackatone-eae39.firebasestorage.app",
    messagingSenderId: "566455905296",
    appId: "1:566455905296:web:166a722bce84b86f036e95",
    measurementId: "G-6WL1ZWS4CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Logged in successfully!");
      // Redirect to another page or dashboard
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
}

// Password Reset function
function resetPassword(email) {
  getAuth().sendPasswordResetEmail(email)
    .then(function() {
      alert('Password reset email sent!');
    })
    .catch(function(error) {
      alert('Error: ' + error.message);
    });
}

// Event listener for login form
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("Email: ", email);  // Debugging output
    console.log("Password: ", password);  // Debugging output
    loginUser(email, password);  // Call the login function
});
