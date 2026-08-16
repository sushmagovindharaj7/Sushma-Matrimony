// ================================
// SUSHMA MATRIMONY
// Main JavaScript File
// ================================


// Registration Form

const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const mobile =
                document.getElementById("mobile").value;

            const password =
                document.getElementById("password").value;

            const gender =
                document.getElementById("gender").value;

            const dob =
                document.getElementById("dob").value;

            const city =
                document.getElementById("city").value;

            const religion =
                document.getElementById("religion").value;

            const education =
                document.getElementById("education").value;

            const occupation =
                document.getElementById("occupation").value;

            const about =
                document.getElementById("about").value;


            const user = {

                name: name,

                email: email,

                mobile: mobile,

                password: password,

                gender: gender,

                dob: dob,

                city: city,

                religion: religion,

                education: education,

                occupation: occupation,

                about: about

            };


            // Temporary storage
            // Firebase will replace this later.

            localStorage.setItem(
                "sushmaUser",
                JSON.stringify(user)
            );


            alert(
                "Registration successful! Welcome to Sushma Matrimony."
            );


            window.location.href =
                "profile.html";

        }
    );

}


// ================================
// Login
// ================================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value;

            const password =
                document.getElementById("loginPassword").value;


            const savedUser =
                localStorage.getItem("sushmaUser");


            if (!savedUser) {

                alert(
                    "No account found. Please register first."
                );

                return;
            }


            const user =
                JSON.parse(savedUser);


            if (
                email === user.email &&
                password === user.password
            ) {

                alert("Login successful!");

                window.location.href =
                    "profile.html";

            } else {

                alert(
                    "Incorrect email or password."
                );

            }

        }
    );

}


// ================================
// Load Profile
// ================================

const savedUser =
    localStorage.getItem("sushmaUser");


if (savedUser) {

    const user =
        JSON.parse(savedUser);


    const profileName =
        document.getElementById("profileName");

    const profileCity =
        document.getElementById("profileCity");

    const profileEducation =
        document.getElementById("profileEducation");

    const profileOccupation =
        document.getElementById("profileOccupation");


    if (profileName) {

        profileName.textContent =
            user.name;

    }


    if (profileCity) {

        profileCity.textContent =
            user.city;

    }


    if (profileEducation) {

        profileEducation.textContent =
            user.education;

    }


    if (profileOccupation) {

        profileOccupation.textContent =
            user.occupation;

    }

}


// ================================
// Logout
// ================================

function logout() {

    alert("You have been logged out.");

    window.location.href =
        "index.html";

}


// ================================
// Edit Profile
// ================================

function editProfile() {

    window.location.href =
        "register.html";

}


// ================================
// Search Profiles
// ================================

function searchProfiles() {

    const city =
        document.getElementById("searchCity").value;


    if (city === "") {

        alert(
            "Please enter a city to search."
        );

        return;
    }


    alert(
        "Searching for matches in " + city
    );

}


// ================================
// Send Interest
// ================================

function sendInterest() {

    alert(
        "Interest sent successfully ❤️"
    );

}
