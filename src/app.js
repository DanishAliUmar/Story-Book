let login_popup = document.getElementById('login_popup');
let signup_popup = document.getElementById('signup_popup');
let login_eye = document.getElementById('login_eye');
let input_login = document.querySelector('.input_login');


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

function login_input_eye() {
    if (input_login.type === 'password') {
        login_eye.classList.add('fa-eye');
        input_login.type = 'text';
    }else{
        login_eye.classList.remove('fa-eye');
        input_login.type = 'password';
    }
}