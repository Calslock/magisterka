Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

function darkmode(){
    const head = document.head;
    if (document.getElementById("dark-mode-css") == null) {
        const darkModeString = '<link id="dark-mode-css" rel="stylesheet" href="../css/dark.css">';
        head.innerHTML += darkModeString;
        localStorage.setItem("@dark-mode", "true");
    } else {
        document.getElementById("dark-mode-css").remove();
        localStorage.setItem("@dark-mode", "false");
    }
}

function changefont(){
    const head = document.head;
    if (document.getElementById("alternate-font-css") == null) {
        const alternateModeString = '<link id="alternate-font-css" rel="stylesheet" href="../css/alternate-font.css">';
        head.innerHTML += alternateModeString;
        localStorage.setItem("@alt-font", "true");
    } else {
        document.getElementById("alternate-font-css").remove();
        localStorage.setItem("@alt-font", "false");
    }
}

function highcontrast(){
    const head = document.head;
    if (document.getElementById("high-contrast-css") == null) {
        const alternateModeString = '<link id="high-contrast-css" rel="stylesheet" href="../css/high-contrast.css">';
        head.innerHTML += alternateModeString;
        localStorage.setItem("@high-contrast", "true");
    } else {
        document.getElementById("high-contrast-css").remove();
        localStorage.setItem("@high-contrast", "false");
    }
}

let font_factor = 0;

function changefontsize(id, factor){
    let txt = document.getElementById(id);
    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + factor) + 'px';
}

const elements = [
    "header-login",
    "header-date",
    "header-news-bar",
    "left-section",
    "middle-section"
];

function changesize(factor){
    elements.forEach(element => changefontsize(element, factor));
    font_factor += factor;
    localStorage.setItem("@font-size", font_factor);
}

function login(){
    let login = document.getElementById("login-login").value;
    let password = document.getElementById("login-password").value;

    let user_pass = localStorage.getItem(login);
    if (user_pass == null){
        alert("Such user doesn't exist");
    }
    else{
        if (password === user_pass){
            sessionStorage.setItem("logged-in", login);
            window.location = "/bad/";
        }
        else alert("Incorrect password!");
    }
}

function registeracc(){
    let login = document.getElementById("register-login").value;
    let password = document.getElementById("register-password").value;
    let repeat_pass = document.getElementById("repeat-password").value;

    if (password !== repeat_pass){
        alert("Passwords aren't identical!");
    }
    else if (localStorage.getItem(login) != null){
        alert("Such user already exists!");
    }
    else{
        localStorage.setItem(login, password);
        alert("Registered successfully!")
        window.location = "/bad/login.php";
    }

}

function logout(){
    sessionStorage.removeItem("logged-in");
    alert("Logged out successfully!");
    window.location = "/bad/";
}

function changelogin(){
    let user = sessionStorage.getItem("logged-in");
    if (user == null){
        alert("You are not logged in!");
        window.location = "/bad/";
    }
    else{
        let newlogin = document.getElementById("change-login").value;
        let password = localStorage.getItem(user);
        localStorage.removeItem(user);
        localStorage.setItem(newlogin, password);
        sessionStorage.setItem("logged-in", newlogin);
        alert("Login changed successfully!");
        window.location = "/bad/";
    }
}

function changepass(){
    let user = sessionStorage.getItem("logged-in");
    if (user == null){
        alert("You are not logged in!");
        window.location = "/bad/";
    }
    else{
        let newpassword = document.getElementById("change-password").value;
        let repnewpassword = document.getElementById("change-repeat-password").value;
        if (newpassword !== repnewpassword){
            alert("Passwords aren't identical!");
        }
        else{
            localStorage.setItem(user, newpassword)
            alert("Password changed successfully!");
            window.location = "/bad/";
        }
    }
}