// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let submitButton = document.getElementById("submit-button")

// let urlPost = "https://reqres.in/api/register"


// let userObject = {
//     email: "eve.holt@reqres.in",
//     password: "12345"
// }

// const sendHttpRequest = (method, url, data) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)

//     xhr.setRequestHeader('Content-Type', 'application/json')
//     xhr.onload = function() {
//         let data = JSON.parse(this.response)
//         console.log(data)
//     }
//     xhr.send(JSON.stringify(data))
// }

// const sendData = () => {
//     sendHttpRequest("POST", urlPost, userObject)
// }

// const deleteData = () => {
//     sendHttpRequest('DELETE', "https://reqres.in/api/users/2")
// }
// deleteData()

const deleteButton = document.getElementById("delete-button")

deleteButton.addEventListener('click', function() {
    let xhr = new XMLHttpRequest()
    
    xhr.open('DELETE', "https://reqres.in/api/users/2")
    xhr.setRequestHeader('Content-Type', 'application/json')

    // xhr.onload = function() {
    //     let data = JSON.parse(xhr.response)
    //     console.log(data)
    // }

    xhr.send()

})
