let login_popup = document.getElementById('login_popup');
let signup_popup = document.getElementById('signup_popup');

function login_button() {
    login_popup.classList.add('!block');
    signup_popup.classList.remove('!block');
}
function close_login_popup() {
    login_popup.classList.remove('!block');
}

function signup() {
    signup_popup.classList.add('!block');
    login_popup.classList.remove('!block');
}
function close_signup_popup() {
    signup_popup.classList.remove('!block');
}