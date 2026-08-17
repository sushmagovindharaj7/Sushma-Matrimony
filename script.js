// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.7.1/firebase-auth.js";


// --------------------------------------------------
// FIREBASE CONFIGURATION
// --------------------------------------------------

const firebaseConfig = {

    apiKey: "AIzaSyB1wp-BPNe8KCYuBHch6oJOjt7UkHN7bFA",

    authDomain: "sushma-matrimony.firebaseapp.com",

    projectId: "sushma-matrimony",

    storageBucket: "sushma-matrimony.firebasestorage.app",

    messagingSenderId: "922813961896",

    appId: "1:922813961896:web:8e340b4980dc2c7bbfd49d",

    measurementId: "G-25PRFK5SGD"
};


// --------------------------------------------------
// INITIALIZE FIREBASE
// --------------------------------------------------

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// --------------------------------------------------
// REGISTRATION
// --------------------------------------------------

const registrationForm =
    document.getElementById("registrationForm");


if (registrationForm) {

    registrationForm.addEventListener("submit", async function(event) {

        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const mobile =
            document.getElementById("mobile").value.trim();

        const password =
            document.getElementById("password").value;

        const gender =
            document.getElementById("gender").value;

        const dob =
            document.getElementById("dob").value;

        const city =
            document.getElementById("city").value.trim();

        const religion =
            document.getElementById("religion").value;

        const education =
            document.getElementById("education").value.trim();

        const occupation =
            document.getElementById("occupation").value.trim();

        const about =
            document.getElementById("about").value.trim();


        // Check password

        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;
        }


        try {

            // Create Firebase account

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


            const user = userCredential.user;


            // Set user's display name

            await updateProfile(user, {

                displayName: name

            });


            // Save temporary profile information
            // in browser storage for now.
            // We will move this to Firestore next.

            const profileData = {

                uid: user.uid,

                name: name,

                email: email,

                mobile: mobile,

                gender: gender,

                dob: dob,

                city: city,

                religion: religion,

                education: education,

                occupation: occupation,

                about: about

            };


            localStorage.setItem(
                "sushmaProfile",
                JSON.stringify(profileData)
            );


            alert(
                "Registration successful! Welcome to Sushma Matrimony ❤️"
            );


            // Go to profile page

            window.location.href = "profile.html";


        } catch (error) {

            console.error(error);


            if (error.code === "auth/email-already-in-use") {

                alert(
                    "This email is already registered. Please login."
                );

            } else if (error.code === "auth/invalid-email") {

                alert(
                    "Please enter a valid email address."
                );

            } else if (error.code === "auth/weak-password") {

                alert(
                    "Password is too weak. Use at least 6 characters."
                );

            } else {

                alert(
                    "Registration failed: " + error.message
                );
            }
        }

    });

}
