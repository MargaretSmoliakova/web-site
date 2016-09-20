// It sets focus on the first text area
function setUpFocusSignUp() {
    var target = document.getElementById("sign_up_first_name");
    target.focus();
}

// It sets focus on the next text area after eneter have been pushed
function changeFocus(e) {
    var elFocus = document.activeElement;
    var parentElement = elFocus.parentNode;
    var arrayInputs = parentElement.getElementsByTagName("input");
    
    for (i = 0; i + 1 < arrayInputs.length; i++) {
        if (arrayInputs[i] === document.activeElement && e.keyCode === 13) {
            e.preventDefault();
            i++;
            arrayInputs[i].focus();
        }
    }
    
    if (i + 1  === arrayInputs.length) {
        i = 0;
    }
}

// It checks whether email address has @ sign
function checkEmail(e) {
    if (e.target === document.getElementById("sign_up_email") && document.getElementById("sign_up_email").value) {
        var email = document.getElementById("sign_up_email").value;
        var searchSign = email.search("@");
        
         if (searchSign === -1 || email.slice(-1) === "@" || email[0] === "@") {
            var txt = "*Пожалуйста, введите корректный электронный адрес.";
            document.getElementById("sign_up_email_feedback").innerHTML = txt;
            e.target.style.background = "#A73232";
            e.target.style.borderColor = "#A73232";
        } else {
            document.getElementById("sign_up_email_feedback").innerHTML = "";
            e.target.style.background = "";
            e.target.style.borderColor = "";
        }
    } else if (!document.getElementById("sign_up_email").value) {
        document.getElementById("sign_up_email_feedback").innerHTML = "";
        e.target.style.background = "";
        e.target.style.borderColor = "";
    }
}

// It checks whether a new password is equal to the controlling password
function checkPasswords(e) {
    if (e.target === document.getElementById("sign_up_control_password") && document.getElementById("sign_up_password").value && document.getElementById("sign_up_control_password").value) {
        var newPassword = document.getElementById("sign_up_password").value;
        var controlPassword = document.getElementById("sign_up_control_password").value;
        
        var isEqual = (newPassword === controlPassword) ? true : false;
        
        if (isEqual === false) {
            var txt = "*Введенный повторно пароль не совпадает с ранее созданным паролем.";
            document.getElementById("sign_up_control_password_feedback").innerHTML = txt;
            e.target.style.background = "#A73232";
            e.target.style.borderColor = "#A73232";
        } else {
            document.getElementById("sign_up_control_password_feedback").innerHTML = "";
            e.target.style.background = "";
            e.target.style.borderColor = "";
        }
    } else if (!document.getElementById("sign_up_password").value || !document.getElementById("sign_up_control_password").value) {
            document.getElementById("sign_up_control_password_feedback").innerHTML = "";
            e.target.style.background = "";
            e.target.style.borderColor = "";
    }
}

// It shows entered passwords
function showPassword(e) {
    if (e.target === document.getElementById("show_password")) {
        var passwordInput = document.getElementById("sign_up_password");
        var passwordInputControl = document.getElementById("sign_up_control_password");
        
        passwordInput.setAttribute("type", "text");
        passwordInputControl.setAttribute("type", "text");
    }
}

// It hides entered password
function hidePassword (e) {
    if (e.target === document.getElementById("show_password")) {
        var passwordInput = document.getElementById("sign_up_password");
        var passwordInputControl = document.getElementById("sign_up_control_password");
        
        passwordInput.setAttribute("type", "password");
        passwordInputControl.setAttribute("type", "password");
    }
}

var i = 0;

document.addEventListener("DOMContentLoaded", setUpFocusSignUp, false);
document.addEventListener("keydown", changeFocus, true);
document.addEventListener("blur", checkEmail, true);
document.addEventListener("blur", checkPasswords,  true);
document.addEventListener("mouseover", showPassword, false);
document.addEventListener("mouseout", hidePassword, false);







