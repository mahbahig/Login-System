var nameInput = document.getElementById("floatingName");
var emailInput = document.getElementById("floatingEmail");
var passwordInput = document.getElementById("floatingPassword");

if (localStorage.getItem("users") == null) {
    userData = [];
}
else {
    userData = JSON.parse(localStorage.getItem("users"));
}

function validateSignUp() {
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!nameRegex.test(name)) {
        alert("Invalid name. Only letters and spaces are allowed.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain both letters and numbers.");
        return;
    }

    for (var i = 0; i < userData.length; i++) {
        if (userData[i].userEmail === email) {
            alert("Email is already used. Please use a different email.");
            return;
        }
    }

    var user = {
        userName: name,
        userEmail: email,
        userPassword: password
    };

    userData.push(user);
    localStorage.setItem("users", JSON.stringify(userData));
    alert("Signup successful!");
    window.location.href = "index.html";
}