var lname = localStorage.getItem("name");
var lemail = localStorage.getItem("email");
var lpass = localStorage.getItem("password");

var nam = document.getElementById("nam");
var pass = document.getElementById("pass");
var login = document.getElementById("login");

console.log(lname, lpass);

login.addEventListener("click", log);
function log() {

    if (lname === nam.value && lpass === pass.value) {
        window.open("log_success.html");
    }
    else if (nam.value == "admin" && pass.value == "admin") {
        window.open("log_success.html");
    } else {
        alert("Please enter a Correct Name and Password");
    }
}