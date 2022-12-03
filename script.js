const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    
  });
// burger bar
let burger = document.querySelector(".burger-wrap");
let miniNav = document.querySelector(".active-content")
    burger.addEventListener("click", function() {
        burger.classList.toggle("active");
        miniNav.classList.toggle("active");
    });

// signup form verification
let form = document.getElementById('signup');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let userName = document.getElementById('nameField').value;
    if (userName.length == 0 || userName.match(/^[0-9]+$/) != null) {
        errors.name = "username can't be empty or contain only numbers";
    }
    let email = document.getElementById('emailField').value;
    if (email.length == 0 || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errors.email = "valid email is required";
    }
    let zipcode = document.getElementById('zipcodeField').value;
    if (zipcode.length < 5 || zipcode.length > 9 || !zipcode.match(/^[0-9]+$/)) {
        errors.zipcode = "valid zipcode is required"
    }
    let password = document.getElementById('passwordField').value;
    if (password.length < 5 || !password.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        errors.password = "password must be at least 5 characters long and contain one number and one special character"
    }
    let password2 = document.getElementById('passwordFieldrepeat').value;
    if (password2 != password) {
        errors.password2 = "passwords do not match";
    }
    document.querySelectorAll(".error-text").forEach((element) => {
        element.innerText = " ";
    });
    console.log(errors);
    for (let key in errors) {
        let errorText = document.getElementById('error_' + key);
        if (errorText) {
            errorText.innerText = errors[key];
        }
    }
    if (Object.keys(errors) == 0) {
        form.submit();
    }
})
//toggle form password
let password = document.getElementById("passwordField");
let icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
});

password.addEventListener('focus', function () {
    icon.classList.add('focused');
})

let name = document.getElementById("nameField");
let email = document.getElementById('emailField');
let zipcode = document.getElementById('zipcodeField');
let passwordRepeat = document.getElementById('passwordFieldrepeat');

name.addEventListener('focus', function(){
    icon.classList.remove('focused');
})

email.addEventListener('focus', function(){
    icon.classList.remove('focused');
})

zipcode.addEventListener('focus', function(){
    icon.classList.remove('focused');
})

passwordRepeat.addEventListener('focus', function(){
    icon.classList.remove('focused');
})
// ძალიან მინდოდა event delegation ით გაკეთება მაგრამ ვერ მოვახერხე

// login API

// create dynamic login form
let login = document.getElementsByClassName('login');
let loginParent = document.getElementById('loginParent');

for (let i of login) {
    i.addEventListener('click', (e) => {
        if (e.target.classList.contains('login')) {
            let bg = document.createElement('div');
            bg.classList.add('login-bg');
            let loginWrap = document.createElement('div');
            loginWrap.classList.add('login-wrap');
            let loginForm = document.createElement('form');
            loginForm.classList.add('login-form');
            loginForm.setAttribute('action', '');
            loginForm.setAttribute('method', 'GET');
            let userWrap = document.createElement('div');
            userWrap.classList.add('user-wrap');
            let labelUser = document.createElement('label');
            labelUser.innerText= "USERNAME:";
            labelUser.classList.add('label-user');
            labelUser.setAttribute('for', 'userName')
            let userField = document.createElement('input');
            userField.classList.add('login-user');
            userField.setAttribute('type', 'text');
            userField.setAttribute('name', 'userName')
            let passWrap = document.createElement('div');
            passWrap.classList.add('password-wrap');
            let labelPass = document.createElement('label');
            labelPass.innerText = "PASSWORD:";
            labelPass.classList.add('label-password');
            labelPass.setAttribute('for', 'userPassword')
            let loginPass = document.createElement('input');
            loginPass.classList.add('login-password');
            loginPass.setAttribute('type', 'password');
            loginPass.setAttribute('name', 'userPassword');
            let passIcon = document.createElement('i');
            passIcon.classList.add('fa-solid');
            passIcon.classList.add('fa-eye');
            passIcon.classList.add('eye');
            let loginBtn = document.createElement('button');
            loginBtn.classList.add('login-button');
            loginBtn.innerText = "LOG IN";
            loginBtn.setAttribute('type', 'submit');
            let closeBtn = document.createElement('i');
            closeBtn.classList.add('fa-solid');
            closeBtn.classList.add('fa-xmark');
            closeBtn.setAttribute('id', 'x');
            userWrap.appendChild(userField);
            passWrap.appendChild(loginPass);
            passWrap.appendChild(passIcon);
            loginForm.appendChild(labelUser);
            loginForm.appendChild(userWrap);
            loginForm.appendChild(labelPass);
            loginForm.appendChild(passWrap);
            loginForm.appendChild(loginBtn);
            loginWrap.appendChild(loginForm);
            bg.appendChild(loginWrap);
            bg.appendChild(closeBtn);
            loginParent.appendChild(bg);
            loginParent.classList.add('login-block');
        }
    })
}

// close the login form with button

loginParent.addEventListener('click', function(event){
    if (event.target.classList.contains('fa-xmark')) {
        loginParent.innerHTML = "";
    }
})