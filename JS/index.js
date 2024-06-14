var emailInput = document.getElementById("floatingEmail")
var passwordInput = document.getElementById("floatingPassword")

if (localStorage.getItem("users") == null) {
    userData = []
}
else {
    userData = JSON.parse(localStorage.getItem("users"))
}

function validateLoginData() {
    var email = emailInput.value;
    var password = passwordInput.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }

    var userFound = false;
    var userName = "";

    for (var i = 0; i < userData.length; i++) {
        if (userData[i].userEmail == email && userData[i].userPassword == password) {
            userFound = true;
            userName = userData[i].userName;
            break;
        }
    }

    if (userFound) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(userName));
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password.");
    }
}