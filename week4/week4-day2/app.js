// let today = new Date()
// let elDate = document.getElementById("date")
// elDate.textContent = today


// let nameTextBox = document.getElementById('nameTextBox')
// let submitButton = document.getElementById('submitButton')
// let submitValue = document.getElementById('submitValue')

// // add event listener
// submitButton.addEventListener("click", function() {
//     // get value of the text box
//     submitValue.textContent = nameTextBox.value
// })

// Activity-1: Full Name
// let firstName = document.getElementById('firstName')
// let lastName = document.getElementById('lastName')
// let submitNames = document.getElementById('submit')
// let fullName = document.getElementById('fullName')

// submitNames.addEventListener("click", function() {
//     let fullNameText = firstName.value + ' ' + lastName.value;
//     fullName.textContent = fullNameText
// })

// Activity-2

let redButton = document.getElementById('redButton')
let blueButton = document.getElementById('blueButton')
let title = document.getElementById('title')

redButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
    title.style.color = 'white'
})

blueButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue'
    title.style.color = 'white'
})