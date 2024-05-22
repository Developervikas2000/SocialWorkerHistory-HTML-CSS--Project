// SignUp&LogInPage.js

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign Up Form Submitted');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login Form Submitted');
});
