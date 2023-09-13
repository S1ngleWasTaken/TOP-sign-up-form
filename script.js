const passwordEl = document.getElementById('password')
const confirmPasswordEl = document.getElementById('confirmPassword')
const passwordWarnings = Array.prototype.slice.call(document.querySelectorAll('.password-warning'))
const submitBtn = document.querySelector('.submit-btn')
console.log(submitBtn);
let passwordValid = false

let checkMatchingPasswords = function(){
    console.log("pog"); 
    if(passwordEl.value === confirmPasswordEl.value){
        passwordWarnings.forEach(warning => {
            warning.style.display ="none"
        });
        passwordEl.style.borderColor = "green";
        passwordEl.style.backgroundColor = "rgb(169, 239, 169)";
        confirmPasswordEl.style.borderColor = "green";
        confirmPasswordEl.style.backgroundColor = "rgb(169, 239, 169)";
        passwordValid = true;
        console.log(passwordValid);
    }else{
        passwordWarnings.forEach(warning => {
            warning.style.display ="block"
        });
        passwordEl.style.borderColor = "red";
        passwordEl.style.backgroundColor = "rgb(255, 158, 158)";
        confirmPasswordEl.style.borderColor = "red";
        confirmPasswordEl.style.backgroundColor = "rgb(255, 158, 158)";
        passwordValid = false
        console.log(passwordValid);
    }
}


confirmPasswordEl.addEventListener('input', checkMatchingPasswords);
passwordEl.addEventListener('input', checkMatchingPasswords);
submitBtn.addEventListener('click', function(event){
    if(passwordValid = false){
        event.preventDefault()
    }
});