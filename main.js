var names = document.getElementById("names");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpass = document.getElementById("cpass");
var register = document.getElementById("register");
var log = document.getElementById("log");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");

names.addEventListener("input", namess);
function namess() {

    if (names.value === "" || names.value == null) {
        p1.textContent = "Please enter your name!";
    } else {
        p1.textContent = "";
    }
}

email.addEventListener("input", emails);
function emails() {

    if (email.value === "" || email.value == null) {
        p2.textContent = "Please enter your email!";
    }else if(!emailvalid(email.value)){
        p2.textContent="Please enter a Valid Email";
    }
    
    
    else {
        p2.textContent = "";
    }
}
function emailvalid(input){
    return input.includes("@gmail.com");
}
password.addEventListener("input", passwords);
function passwords() {

    if (password.value === "" || password.value == null) {
        p3.textContent = "Please enter password!";
    } else if (password.value.length <= 8) {
        p3.textContent = "Password minimum lenghth must be 8";

    } else {
        p3.textContent = "";
    }

}
register.addEventListener("click", registers);
function registers() {


    if (password.value === cpass.value) {
        alert("success");
    } else {
        alert("Password Not Match!!!");
        window.open("index.html");
    }
    localStorage.setItem("name", names.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    var a = localStorage.getItem("name");
    var b = localStorage.getItem("email");
    var c = localStorage.getItem("password");

    alert("NAME:" + a + "EMAIL:" + b + "PASSWORD:" + c);


    //window.open("login.html");

}
log.addEventListener("click", login);
function login() {

    localStorage.setItem("name", names.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    window.open("login.html");

}






