// ================ Verification Proccess ===============

const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(){
    if(emailInput.value === 'baap@putro.com' && passwordInput.value === 'baaputro') {
        window.location.href = 'bank-hisab';
    }
    else {
        window.alert('invalid email/password');
    }
    emailInput.value = '';
    passwordInput.value = '';
});