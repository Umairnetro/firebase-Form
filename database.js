// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyB7ytVoE1qHzYb3OqZhqfJAQxqcHgDbPxk",
  authDomain: "firstdatabase-fef3a.firebaseapp.com",
  projectId: "firstdatabase-fef3a",
  storageBucket: "firstdatabase-fef3a.appspot.com",
  messagingSenderId: "744499534085",
  appId: "1:744499534085:web:3e09fe374ee3458c05ff6c",
  measurementId: "G-17LNWD5JVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const analytics = getAnalytics(app);

// Form
const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const verification = document.querySelector("#alert");


submit.addEventListener("click", (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      verification.classList.remove("hide");
      verification.children[0].innerHTML = "User has been created";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      verification.classList.remove("hide");
      verification.children[0].innerHTML = "User already exist";
    });
});


