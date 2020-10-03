let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let checkbox = document.getElementById('checkbox')
let inputField = document.getElementById('inputField')
let submitButton = document.getElementById('submitButton')
let showPassword = document.getElementById('showPassword')
let showConfirmPassword = document.getElementById('showConfirmPassword')

submitButton.addEventListener('click', () => {
    validateForm()
})

showPassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})

showConfirmPassword.addEventListener('click', () => {
    if (confirmPassword.type === 'password') {
        confirmPassword.type = 'text'
    } else {
        confirmPassword.type = 'password'
    }
})


function validateForm() {
    let firstNameValue = firstName.value
    let lastNameValue = lastName.value
    let emailValue = email.value
    let passwordValue = password.value
    let confirmPasswordValue = confirmPassword.value

    if (firstNameValue == '' || firstNameValue == null) alert('First name must be filled out')
    if (lastNameValue == '' || lastNameValue == null) alert('Last name must be filled out')
    if (emailValue == '' || emailValue == null) alert('Email must be filled out')
    if (passwordValue == '' || passwordValue == null) alert('Password can not be blank')
    if (confirmPasswordValue == '' || confirmPasswordValue == null) alert('Password does not match')
    if (passwordValue !== confirmPasswordValue) alert('Password does not match')
    
    if (checkbox.checked = false) alert('You must accept terms of use & privacy policy to submit form.')
}

